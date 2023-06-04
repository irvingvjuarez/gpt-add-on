export function isTargetElement(htmlNode, className, props = {}) {
  const hasClassName = htmlNode.classList.contains(className)
  let propsValidation = true

  if (Object.getOwnPropertyNames(props).length) {
    propsValidation = Object.keys(props).every(keyName =>
      htmlNode[keyName] === props[keyName]
    )
  }

  return hasClassName && propsValidation
}
