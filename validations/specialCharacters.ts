import { ValidatorInput, ValidatorReturn } from "../types"
import utils from "../utils/utils";

export const specialCharacters = (input: ValidatorInput): ValidatorReturn => {
  let field = {
    name: input.name,
    valid: false
  }

  if (typeof input.value === 'number') input.value = String(input.value)
  if (typeof input.value !== 'string') return field

  const regex = /^[\w&.\-]+$/;
  input.value = utils.removeWhiteSpace(input.value)
  field.valid = regex.test(input.value)

  return field
}