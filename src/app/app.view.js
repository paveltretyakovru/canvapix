import * as $ from 'jquery'
import * as Backbone from 'backbone'
import * as _ from 'lodash'

import { TitleView } from './shared/views/title.view'

const template = `<div></div>`

export const AppView = Backbone.View.extend({
  el: 'main',
  template: _.template(template),

  initialize(options = {}) {
    this.title = new TitleView()
    this.render()
  },

  render: function() {
    this.$el.html(this.template({}))
    this.$el.append(this.title.$el)
    return this
  }
})