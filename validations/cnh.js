import utils from "../utils/utils";

export default (name, value) => {

  const cnhCalc = function(partial) {
    let s = 0
    for (let i = 0 , j = 2; i < partial.length ; i++, j++) {
        s += parseInt(partial[i]) * j
    }

    const leftover = s % 11
    return (leftover <= 1) ? 0 : (11 - leftover);
  }

  const re = /^[0-9]*$/

  let field = {
    name: name,
    valid: false
  }

  let cnh = utils.removeWhiteSpace(value)

  if (cnh.length > 11 || cnh.length <= 3) return field
  if (!re.test(cnh)) return field

  const partial = value.substr(0, 9)
  
  const dv1 = cnhCalc(partial);
  const dv2 = cnhCalc(dv1 + partial);

  field.valid = '' + dv1 + dv2 === value.substr(-2);
  
  return field
}