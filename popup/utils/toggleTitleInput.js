import Element from "../controllers/element.js"

function toggleTitleInput(inputElement, textElement) {
  const hideClass = "hidden"

  if ( Element.isVisible(textElement) ) {
    Element.addClass(textElement, hideClass)

    Element.removeClass(inputElement, hideClass)
    Element.focus(inputElement)
  } else {
    Element.addClass(inputElement, hideClass)
    Element.removeClass(textElement, hideClass)
  }
}

export default toggleTitleInput