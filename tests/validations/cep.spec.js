import validator from '../../src'

describe('CEP', () => {
  test('Validates CEP', () => {
    const valid = ['38055-090', '68911-153', '79815-714', '09750040', '09750030']
    const invalid = ['91120', 'aaaaaaa', '29.', '1-153', '097500', '0975AAA0']

    valid.forEach(value => expect(validator.cep({ name: 'cep', value }).valid).toBeTruthy())
    invalid.forEach(value => expect(validator.cep({ name: 'cep', value }).valid).toBeFalsy())
  })
})