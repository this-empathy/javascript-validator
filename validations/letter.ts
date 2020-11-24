import { ValidatorInput, ValidatorReturn } from "../types"
import utils from "../utils/utils";
 
export const letter = (input: ValidatorInput): ValidatorReturn => {
  let field = {
    name: input.name,
    valid: false
  }

  const re = /^[a-zA-Z]+$/g
  let letter = utils.removeWhiteSpace(input.value)
  field.valid = re.test(letter)
  return field
}