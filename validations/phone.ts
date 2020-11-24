import { ValidatorInput, ValidatorReturn } from "../types"
import utils from "../utils/utils";

export const phone = (input: ValidatorInput): ValidatorReturn => {
  let field = {
    name: input.name,
    valid: false
  }

  const re = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/
  let phone = utils.removeSpecialChars(input.value)
  phone = utils.removeWhiteSpace(phone)

  field.valid = re.test(phone)
  return field
}
