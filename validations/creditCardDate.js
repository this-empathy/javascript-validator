export default (name, value) => {
  const field = {
    name: name,
    valid: false,
  }

  const res = value.split('/')
  const cardDate = new Date()
  let today = new Date()
  const yLength = res[1].length

  if (yLength > 2 && yLength < 4 ) return field
  let yy = yLength == 4 ? res[1] : `20${res[1]}`
  
  cardDate.setFullYear(yy, res[0], 1)
  field.valid = cardDate > today 
  
  return field
}