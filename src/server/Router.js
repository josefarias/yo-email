import { HomeController } from "./controllers/HomeController"
import { NavigationController } from "./controllers/NavigationController"

export class Router {
  constructor(app, compiler) {
    this.app = app
    this.compiler = compiler
  }

  start() {
    this.app.get("/navigation", (...args) => {
      new NavigationController(this.compiler, ...args).newAction()
    })

    this.app.get("*", (...args) => {
      new HomeController(this.compiler, ...args).newAction()
    })
  }
}
