import utils from "./utils/utils";

let field = {
  name: null,
  valid: false
}
 
export default (name, value) => {
  field.name = name

  let renavam = utils.removeSpecialChars(value)
  renavam = utils.removeWhiteSpace(renavam)

  if (renavam.length > 11 || renavam.length < 11) return field

  renavam = renavam.split('')
  let sum = 0,
    localValue = 0,
    digit = 0,
    x = 0
  for (let i = 5; i >= 2; i--) {
    sum += renavam[x] * i
    x++
  }
  localValue = sum % 11

  if (localValue === 11 || localValue === 0 || localValue >= 10) {
    digit = 0
  } else {
    digit = localValue
  }

  if (digit === parseInt(renavam[4])) {
    field.valid = false
  } else {
    field.valid = true
  }

  return field
}