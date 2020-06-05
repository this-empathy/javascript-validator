import validator from '../../src/index.js'

describe('Special Characters', () => {
  test('Validates Special Characters', () => {
    const valid = ['282940297', '00000000000', 'AAAAAAAccccccc', '12345asdfgh', 11111111]
    const invalid = ['@@@@q4344','!@$#$#','asd@@@@', '@@@', false, '∆˚']

    valid.forEach(value => expect(validator.specialCharacters('specialCharacters', value).valid).toBeTruthy())
    invalid.forEach(value => expect(validator.specialCharacters('specialCharacters', value).valid).toBeFalsy())
  })
})