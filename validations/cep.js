import utils from "../utils/utils";

export default (name, value) => {
  let field = {
    name: name,
    valid: false
  }

  const _re = /\d{5}-\d{3}/
  let cep = utils.removeWhiteSpace(value)

  field.valid = _re.test(cep) 
  return field
}