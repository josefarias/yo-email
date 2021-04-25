export function resetInput(target) {
  target.value = ""
  target.dispatchEvent(new CustomEvent("input", { bubbles: true }))
}

export function cancel(event) {
  event.stopPropagation()
  event.preventDefault()
}

export function visible(target) {
  return !(target.hidden || target.closest("[hidden]"))
}
