export default (name, value, regex) => {
  var re = new RegExp(regex,'g')
  let field = {
    name: name,
    valid: false
  }

  field.valid = re.test(String(value))
  return field
}