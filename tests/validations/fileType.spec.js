import validator from '../../src/index.js'
import helpers from '../helpers/files'

describe('file tyoe', () => {
  test('validates image files', () => {
    const validFiles = [
      helpers.file('file.gif', 'image/gif'),
      helpers.file('file.jpg', 'image/jpeg'),
      helpers.file('file.jpeg', 'image/jpeg'),
      helpers.file('file.svg', 'image/svg'),
      helpers.file('file.bmp', 'image/bmp'),
      helpers.file('file.png', 'image/png')
    ]

    validFiles.forEach(value => expect(validator.fileType(value)).toBeTruthy())
    expect(validator.fileType(helpers.file('file.pdf', 'application/pdf'))).toBeFalsy()
  })
})