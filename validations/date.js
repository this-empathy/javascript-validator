let field = {
  name: null,
  valid: false
}
 
export default (name, value) => {
  field.name = name

  const re = /^\d{2}[.//]\d{2}[.//]\d{4}$/
  field.valid = re.test(value)
  return field
}