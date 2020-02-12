import utils from "../utils/utils";

export default (name, value) => {
  let field = {
    name: name,
    valid: false
  }

  if (value.length < 8) return field

  const totalLength = 11
  let renavam = utils.removeWhiteSpace(value)
  renavam = renavam.length < totalLength ? renavam.padStart(totalLength, '0') : renavam

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