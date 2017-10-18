/*
 * mkdir -p
 */

const path = require('path')
const fs = require('fs')

const { promisify } = require('util')

const fs_mkdir   = promisify(fs.mkdir)
const fs_stat    = promisify(fs.stat)

module.exports = async (dirPath) => {
  return await path.resolve(dirPath)
              .split(path.sep)
              .reduce( async (prevPromise, item) => {
                let dir = await prevPromise
                dir = path.resolve(dir, item)

                try {
                  await fs_stat(dir)
                } catch (_) {
                  await fs_mkdir(dir)
                }

                return Promise.resolve(dir)
              }, Promise.resolve('/'))
}
