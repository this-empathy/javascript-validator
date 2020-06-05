import validator from '../../src/index.js'

describe('Credit Card', () => {
  test('Validates Credit Card', () => {
    validator.creditCard('card', {number:'4356187506061685', owner: 'Elizabeth Thomas' , cvv: '613', date: '05/2030'})


    // valid.forEach(value => expect(validator.cpfCnpj('cpfCnpj', value).valid).toBeTruthy())
    // invalid.forEach(value => expect(validator.cpfCnpj('cpfCnpj', value).valid).toBeFalsy())
  })
})