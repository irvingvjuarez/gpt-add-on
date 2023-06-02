import { isTargetSubmitButton, isTargetTitle } from "./utils/isTargetElement.js"
import Element from "./controllers/element.js"

(function() {
  "use strict";

  const chatTitleWrapper = document.querySelector(".title-wrapper")
  const textTitle = chatTitleWrapper.children[1]
  const inputTitle = chatTitleWrapper.children[0]

  const chatForm = document.querySelector(".title-wrapper_input")

  function updateChatName(evt) {
    Element.setText(textTitle, evt.target.value)

    // TODO: save the chatName along with
    // its content in the browser memory

    toggleTitleInput()
  }

  function toggleTitleInput() {
    const hideClass = "hidden"

    if ( Element.isVisible(textTitle) ) {
      Element.addClass(textTitle, hideClass)

      Element.removeClass(inputTitle, hideClass)
      Element.focus(inputTitle)
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
  inputTitle.addEventListener("blur", updateChatName)
}())