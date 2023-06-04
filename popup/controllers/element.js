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

Element.prototype.create = function(tagName, options) {
  const newHtmlNode = document.createElement(tagName)

  if (Object.getOwnPropertyNames(options).length) {
    Object.keys(options).forEach(key => 
      newHtmlNode[key] = options[key]
    )
  }

  return newHtmlNode
}

export default new Element()