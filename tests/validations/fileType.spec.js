import validator from '../../src'
import { file } from '../helpers/file'

describe('file tyoe', () => {
  test('validates image files', () => {
    const validFiles = [
      file('file.gif', 'image/gif'),
      file('file.jpg', 'image/jpeg'),
      file('file.jpeg', 'image/jpeg'),
      file('file.svg', 'image/svg'),
      file('file.bmp', 'image/bmp'),
      file('file.png', 'image/png')
    ]

    validFiles.forEach(value => expect(validator.fileType(value)).toBeTruthy())
    expect(validator.fileType(file('file.pdf', 'application/pdf'))).toBeFalsy()
  })
})