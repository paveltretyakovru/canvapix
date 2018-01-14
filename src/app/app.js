import * as $ from 'jquery'
import * as Mn from 'backbone.marionette'

import { AppView } from './app.view'

export const App = Mn.Application.extend({
  region: 'main',

  onStart() {
    this.showView(new AppView())
  }
})