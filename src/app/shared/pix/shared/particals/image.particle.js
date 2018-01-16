import { Particle } from './particle'

const defaultOptions = {
  src: 'https://images-na.ssl-images-amazon.com/images/I/41m4vuGbstL._SY300_.jpg',
  width: 60,
  height: 60.
}

export class ImagePartice extends Particle {
  constructor(options) {
    super(options)

    this.src = options.src || defaultOptions.src
    this.image = new Image()

    console.log('ImagePartice co  nstructor')
  }

  moveTo(x, y) {
    this.context.drawImage(this.image, x, y)
  }

  drawFrame() {
    super.drawFrame(() => {
      console.log('Drawed farame')
    })
  }
}