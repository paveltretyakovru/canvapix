import { Particle } from './particle'

const defaultOptions = {
  src: 'https://images-na.ssl-images-amazon.com/images/I/41m4vuGbstL._SY300_.jpg'
}

export class ImagePartice extends Particle {
  constructor(options) {
    super(options)

    this.src = options.src || defaultOptions.src
    this.image = new Image()

    console.log('ImagePartice co  nstructor')
  }

  drawFrame() {
    super.drawFrame(() => {
      console.log('Drawed farame')
    })
  }
}