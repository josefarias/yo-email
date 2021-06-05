import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["arrow", "link"]

  initialize() {
    if (this.hasLinkTarget) {
      this.linkTarget.hidden = true
    }
  }

  connect() {
    this.summaryElement?.setAttribute("aria-haspopup", "menu")
    this.update()
  }

  disconnect() {
    this.close()
  }

  async update() {
    this.arrowTarget.innerHTML = "expand_more"

    if (!this.element.open) return

    if (this.hasLinkTarget) {
      this.linkTarget.click()
    }

    if (this.frameElement) {
      await this.frameElement.loaded
    }

    this.summaryElement?.setAttribute("aria-expanded", this.element.open)
    this.arrowTarget.innerHTML = "expand_less"
  }

  close() {
    this.element.open = false
  }

  // Private

  get summaryElement() {
    return this.element.querySelector("summary")
  }

  get frameElement() {
    const id = this.hasLinkTarget &&
               this.linkTarget.getAttribute("data-turbo-frame")

    return id && document.getElementById(id)
  }
}
