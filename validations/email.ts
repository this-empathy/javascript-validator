import { ValidatorInput, ValidatorReturn } from '../types'

export const email = (input: ValidatorInput): ValidatorReturn => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const field = {
        name: input.name,
        valid: false
    }
    field.valid = re.test(input.value)
    return field
}
