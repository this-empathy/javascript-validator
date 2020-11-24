import { ValidatorReturn } from "../types"

export type ValidatorInput = {
  name?: string
  value: string
  regex: string
}

export const regex = (input: ValidatorInput): ValidatorReturn => {
  var re = new RegExp(input.regex,'g')
  let field = {
    name: input.name,
    valid: false
  }

  field.valid = re.test(String(input.value))
  return field
}
