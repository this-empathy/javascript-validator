import cnpj from "./cnpj";
import cpf from "./cpf";

let field = {
  name: null,
  valid: false
}
 
export default (name, value) => {
  field.name = name
  field.valid = cpf(name, value).valid || cnpj(name, value).valid
  return field
}