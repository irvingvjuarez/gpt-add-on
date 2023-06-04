function Element() {

}

Element.prototype.isVisible = (htmlNode) => {
  return htmlNode.offsetParent !== null
}

Element.prototype.addClass = function(htmlNode, className) {
  htmlNode.classList.add(className)
}

Element.prototype.removeClass = function(htmlNode, className) {
  htmlNode.classList.remove(className)
}

Element.prototype.focus = function(htmlNode) {
  htmlNode.focus()
}

Element.prototype.setText = function(htmlNode, textContent, defaultValue = "") {
  htmlNode.textContent = textContent || defaultValue
}

Element.prototype.setListeners = function(htmlNode, eventListeners) {
  eventListeners.forEach(
    evt => htmlNode.addEventListener(evt.name, evt.action)
  )
}

Element.prototype.cleanInput = function(htmlInput) {
  const nodeTagName = htmlInput.tagName

  if (nodeTagName !== "INPUT")
    throw new TypeError(`${htmlInput.tagName} must be INPUT`)

  htmlInput.value = ""
}

export default new Element()