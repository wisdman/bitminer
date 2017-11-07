
import { EventEmitter } from './event'

export interface Context {
  [key: string]: Module
}

export abstract class Module extends EventEmitter {
  constructor(readonly context: Context){
    super()
  }
  init(){}
}
