import validator from '../../src'
import { file } from '../helpers/file'

describe('file type', () => {
    test('validates image files', () => {
        const validFiles = [
            file('file.csv', 'text/csv')
        ]

        validFiles.forEach(value => expect(validator.fileTypeCsv(value)).toBeTruthy())
        expect(validator.fileTypeCsv(file('file.pdf', 'application/pdf'))).toBeFalsy()
    })
})