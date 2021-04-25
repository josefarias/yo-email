import { ApplicationController } from "./ApplicationController"

export class NavigationController extends ApplicationController {
  newAction() {
    this.renderHTML("navigation.html")
  }
}
