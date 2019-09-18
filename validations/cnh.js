import utils from "../utils/utils";

let field = {
  name: null,
  valid: false
}
 
export default (name, value) => {
  field.name = name
  let cnh = utils.removeSpecialChars(value)
  cnh = utils.removeWhiteSpace(cnh)

  if (cnh.length > 11 || cnh.length <= 3) return field
  if (/^(\d)\1+$/.test(cnh)) return field

  let v = 0
  for (let i = 0, j = 9; i < 9; ++i, --j) {
    v += +(cnh.charAt(i) * j)
  }

  let dsc = 0, vl1 = v % 11    
  if (vl1 >= 10) {
    vl1 = 0
    dsc = 2
  }

  v = 0
  for (let i = 0, j = 1; i < 9; ++i, ++j) {
    v += +(cnh.charAt(i) * j)
  }

  var x = v % 11
  var vl2 = x >= 10 ? 0 : x - dsc

  field.valid = '' + vl1 + vl2 === cnh.substr(-2)
  return field
}