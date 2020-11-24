import { ValidatorInput, ValidatorReturn } from '../types'
import utils from '../utils/utils'

export const renavam = (input: ValidatorInput): ValidatorReturn => {
    const field = {
        name: input.name,
        valid: false
    }

    if (input.value.length < 8 && typeof input.value === 'string') return field

    const totalLength = 11
    let renavam = utils.removeWhiteSpace(input.value)
    if (renavam.length < totalLength) renavam = renavam.padStart(totalLength, '0') 

    let digit = 0
    const pattern = '3298765432'

    for (let i = 0; i < 10; i++){
        digit += renavam[i] * Number(pattern[i])
    }

    digit = (digit * 10) % 11
    digit = digit !== 10 ? digit : 0

    field.valid = digit === parseInt(renavam[10], 10)
    return field
}