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

Element.prototype.setText = function(htmlNode, textContent) {
  htmlNode.textContent = textContent || "New chat"
}

export default new Element()