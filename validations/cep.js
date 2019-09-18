import utils from "./utils/utils";

let field = {
  name: null,
  valid: false
}
 
export default (name, value) => {
  field.name = name
  const _re = /\d{5}-\d{3}/
  let cep = utils.removeWhiteSpace(value)

  field.valid = _re.test(cep) 
  return field
}