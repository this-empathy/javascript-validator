import { ValidatorInput } from '../types'
import utils from '../utils/utils'
import { creditCardType } from './creditCardType'
import { letter } from './letter'

type ValidatorReturnCard = {
  name?: string
  valid: boolean
  company: string | null
}

export const creditCardNumber = (input: ValidatorInput): ValidatorReturnCard => {
    const field = {
        name: input.name,
        valid: false,
        company: null
    }

    if (typeof input.value === 'number') input.value = String(input.value)
    if (typeof input.value !== 'string') return field
    if (letter({ name: 'Letter', value: input.value }).valid) return field
  
    let card = utils.removeSpecialChars(input.value)
    card = utils.removeWhiteSpace(card)

    field.valid = utils.luhn10(card)
    field.company = creditCardType.get(card)[0] ? creditCardType.get(card)[0].type : ''

    return field
}