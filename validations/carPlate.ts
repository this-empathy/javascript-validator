import { ValidatorInput, ValidatorReturn } from "../types"
import utils from "../utils/utils";

export const carPlate = (input: ValidatorInput): ValidatorReturn => {
  let field = {
    name: input.name,
    valid: false
  }

  const regexOldPlate = /^[A-Z]{3}\d{4}$/gm;
  const regexNewPlate = /[A-Z]{3}[0-9][A-Z][0-9]{2}/gm;

  let plate = input.value.replace('-', '')
  plate = utils.removeWhiteSpace(plate)

  if (plate.length > 7 || plate.length < 7) return field
  field.valid = regexOldPlate.test(plate) || regexNewPlate.test(plate)
  
  return field
}