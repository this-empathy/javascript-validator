import utils from "../utils/utils";

export default (name, value) => {
  let field = {
    name: name,
    valid: false
  }

  const re = /^[0-9]+$/
  let num = utils.removeWhiteSpace(value)

  field.valid = re.test(num)
  return field
}