import webpackDevMiddleware from "webpack-dev-middleware"
import webpackHotMiddleware from "webpack-hot-middleware"

export class Middleware {
  constructor(app, compiler, webpackConfig) {
    this.app = app
    this.compiler = compiler
    this.webpackConfig = webpackConfig
  }

  start() {
    const publicPath = this.webpackConfig.output.publicPath

    this.app.use(webpackDevMiddleware(this.compiler, { publicPath }))
    this.app.use(webpackHotMiddleware(this.compiler))
  }
}
