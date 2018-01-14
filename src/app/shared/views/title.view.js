import * as Marionette from 'backbone.marionette'

const template = 'Welcome to the Canvapix'


export class TitleView extends Marionette.View {
  tagName() { return 'h5' }
  template() { return _.template(template)() }

  constructor(options) {
    super(options)
    this.render()
  }
}