/*
 * Generate WEB manifest
 */

const path = require('path')

const { promisify } = require('util')
const fs = require('fs')
const fs_writeFile = promisify(fs.writeFile)

// === Webpack plugin ===
module.exports = class WebpackManifestPlugin {
  constructor({
    template = null
  } = {}) {
    this.template = template
  }

  apply(compiler) {
    compiler.plugin('after-emit', async (compilation, callback) => {

      const template = path.resolve(compiler.context, this.template ? this.template : 'manifest.json' )

      const filename = path.resolve(compiler.outputPath, 'manifest.json' )

      let manifest = require(template)

      await fs_writeFile(filename, JSON.stringify(manifest), 'utf8')
      callback()
    })
  }
}
