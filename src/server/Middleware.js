import webpackDevMiddleware from "webpack-dev-middleware"
import webpackHotMiddleware from "webpack-hot-middleware"

export class Middleware {
  constructor(app, compiler, publicPath) {
    this.app = app
    this.compiler = compiler
    this.publicPath = publicPath
  }

  start() {
    const publicPath = this.publicPath

    this.app.use(webpackDevMiddleware(this.compiler, { publicPath }))
    this.app.use(webpackHotMiddleware(this.compiler))
  }
}
