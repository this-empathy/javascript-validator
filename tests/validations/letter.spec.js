import validator from '../../src'

describe('Letter', () => {
  test('Validates Letter', () => {

    const invalid = ['12', '1111111', '551137673866', '1234567890']
    const valid = ['aaaaa', 'bbbbb', 'cccccc']

    valid.forEach(value => expect(validator.letter({ name: 'letter', value }).valid).toBeTruthy())
    invalid.forEach(value => expect(validator.letter({ name: 'letter', value }).valid).toBeFalsy())
  })
})