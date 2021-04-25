import { ApplicationController } from "./ApplicationController"

export class HomeController extends ApplicationController {
  newAction() {
    this.renderHTML("index.html")
  }
}
