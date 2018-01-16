import * as Backbone from 'backbone'
import * as Marionette from 'backbone.marionette'
import * as _ from 'lodash'

import pixTemplate from './pix.template.html'
import { pixDefaultConfig } from './pix-default.config'

import { Cat } from './shared/particals/cat'

export class PixView extends Marionette.View {
  template() { return _.template(pixTemplate)({ ...pixDefaultConfig }) }
  
  constructor(options) {
    super(options)
    this.render()
  }

  canvas(selector = '') {
    if (selector !== '') {
      this.canvas = this.$el.find(selector)[0]
      return this.canvas
    } else {
      if(this.canvas) {
        return this.canvas
      } else {
        this.canvas = this.$el.find('canvas')[0]
        return this.canvas
      }
    }
  }

  onRender() {
    const catPartical = new Cat({
      canvas: this.canvas()
    })

    // Определение контекста рисования
    const canvas = this.$el.find('canvas')[0];
    const context = canvas.getContext("2d");  
    var cat = new Image();
    cat.src = "https://www.warrenphotographic.co.uk/photography/cats/09446.jpg";

    // Устанавливаем начальную позицию квадрата
    let timeout
    let imgWidth = 60
    let squarePosition_x = -imgWidth
    let squarePosition_y = -imgWidth

    const drawFrame = () => {
      // Очистить холст
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Вызываем метод beginPath(), чтобы убедиться,
      // что мы не рисуем часть уже нарисованного содержимого холста
      context.beginPath();

      context.drawImage(cat, squarePosition_x, squarePosition_y, imgWidth, imgWidth )
      
      // Перемещаем квадрат вниз на 1 пиксел (где он будет прорисован в следующем кадре)
      squarePosition_y += 1;
      squarePosition_x += 1;
      
      if (squarePosition_y <= canvas.height) {
        // Рисуем следующий кадр через 20 миллисекунд
        setTimeout(() => {
          drawFrame()
        }, 24)
      } else {
        squarePosition_y = 0
        squarePosition_x = 0
        setTimeout(() => { drawFrame() }, 24) // Рисуем следующий кадр через 20 миллисекунд
      }
    }

    cat.onload = () => {
      drawFrame()
    }

  }
}