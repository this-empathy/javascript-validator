import validator from '../../index.js'

describe('Required', () => {
  test('Validates Required', () => {
    const valid = ['asjdj', 0, 'undefined', 'null', 's ', true]
    const checkboxe = false
    const invalid = ['', ' ', [], undefined, null]

    valid.forEach(value => expect(validator.required('required', value).valid).toBeTruthy())
    expect(validator.required('required', checkboxe).valid).toBeFalsy()
    invalid.forEach(value => expect(validator.required('required', value).valid).toBeFalsy())
  })
})