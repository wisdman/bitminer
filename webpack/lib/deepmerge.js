/*
 * Deep merge any objects
 */

const isObject = value => typeof value === 'object' && value !== null && !Array.isArray(value)

const deepmerge = (target, source) => {

  if ( Array.isArray(target) ) {
    return target.concat(source)
  }

  if ( !isObject(target) || !isObject(source) ) {
    return source
  }

  let destination = Object.assign({}, target)

  Object.keys(source).forEach( key => {
    let value = source[key]
    destination[key] = deepmerge(target[key], source[key])
  })

  return destination
}


module.exports = (...args) => {
  if (args.length <= 1) {
    return args[0]
  }
  return args.reduce( (prev, item) => deepmerge(prev, item) )
}
