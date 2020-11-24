import { ValidatorReturn } from "../types"
import utils from "../utils/utils";

export type ValidatorInputEmail = {
  name?: string
  value: string | boolean
}

export const required = (input: ValidatorInputEmail): ValidatorReturn => {
  let field = {
    name: input.name,
    valid: false
  }

  if (utils.isNullOrUndefined(input.value)) {
    return field
  }
  
  // incase a field considers `false` as an empty value like checkboxes.
  if (input.value === false) {
    return field
  }

  field.valid = !!String(input.value).trim().length
  return field
}