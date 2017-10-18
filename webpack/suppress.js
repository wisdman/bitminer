/*
 * Supress some files
 */

// === Webpack plugin ===
module.exports =  class WebpackSupressPlugin {
  constructor({
    pattern = null
  } = {}) {
    this.pattern = pattern
  }

  apply(compiler) {
    compiler.plugin('emit', (compilation, callback) => {

      if (!this.pattern){
        return callback()
      }

      // === Remove chunks files ===
      compilation.chunks.forEach( chunk => {
        chunk.files = chunk.files.filter( item => !this.pattern.test(item) )
      })

      // === Remove assets files ===
      Object.keys(compilation.assets).forEach( item => {
        if (this.pattern.test(item)) {
          delete compilation.assets[item]
        }
      })

      callback()
    })
  }
}
