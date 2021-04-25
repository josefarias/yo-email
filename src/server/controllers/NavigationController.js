import { ApplicationController } from "./ApplicationController"

export class NavigationController extends ApplicationController {
  newAction() {
    this.sleep(0.8)
    this.renderHTML("navigation.html")
  }
}
