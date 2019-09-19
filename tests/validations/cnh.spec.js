import validator from '../../index.js'

describe('CNH', () => {
  test('Validates CNH', () => {
    const valid = ['65818232965', '10901795760', '22621980653']
    const invalid = ['91120', 'aaaaaaa', '29.', '00123456789', '35932898821', '11111111111']

    valid.forEach(value => expect(validator.cnh('cnh', value).valid).toBeTruthy())
    invalid.forEach(value => expect(validator.cnh('cnh', value).valid).toBeFalsy())
  })
})