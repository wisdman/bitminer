/*
 * Shell script runner
 */

const { spawn } = require('child_process')

module.exports = async (commend, ...args) => {
  return new Promise( (resolve, reject) => {
    const proc = spawn(commend, args, {stdio: 'inherit'})
    proc.on('close', error => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}
