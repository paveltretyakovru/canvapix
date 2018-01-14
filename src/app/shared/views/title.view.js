import 'backbone'
import 'lodash'

const template = 'Welcome to the Canvapix'

export const TitleView = Backbone.View.extend({
  tagName: 'h5',
  template: _.template(template),

  render() {
    this.$el.html(this.template({}))
    return this
  },

  initialize() {
    this.render()
  }
})