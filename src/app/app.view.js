import * as $ from 'jquery'
import * as _ from 'lodash'
import * as Marionette from 'backbone.marionette'

import appTemplate from './app.template.html'
import { TitleView } from './shared/views/title.view'

export const AppView = Marionette.View.extend({
  el: 'main',
  template: _.template(appTemplate),

  regions: {
    titleRegion: '#title-wrapper',
  },

  initialize(options = {}) {
    this.titleView = new TitleView()
    this.render()
  },

  onRender: function() {
    this.showChildView('titleRegion', this.titleView)
  }
})