(function() {
  const headerTitle = document.querySelector(".header_title")
  const chatForm = document.querySelector(".chat-input-wrapper")

  function isTargetTitle(target) {
    return target.tagName === "H2" 
      && Boolean( target.className.match(/header_title/i) )
  }

  function isTargetSubmitButton(target) {
    return target.parentElement.tagName === "svg"
      && target.tagName === "path"
  }

  function clickListener(evt) {
    const target = evt.target

    if ( isTargetTitle(target) ) {
      // TODO: handleChangingTitle()
      console.log("handleChangingTitle")
    } else if ( isTargetSubmitButton(target) ) {
      // TODO: handleSubmitMessage()
      console.log("handleSubmitMessage")
    }
  }

  document.querySelector("body").addEventListener("click", clickListener)
}())