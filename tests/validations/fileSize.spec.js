import validator from '../../src/index.js'
import helpers from '../helpers/files'

describe('File Size', () => {
  test('validates file size', () => {
    const size = 15
    expect(
      validator.fileSize(helpers.file('file.txt', 'text/plain', 10), size)
    ).toBeTruthy()
    expect(
      validator.fileSize(helpers.file('file.txt', 'text/plain', 15), size)
    ).toBeTruthy()

    expect(
      validator.fileSize(helpers.file('file.txt', 'text/plain', 19), size)
    ).toBeFalsy()
    expect(
      validator.fileSize(helpers.file('file.txt', 'text/plain', 16), size)
    ).toBeFalsy()

    expect(
      validator.fileSize(helpers.file('file.txt', 'text/plain', 16), 'not a number')
    ).toBeFalsy()
  })
})