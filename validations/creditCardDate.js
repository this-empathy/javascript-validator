export default (name, value) => {
  const field = {
    name: name,
    valid: false,
  }

  const res = value.split('/')
  const cardDate = new Date()
  let today = new Date()
  cardDate.setFullYear(res[1], res[0], 1)

  field.valid = cardDate > today 
  
  return field
}