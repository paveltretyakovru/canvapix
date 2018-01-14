import * as $ from 'jquery'
import * as _ from 'lodash'
import * as Marionette from 'backbone.marionette'

import { Pix } from './shared/pix/pix'
import { regions } from './shared/configs/regions'
import appTemplate from './app.template.html'
import { TitleView } from './shared/views/title.view'

export class AppView extends Marionette.View {
  el() { return 'main' }
  regions() { return regions }
  template() { return appTemplate }

  constructor(options) {
    super(options)

    this.pix = new Pix()
    this.titleView = new TitleView()

    this.render()
  }

  onRender() {
    console.log('appview render', this.template)
    this.showChildView('titleRegion', this.titleView)
    this.showChildView('pixRegion', this.pix.view())
  }
}