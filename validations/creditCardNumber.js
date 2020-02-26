import utils from "../utils/utils";

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

  console.log(utils.luhn10(card));
  

  //TODO Get card company
  // field.company = getCardTypes(card) || field.company = potentialTypes[0]

  return field
}