import validator from '../../index.js'

describe('Credit Card', () => {
  test('Validates Credit Card Number', () => {
    validator.creditCardNumber('creditCardNumber', '3528 8911 1663 5482')
    validator.creditCardNumber('creditCardNumber', '5395 6935 8701 6969')
    validator.creditCardNumber('creditCardNumber', '30390010687456')
    validator.creditCardNumber('creditCardNumber', '4389359128409094')
    validator.creditCardNumber('creditCardNumber', '6062825413864713')


    // valid.forEach(value => expect(validator.creditCardDate('creditCardDate', value).valid).toBeTruthy())
    // invalid.forEach(value => expect(validator.creditCardDate('creditCardDate', value).valid).toBeFalsy())
  })
})