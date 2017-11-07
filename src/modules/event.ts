/*
 * Simple EventEmmitter implementation
 * with once, limit and timeout extenders
 */

export interface IEventHandler {
  (...args:Array<any>): any
}

export class EventEmitter {

  private _events: {
    [key: string]: Array<{
      handler: IEventHandler,
      limit: number,
      once: boolean,
      timeout: number,
      lastCall: number
    }>
  } = {}

  // Add event handler
  on(
    name: string,
    handler: IEventHandler,
    {
      limit = 0,
      once = false,
      timeout = 0,
    } : {
      limit?: number
      once?: boolean
      timeout?: number
    } = {}
  ): EventEmitter {
    // Name is not case sensetive
    name = name.trim().toLowerCase()

    if ( this._events[name] === undefined ) {
      this._events[name] = []
    }

    this._events[name].push({ handler, limit, once, timeout, lastCall: 0 })

    return this
  }

  // Rempve event handler
  off(value?: string | IEventHandler): EventEmitter {

    // Off all events
    if (value === undefined) {
      this._events = {}
      return this
    }

    // Off event by name
    if (typeof value === 'string' && this._events[value]) {
      delete this._events[value]
      return this
    }

    // Off event by handler
    for (let eventName in this._events) {
      this._events[eventName] = this._events[eventName].filter( item => item.handler !== value )
    }

    return this
  }

  // Emit event
  emit(name: string, ...args:Array<any>): EventEmitter {

    // Name is not case sensetive
    name = name.trim().toLowerCase()

    // Unknown name
    if (this._events[name] === undefined) {
      return this
    }

    this._events[name].forEach( item => {
      // Check limit
      if (item.limit > 0) {
        let now = Date.now()
        if (item.lastCall + item.limit > now) {
          return
        }
        item.lastCall = now
      }

      // Clear handler if once
      if (item.once) {
        this.off(item.handler)
      }

      // Call event handler
      if (item.timeout > 0) {
        setTimeout( () => item.handler.apply(this, args), item.timeout)
      } else {
        item.handler.apply(this, args)
      }
    })

    return this
  }
}
