import utils from "./utils/utils";

let field = {
  name: null,
  valid: false
}
 
export default (name, value) => {
  field.name = name
  const re = /^[a-zA-Z]+$/g
  let letter = utils.removeWhiteSpace(value)
  
  field.valid = re.test(letter)
  return field
}