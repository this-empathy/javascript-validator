import utils from "../utils/utils";

export default (name, value) => {
  let field = {
    name: name,
    valid: false
  }
  let cep = utils.removeWhiteSpace(value)
  const hasNoChar = /\D/g;
  
  if (hasNoChar.test(cep)) {
    const _re = /\d{5}-\d{3}/
    field.valid = _re.test(cep) 
  } else {
    cep = utils.removeSpecialChars(cep)
    if(cep.length === 8){
      const hasNumbers = /\d/g;
      field.valid = hasNumbers.test(cep)
    }else{
      field.valid = false 
    }
  }

  
  return field
}