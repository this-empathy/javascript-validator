import { ValidatorInput, ValidatorReturn } from "../types"
import { cnpj } from "./cnpj";
import { cpf } from "./cpf";

export const cpfCnpj = (input: ValidatorInput): ValidatorReturn => {
  let field = {
    name: input.name,
    valid: false
  }

  field.valid = cpf(input).valid || cnpj(input).valid
  return field
}