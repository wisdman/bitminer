import { Context, Module } from './module'
import Particles from 'particlesjs'

export class ParticlesModule extends Module {
  init() {
    Particles.init({
      selector: '#particles',
      color: '#666666',
      maxParticles: Math.round(window.innerWidth / 10),
      sizeVariations: 3,
      connectParticles: true
    })
  }
}



