/*
 * Nunjucks webpages generator
 */

const path = require('path')

const fs = require('fs')
const { promisify } = require('util')
const fs_readdir = promisify(fs.readdir)
const fs_readFile  = promisify(fs.readFile)
const fs_writeFile = promisify(fs.writeFile)

const yaml = require('js-yaml')
const frontMatter = require('front-matter')
const nunjucks = require('nunjucks')

// === File patterns ===
const HTML_PATTERN = /\.html$/
const CSS_PATTERN = /\.css$/
const JS_PATTERN = /\.js$/
const JSON_PATTERN = /\.json$/
const YML_PATTERN = /\.yml$/

// === External modules ===
const { minify } = require('html-minifier')
const toposort = require('./lib/toposort')
const deepmerge = require('./lib/deepmerge')

// === Webpack plugin ===
module.exports = class WebpackNunjucksPlugin {
  constructor({
    from = null,
    to = null,
    options = {},
    minify = {},
    data = {},
  } = {}) {
    this.from = from
    this.to = to
    this.options = options
    this.minify = minify
    this.data = data
  }

  apply(compiler) {
    compiler.plugin('after-emit', async (compilation, callback) => {

      nunjucks.configure(this.options)

      const from = path.resolve(compiler.context, this.from ? this.from : '.' )
      const to = path.resolve(compiler.outputPath, this.to ? this.to : '.' )

      // Prepare Nunjucks compiller
      const loaders = new nunjucks.FileSystemLoader(from)
      const compile = new nunjucks.Environment(loaders, this.options)


      // === Prepare chunks links ===
      // Add an edge for each parent relationship into the graph
      const edges = []
      compilation.chunks.forEach(chunk => {
        chunk.parents.forEach(parent => {
          edges.push([parent, chunk])
        })
      })

      // File paths arrays
      let CSS = []
      let JS = []

      const publicPath = compilation.options.output.publicPath || ''

      toposort(compilation.chunks, edges).forEach( chunk => {
        chunk.files.forEach( file => {
          if (CSS_PATTERN.test(file)) {
            CSS.push(`${publicPath}${file}`)
            return
          }

          if (JS_PATTERN.test(file)) {
            JS.push(`${publicPath}${file}`)
            return
          }
        })
      })


      // === Prepare common page data ===
      let DATA = {}
      if (typeof this.data === 'object' && !Array.isArray(this.data)) {
        DATA = this.data
      } else {
        let dataList = [].concat(this.data)
        for (let item of dataList) {
          if (typeof item === 'string') {
            let dataPath = path.resolve(compiler.context, item)

            let data = {}

            if (JSON_PATTERN.test(dataPath)) {
              data = require(dataPath)
            } else if (YML_PATTERN.test(dataPath)) {
              const raw = await fs_readFile(dataPath, 'utf8')
              data = yaml.safeLoad(raw)
            }

            DATA = deepmerge(DATA, data)

          } else if (typeof item === 'object' && item !== null) {

            DATA = deepmerge(DATA, item)

          }
        }
      }

      const templates = await fs_readdir(from)
      await Promise.all( templates.map( async name => {

        if (!HTML_PATTERN.test(name)) {
          return
        }

        // Get template content
        let filePath = path.resolve(from, name)
        const raw = await fs_readFile(filePath, 'utf8')

        // Extract yaml data
        const content = frontMatter(raw)

        // Ingect template data
        let data = deepmerge({ CSS, JS }, DATA, content.attributes)

        // Compile result file
        let result = compile.renderString(content.body, data)
        result = minify(result, this.minify)

        // Write output file
        filePath = path.resolve(to, name)
        await fs_writeFile(filePath, result, 'utf8')
      }) )

      callback()
    })
  }
}
