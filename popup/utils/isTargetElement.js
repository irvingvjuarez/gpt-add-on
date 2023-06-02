export function isTargetTitle(target) {
  return target.tagName === "H2" 
    && Boolean( target.className.match(/header_title/i) )
}

export function isTargetSubmitButton(target) {
  return target.parentElement.tagName === "svg"
    && target.tagName === "path"
}