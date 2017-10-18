import { Context, Module } from './module'
import Barba from 'barba.js'

export class BarbaModule extends Module {
  init() {
    Barba.Prefetch.init()
    Barba.Pjax.start()
  }
}
