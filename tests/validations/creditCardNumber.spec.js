import validator from '../../index.js'

describe('Credit Card', () => {
  test('Validates Credit Card Number', () => {
    const valid = ['3528 8911 1663 5482', '5395 6935 8701 6969', '30390010687456', '4389359128409094', '6062825413864713']
    const invalid = ['aaaaa']

    valid.forEach(value => expect(validator.creditCardNumber('creditCardNumber', value).valid).toBeTruthy())
    invalid.forEach(value => expect(validator.creditCardDate('creditCardDate', value).valid).toBeFalsy())
  })
})