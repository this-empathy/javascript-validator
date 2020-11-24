import { ValidatorInput, ValidatorReturn } from "../types"

export const creditCardDate = (input: ValidatorInput): ValidatorReturn => {
  const field = {
    name: input.name,
    valid: false,
  }

  const res = input.value.split('/')
  const cardDate = new Date()
  let today = new Date()
  const yLength = res[1].length

  if (yLength > 2 && yLength < 4 ) return field
  let yy = Number(yLength == 4 ? res[1] : `20${res[1]}`)
  
  cardDate.setFullYear(yy, Number(res[0]), 1)
  field.valid = cardDate > today 
  
  return field
}