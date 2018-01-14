import { PixView } from './pix.view'

export class Pix {
  constructor(options = {}) {
    this.pixView = new PixView()
  }

  view() { return this.pixView }
}