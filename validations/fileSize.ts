import { ValidatorReturn } from '../types'

export type ValidatorInputFileSize = {
  name?: string
  files: File
  size: number
}

export const fileSize = (input: ValidatorInputFileSize): ValidatorReturn => {
    const field = {
        name: input.name,
        valid: false
    }

    if (isNaN(input.size)) return field

    const nSize = input.size * 1024
    field.valid = input.files.size <= nSize
    return field
}
