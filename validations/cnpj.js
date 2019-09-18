import utils from "./utils/utils";

let field = {
  name: null,
  valid: false
}
 
export default (name, value) => {
  field.name = name

  let cnpj = utils.removeSpecialChars(value)
  cnpj = utils.removeWhiteSpace(cnpj)

  if (cnpj.length > 14 || cnpj.length < 14) return field
  if (/^(\d)\1+$/.test(cnpj)) return field

  let t = cnpj.length - 2,
    d = cnpj.substring(t),
    d1 = parseInt(d.charAt(0)),
    d2 = parseInt(d.charAt(1)),
    cacl = x => {
      let n = cnpj.substring(0, x),
        y = x - 7,
        s = 0,
        r = 0

      for (let i = x; i >= 1; i--) {
        s += n.charAt(x - i) * y--
        if (y < 2) y = 9
      }

      r = 11 - (s % 11)
      return r > 9 ? 0 : r
    }

  field.valid = cacl(t) === d1 && cacl(t + 1) === d2
  return field
}