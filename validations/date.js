export default (name, value) => {
  let field = {
    name: name,
    valid: false
  }

  const re = /^\d{2}[.//]\d{2}[.//]\d{4}$/
  field.valid = re.test(value)
  return field
}