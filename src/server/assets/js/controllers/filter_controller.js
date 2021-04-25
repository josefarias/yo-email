import { Controller } from "stimulus"
import { addToken, removeToken } from "../helpers/html_helpers"
import { visible } from "../helpers/element_helpers"

// Connect to an <input type="text"> or <input type="search"> element, making
// sure that its [aria-controls] attribute references an element with
// [role="listbox"], and to declare a [data-filter-attribute-value] attribute to
// instruct the controller on how to filter the descendants of the referenced
// [role="listbox"] element.
//
// <input type="text" aria-controls="listbox_element"
//    data-controller="filter" data-filter-attribute-value="data-name" data-action="input->filter#query">
// <div id="listbox_element" role="listbox">
//   <span role="option" data-name="Alice">Alice</span>
//   <span role="option" data-name="Bob">Bob</span>
//   <span role="option" data-name="Carol">Carol</span>
// </div>
//
export default class extends Controller {
  static classes = ["empty"]
  static values = { attribute: String, empty: String }

  initialize() {
    const observeOptions = { childList: true, subtree: true, attributes: true }
    // NOTE: Sometimes the server will respond after .filterOptions is called,
    //  This calls it again after the frame within listboxElement changes.
    this.observeMutations(this.filterOptions, this.listboxElement, observeOptions)
  }

  connect() {
    this.comboboxElement.setAttribute("aria-autocomplete", "list")
    this.comboboxElement.setAttribute("aria-haspopup", "listbox")
    this.listboxElement.setAttribute("role", "listbox")
  }

  query() {
    this.filterOptions()
  }

  // Private

  observeMutations(callback, target, options) {
    const observer = new MutationObserver(mutations => {
      observer.disconnect()
      Promise.resolve().then(start)
      callback.call(this, mutations)
    })
    function start() {
      if (target.isConnected) observer.observe(target, options)
    }
    start()
  }

  filterOptions() {
    const query = this.comboboxElement.value.trim()

    this.optionElements.forEach(applyFilter(query, { matching: this.attributeValue }))

    if (this.hasEmptyClass) this.listboxElement.classList.toggle(this.emptyClass, this.isEmpty)

    if (this.hasEmptyValue) {
      const update = this.isEmpty ? addToken : removeToken
      const tokens = this.comboboxElement.getAttribute("aria-describedby")

      this.comboboxElement.setAttribute("aria-describedby", update(tokens, this.emptyValue))
    }
  }

  get comboboxElement() {
    return this.element.querySelector("input[role=combobox]") || this.element
  }

  get listboxElement() {
    const listbox = this.comboboxElement.getAttribute("aria-controls")

    return document.getElementById(listbox)
  }

  get optionElements() {
    return this.listboxElement.querySelectorAll(`[${this.attributeValue}]`)
  }

  get isEmpty() {
    return [ ...this.optionElements ].filter(visible).length == 0
  }
}

function applyFilter(query, { matching }) {
  return (target) => {
    if (query) {
      const value = target.getAttribute(matching) || ""
      const match = value.toLowerCase().includes(query.toLowerCase())

      target.hidden = !match
    } else {
      target.hidden = false
    }
  }
}
