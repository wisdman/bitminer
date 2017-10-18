/*
 * Safely pipe node.js streams while capturing all errors to a single promise.
 */

class StreamError extends Error {
  constructor(err, source) {
    const { message = err } = err || {}
    super(message)
    this.source = source
    this.originalError = err
  }
}

function streamPromise(stream) {
  if (stream === process.stdout || stream === process.stderr) {
    return Promise.resolve(stream)
  }

  const on = evt => {
    return new Promise( (resolve, reject) => {
      const fn = evt === 'error' ? err => reject(new StreamError(err, stream)) : () => resolve(stream)
      stream.on(evt, fn)
    })
  }

  return Promise.race(['error', 'end', 'close', 'finish'].map(on))
}

module.exports = (...streams) => {
  const allStreams = streams.reduce((prev, item) => prev.concat(item), [])

  allStreams.reduce((current, next) => current.pipe(next))
  return Promise.all(allStreams.map(streamPromise))
}
