import { isTargetSubmitButton, isTargetTitle } from "./utils/isTargetElement.js"
import Element from "./controllers/element.js"

(function() {
  const chatTitleWrapper = document.querySelector(".chat-title-wrapper")
  const textTitle = chatTitleWrapper.children[1]
  const inputTitle = chatTitleWrapper.children[0]

  const chatForm = document.querySelector(".chat-input-wrapper")

  function toggleTitleInput() {
    const hideClass = "hidden"

    if ( Element.isVisible(textTitle) ) {
      Element.addClass(textTitle, hideClass)
      Element.removeClass(inputTitle, hideClass)
    } else {
      Element.addClass(inputTitle, hideClass)
      Element.removeClass(textTitle, hideClass)
    }
  }

  function clickListener(evt) {
    const target = evt.target

    if ( isTargetTitle(target) ) {
      toggleTitleInput()
    } else if ( isTargetSubmitButton(target) ) {
      // TODO: handleSubmitMessage()
      console.log("handleSubmitMessage")
    }
  }

  document.querySelector("body").addEventListener("click", clickListener)
}())