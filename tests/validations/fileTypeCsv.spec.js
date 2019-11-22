import validator from '../../index.js'
import helpers from '../helpers/files'

describe('file tyoe', () => {
  test('validates image files', () => {
    const validFiles = [
      helpers.file('file.csv', 'text/csv')
    ]

    validFiles.forEach(value => expect(validator.fileType(value)).toBeTruthy())
    expect(validator.fileType(helpers.file('file.pdf', 'application/pdf'))).toBeFalsy()
  })
})