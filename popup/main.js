import { isTargetElement } from "./utils/isTargetElement.js"
import Element from "./controllers/element.js"
import toggleTitleInput from "./utils/toggleTitleInput.js";

(function() {
  "use strict";

  const chatTitleWrapper = document.querySelector(".title-wrapper")
  const textTitle = chatTitleWrapper.children[1]
  const inputTitle = chatTitleWrapper.children[0]
  const chatForm = document.querySelector(".chat-input-wrapper")

  function updateChatName(evt) {
    Element.setText(textTitle, evt.target.value, "New chat")

    // TODO: save the chatName along with
    // its content in the browser memory

    toggleTitleInput(inputTitle, textTitle)
  }

  function clickListener(evt) {
    const target = evt.target

    // TODO: Element.isElement
    const isTargetTitle = isTargetElement(
      target,
      "header_title",
      {tagName: "H2"}
    )

    if (isTargetTitle) {
      toggleTitleInput(inputTitle, textTitle)
    }
  }

  function searchForEnter(evt) {
    if (evt.code === "Enter") {
      evt.target.blur()
    }
  }

  document.querySelector("body").addEventListener("click", clickListener)
  Element.setListeners(inputTitle, [
    {name: "blur", action: updateChatName},
    {name: "keyup", action: searchForEnter}
  ])
  // chatForm.addEventListener("submit", addUserPrompt)
}())