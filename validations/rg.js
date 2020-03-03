import utils from "../utils/utils";
import hasSpecialCharacters from "./specialCharacters";

export default (name, value) => {
  let field = {
    name: name,
    valid: false
  }

  if (typeof value === 'number') value = String(value)
  if (typeof value !== 'string') return field

  let rg = utils.removeWhiteSpace(value)
  field.valid = hasSpecialCharacters('rg', rg).valid

  return field
}