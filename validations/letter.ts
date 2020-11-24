import { ValidatorInput, ValidatorReturn } from '../types'
import utils from '../utils/utils'
 
export const letter = (input: ValidatorInput): ValidatorReturn => {
    const field = {
        name: input.name,
        valid: false
    }

    const re = /^[a-zA-Z]+$/g
    const letter = utils.removeWhiteSpace(input.value)
    field.valid = re.test(letter)
    return field
}