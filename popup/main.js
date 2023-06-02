import { isTargetSubmitButton, isTargetTitle } from "./utils/isTargetElement.js"
import Element from "./controllers/element.js"
import toggleTitleInput from "./utils/toggleTitleInput.js";

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

    toggleTitleInput(inputTitle, textTitle)
  }

  function clickListener(evt) {
    const target = evt.target

    if ( isTargetTitle(target) ) {
      toggleTitleInput(inputTitle, textTitle)
    } else if ( isTargetSubmitButton(target) ) {
      // TODO: handleSubmitMessage()
      console.log("handleSubmitMessage")
    }
  }

  function setupInputTitleListeners() {
    inputTitle.addEventListener("blur", updateChatName)

  }

  document.querySelector("body").addEventListener("click", clickListener)
  setupInputTitleListeners()
}())