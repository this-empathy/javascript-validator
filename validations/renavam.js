import utils from "../utils/utils";

export default (name, value) => {
  let field = {
    name: name,
    valid: false
  }

  let renavam = utils.removeWhiteSpace(value)
  
  let digit = 0
  const pattern = '3298765432';

  for (var i = 0; i < 10; i++){
    digit += renavam[i] * pattern[i];
  }

  digit = (digit * 10) % 11;
  digit = digit !== 10 ? digit : 0;

  field.valid = digit === parseInt(renavam[10], 10)
  return field
}