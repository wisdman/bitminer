/*
 * Zopfli output files generate
 */

const Zopfli = require('node-zopfli')
const path = require('path')
const fs = require('fs')

const promisePipe = require('./lib/promisepipe')

// === Webpack plugin ===
module.exports = class WebpackZopfliPlugin {
  constructor({
    pattern = null
  } = {}) {
    this.pattern = pattern
  }

  apply(compiler) {
    compiler.plugin('after-emit', async (compilation, callback) => {

      if (!this.pattern) {
        return Promise.resolve()
      }

      await Promise.all(Object.keys(compilation.assets).map( name => {
        if (!this.pattern.test(name)) {
          return Promise.resolve()
        }

        const file = path.resolve(compiler.outputPath, name)

        return promisePipe(
          fs.createReadStream(file),
          new Zopfli('gzip', {
            verbose: false,
            verbose_more: false,
            blocksplitting: true,
          }),
          fs.createWriteStream(file + '.gz')
        )
      }))

      callback()
    })
  }
}
