import validator from '../../src/index.js'

describe('CPF', () => {
  test('Validates CPF', () => {
    const valid = [
      '094.521.100-74',
      '229.969.000-06',
      '539.342.830-80',
      '607.066.700-00',
      '56145360003',
      '36373221024'
    ]

    const invalid = ['11111111111', '00000000000', '094.521.', '094', '415.882.118-50']

    valid.forEach(value => expect(validator.cpf('cpf', value).valid).toBeTruthy())
    invalid.forEach(value => expect(validator.cpf('cpf', value).valid).toBeFalsy())
  })
})