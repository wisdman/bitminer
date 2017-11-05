/*
 * Favicons generate
 */

const path = require('path')
const exec = require('./lib/exec')

// === Webpack plugin ===
module.exports = class WebpackFaviconsPlugin {
  constructor({
    template = null
  } = {}) {
    this.template = template
  }

  apply(compiler) {
    compiler.plugin('after-emit', async (compilation, callback) => {

      const template = path.resolve(compiler.context, this.template ? this.template : 'favicon.svg' )

      const pngFavicon   = path.resolve(compiler.outputPath, 'favicon.png' )
      const appleFavicon = path.resolve(compiler.outputPath, 'apple-touch-icon.png')
      // const icoFavicon   = path.resolve(compiler.outputPath, 'favicon.ico' )

      try {

        await exec('convert', '-background', 'none', '-resize', '192x', template, pngFavicon)
        await exec('pngquant', pngFavicon)

        await exec('convert', '-background', 'none', '-resize', '180x', template, appleFavicon)
        await exec('pngquant', appleFavicon)

        // await exec('convert', '-background', 'none', '-colors', '256', '-define', 'icon:auto-resize=32,16', template, icoFavicon)
      } catch (error) {
        console.error(error)
      }

      callback()
    })
  }
}
