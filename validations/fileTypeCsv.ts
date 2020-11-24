import { ValidatorInput, ValidatorReturn } from '../types'

export const fileTypeCsv = (files: File): boolean => {
    const re = /\.(csv)$/i
    return re.test(files.name)
}
