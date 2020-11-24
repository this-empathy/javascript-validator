import validator from '../../src'
import { file } from '../helpers/file'

describe('File Size', () => {
  test('validates file size', () => {
    const size = 15
    expect(
      validator.fileSize({ files: file('file.txt', 'text/plain', 10), size }).valid
    ).toBeTruthy()
    expect(
      validator.fileSize({ files: file('file.txt', 'text/plain', 15), size }).valid
    ).toBeTruthy()

    expect(
      validator.fileSize({ files: file('file.txt', 'text/plain', 19), size }).valid
    ).toBeFalsy()
    expect(
      validator.fileSize({ files: file('file.txt', 'text/plain', 16), size }).valid
    ).toBeFalsy()

    expect(
      validator.fileSize({ files: file('file.txt', 'text/plain', 16), size: 'not a number' }).valid
    ).toBeFalsy()
  })
})