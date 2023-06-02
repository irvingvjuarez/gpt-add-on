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

export default new Element()