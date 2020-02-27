import utils from "../utils/utils";
import creditCardType from "./creditCardType";

export default (name, value) => {
  const field = {
    name: name,
    valid: false,
    company: null
  }

  if (typeof value === 'number') value = String(value)
  if (typeof value !== 'string') return field
  
  let card = utils.removeSpecialChars(value)
  card = utils.removeWhiteSpace(card)

  field.valid = utils.luhn10(card)
  field.company = creditCardType.get(card)[0].type

  return field
}