import { ValidatorInput, ValidatorReturn } from "../types"
import utils from "../utils/utils";

export const number = (input: ValidatorInput): ValidatorReturn => {
  let field = {
    name: input.name,
    valid: false
  }

  const re = /^[0-9]+$/
  let num = utils.removeWhiteSpace(input.value)

  field.valid = re.test(num)
  return field
}
