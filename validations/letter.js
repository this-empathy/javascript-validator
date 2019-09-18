import utils from "../utils/utils";
 
export default (name, value) => {
  let field = {
    name: name,
    valid: false
  }

  const re = /^[a-zA-Z]+$/g
  let letter = utils.removeWhiteSpace(value)
  field.valid = re.test(letter)
  return field
}