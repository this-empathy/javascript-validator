import validator from '../../index.js'

describe('Credit Card', () => {
  test('Validates Credit Card Number', () => {
    validator.creditCardNumber('creditCardNumber', '3528 8911 1663 5482')
    validator.creditCardNumber('creditCardNumber', '5395 6935 8701 6969')


    // valid.forEach(value => expect(validator.creditCardDate('creditCardDate', value).valid).toBeTruthy())
    // invalid.forEach(value => expect(validator.creditCardDate('creditCardDate', value).valid).toBeFalsy())
  })
})