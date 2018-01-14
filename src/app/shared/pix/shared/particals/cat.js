import { ImageParticle, ImagePartice } from './image.particle'

const defaultOptions = {
  src: 'https://www.warrenphotographic.co.uk/photography/cats/09446.jpg'
}

export class Cat extends ImagePartice {
  constructor(options = {}) {
    super(options)
    console.log('Cat constructor', { options })
  }
}