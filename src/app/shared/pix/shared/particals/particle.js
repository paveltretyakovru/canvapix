/**
 * @property (Element)  canvas: Canvas element
 * @property (object)   context: contect of canvas
 */
export class Particle {
  constructor(options = {}) {
    console.log('Particle constructor', { options })
    this.canvas = options.canvas || document.querySelector('canvas')
    if(this.canvas) {
      this.context = this.canvas.getContext("2d")
    }
  }

  /**
   * @memberOf Particle
   */
  drawFrame(callback) {
    this.clearContext()
  }

  /**
   * clearContext() Очистить холст
   * @memberOf Particle
   */
  clearContext() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    // Вызываем метод beginPath(), чтобы убедиться,
    // что мы не рисуем часть уже нарисованного содержимого холста
    this.context.beginPath();
  }
}