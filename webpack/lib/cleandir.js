/*
 * Clean directory
 */

const path = require('path')
const fs = require('fs')

const { promisify } = require('util')

const fs_readdir = promisify(fs.readdir)
const fs_rmdir   = promisify(fs.rmdir)
const fs_stat    = promisify(fs.stat)
const fs_unlink  = promisify(fs.unlink)

const cleandir = async (dirPath) => {
  try {
    let dirContent = await fs_readdir( path.resolve(dirPath) )
    await Promise.all(dirContent.map( async item => {
      item = path.resolve(dirPath, item)
      if ( (await fs_stat(item)).isFile() ) {
        await fs_unlink(item)
      } else {
        await cleandir(item)
        await fs_rmdir(item)
      }
    }))
  } catch (error) {
    console.error(error)
  }
}

module.exports = cleandir
