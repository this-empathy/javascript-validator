let field = {
  name: null,
  valid: false
}
 
export default (name, value, regex) => {
  var re = new RegExp(regex,'g')

  field.name = name
  field.valid = re.test(String(value))
  
  return field
}