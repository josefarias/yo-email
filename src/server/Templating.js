import * as handlebars from "express-handlebars"

export class Templating {
  constructor(app) {
    this.app = app
  }

  start() {
    this.app.engine('.hbs', handlebars({ extname: '.hbs' }))
    this.app.set('view engine', '.hbs')
    this.app.set('views', './dist')
  }
}
