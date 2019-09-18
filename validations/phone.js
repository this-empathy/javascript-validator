import utils from "./utils/utils";

let field = {
  name: null,
  valid: false
}

export default (name, value) => {
  field.name = name
  const re = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/
  let phone = utils.removeSpecialChars(value)
  phone = utils.removeWhiteSpace(phone)

  field.valid = re.test(phone)
  return field
}