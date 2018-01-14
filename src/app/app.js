import * as Marionette from 'backbone.marionette'

import { AppView } from './app.view'

export const App = Marionette.Application.extend({
  region: 'main',

  onStart() {
    this.showView(new AppView())
  }
})