
// import 'core-js/es6'
// import 'core-js/es7'

import { Context, Module } from './modules/module'
import {
  BarbaModule,
  CarouselModule,
  ParticlesModule,
} from './modules'

const context: Context = {}

context['BarbaModule'] = new BarbaModule(context)
context['CarouselModule'] = new CarouselModule(context)
context['ParticlesModule'] = new ParticlesModule(context)

function main() {
  for (let key in context) {
    context[key].init()
  }
}

const domReadyHandler = () => {
  document.removeEventListener('DOMContentLoaded', domReadyHandler)
  main()
}

switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', domReadyHandler)
    break
  case 'interactive':
  case 'complete':
  default:
    main()
}
