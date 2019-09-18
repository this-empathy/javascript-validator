import utils from "../utils/utils";

export default (name, value) => {
  let field = {
    name: name,
    valid: false
  }

  let cpf = utils.removeSpecialChars(value)
  cpf = utils.removeWhiteSpace(cpf)

  if (cpf.length > 11) return field
  if (/^(\d)\1+$/.test(cpf)) return field

  var sum
  var rest
  sum = 0
  
  for (let i = 1; i <= 9; i++){
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
  }
  rest = (sum * 10) % 11

  if (rest === 10 || rest === 11) rest = 0
  if (rest !== parseInt(cpf.substring(9, 10))) return field

  sum = 0
  for (let i = 1; i <= 10; i++){
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
  }
  rest = (sum * 10) % 11

  if (rest === 10 || rest === 11) rest = 0
  if (rest !== parseInt(cpf.substring(10, 11))) return field

  field.valid = true    
  return field
}