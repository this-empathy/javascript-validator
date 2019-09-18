import utils from "./utils/utils";

let field = {
  name: null,
  valid: false
}

export default (name, value) => {
  field.name = name
  const re = /^[0-9]+$/
  let num = utils.removeWhiteSpace(value)

  field.valid = re.test(num)
  return field
}