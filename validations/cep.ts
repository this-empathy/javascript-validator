import { ValidatorInput, ValidatorReturn } from '../types'
import utils from '../utils/utils'

export const cep = (input: ValidatorInput): ValidatorReturn => {
    const field = {
        name: input.name,
        valid: false
    }
    let cep = utils.removeWhiteSpace(input.value)
    const hasNoChar = /\D/g
  
    if (hasNoChar.test(cep)) {
        const _re = /\d{5}-\d{3}/
        field.valid = _re.test(cep) 
    } else {
        cep = utils.removeSpecialChars(cep)
        if(cep.length === 8){
            const hasNumbers = /\d/g
            field.valid = hasNumbers.test(cep)
        }else{
            field.valid = false 
        }
    }

  
    return field
}