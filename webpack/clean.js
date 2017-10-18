/*
 * Clean output path
 */

const mkdir = require('./lib/mkdir')
const cleandir = require('./lib/cleandir')

// === Webpack plugin ===
module.exports = class WebpackCleanPlugin {
  apply(compiler) {
    compiler.plugin('run', async (compiler, callback) => {
      await mkdir(compiler.outputPath)
      await cleandir(compiler.outputPath)
      callback()
    })
  }
}
