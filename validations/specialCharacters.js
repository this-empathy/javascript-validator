import utils from "../utils/utils";

export default (name, value) => {
  let field = {
    name: name,
    valid: false
  }

  if (typeof value === 'number') value = String(value)
  if (typeof value !== 'string') return field

  const regex = /^[\w&.\-]+$/;
  value = utils.removeWhiteSpace(value)
  field.valid = regex.test(value)

  return field
}