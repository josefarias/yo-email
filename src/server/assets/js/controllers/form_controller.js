import "form-request-submit-polyfill"
import { Controller } from "stimulus"
import { debounce } from "../helpers/debounce_helpers"
import { cancel, resetInput } from "../helpers/element_helpers"

export default class extends Controller {
  static targets = ["submit"]

  initialize() {
    this.debouncedSubmit = debounce(this.debouncedSubmit.bind(this), 300)
  }

  disconnect() {
    this.element.toggleAttribute("data-submitting", false)
  }

  submit(event) {
    const form = event.target.form || event.target.closest("form")

    if (form) {
      form.requestSubmit()
    }
  }

  debouncedSubmit(event) {
    this.submit(event)
  }

  resetByKeyboard({ key, target }) {
    if (key == "Escape") {
      target.value ? resetInput(target) : target.form?.reset()
    }
  }

  suppressValidationMessage(event) {
    cancel(event)
  }
}
