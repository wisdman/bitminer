/*
 * Generate robots.txt
 */

const path = require('path')

const { promisify } = require('util')
const fs = require('fs')
const fs_readFile  = promisify(fs.readFile)
const fs_writeFile = promisify(fs.writeFile)

// === Webpack plugin ===
module.exports =  class WebpackRobotsTXTPlugin {
  apply(compiler) {
    compiler.plugin('after-emit', async (compilation, callback) => {

      const template = path.resolve(compiler.context, 'robots.txt' )
      const filename = path.resolve(compiler.outputPath, 'robots.txt' )

      let data = await fs_readFile(template, 'utf8')

      data = data.replace(/[\r\n]+/g,'\n')
                 .replace(/\s+\n/g, '\n')

      await fs_writeFile(filename, data, 'utf8')

      callback()
    })
  }
}
