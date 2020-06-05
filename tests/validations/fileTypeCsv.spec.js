import validator from '../../src/index.js'
import helpers from '../helpers/files'

describe('file type', () => {
  test('validates image files', () => {
    const validFiles = [
      helpers.file('file.csv', 'text/csv')
    ]

    validFiles.forEach(value => expect(validator.fileTypeCsv(value)).toBeTruthy())
    expect(validator.fileTypeCsv(helpers.file('file.pdf', 'application/pdf'))).toBeFalsy()
  })
})