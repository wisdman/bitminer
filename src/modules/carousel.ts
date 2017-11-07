import { Context, Module } from './module'
import { tns } from 'tiny-slider/src/tiny-slider.module.js'

export class CarouselModule extends Module {

  initCarousel() {
    if (!document.querySelector('.carousel'))
      return

    new tns({
      container: '.carousel',
      slideBy: 'page',
      autoplay: true,
      controls: false,
      autoplayButtonOutput: false
    })
  }

  init() {
    this.context.BarbaModule.on('transitionCompleted', () => this.initCarousel())
    this.initCarousel()
  }
}



