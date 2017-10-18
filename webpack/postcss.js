/*
 * Post css plugin
 */

// === Css file pattern ===
const CSS_PATTERN = /\.css$/

// === PostCSS webpack plugin dependences ===
const postcss = require('postcss')
const webpackSources = require('webpack-sources')

// === Webpack plugin ===
module.exports = class WebpackPostCSSPlugin {
  constructor({
    plugins = []
  } = {}) {
    this.plugins = Array.isArray(plugins) ? plugins : []
  }

  apply(compiler) {
    compiler.plugin('emit', async (compilation, callback) => {

      if (this.plugins.length === 0) {
        callback()
        return
      }

      await Promise.all(Object.keys(compilation.assets).map( name => {
        if (!CSS_PATTERN.test(name)) {
          return Promise.resolve()
        }

        const asset = compilation.assets[name]
        const originalCss = asset.source()

        const mapName = originalCss.match(/\/\*# sourceMappingURL=(.{1,200}).*\*\/$|$/)[1]
        const inlineMap = mapName ? mapName.search(/^data:/) === 0 : false

        const mapAsset = mapName && !inlineMap ? compilation.assets[mapName] : null
        const externalMap = mapAsset ? mapAsset.source() : undefined

        const processOptions = {
          from: name,
          to: name,
          map: (inlineMap || externalMap) ? {
            inline: inlineMap,
            sourcesContent: true,
            prev: externalMap
          } : false
        }

        return postcss(this.plugins)
              .process(originalCss, processOptions)
              .then(result => {
                const warnings = result.warnings()
                if (warnings && warnings.length) {
                  console.error(warnings.join('\n'))
                }

                compilation.assets[name] = new webpackSources.RawSource(result.css)

                if (mapAsset) {
                  compilation.assets[mapName] = new webpackSources.RawSource( JSON.stringify(result.map) )
                }

                console.log(`\nProcessed ${name}. Length before: ${originalCss.length}, length after: ${result.css.length}`)
              })
      }))

      callback()
    })
  }
}
