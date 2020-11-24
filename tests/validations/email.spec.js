import validator from '../../src'

describe('Email', () => {
  test('Validates Email', () => {
    const valid = [
      'someone@example.com',
      'someone@example.co',
      'someone123@example.co.uk',
      'Pelé@example.com',
      'very.common@example.com',
      'other.email-with-dash@example.com',
      'disposable.style.email.with+symbol@example.com'
    ]

    const invalid = [
      '@example.com',
      '@example',
      undefined,
      null,
      'undefined',
      'null',
      'someone@example.c',
      'som*eone@example.c'
    ]


    valid.forEach(value => expect(validator.email({ name: 'email', value }).valid).toBeTruthy())
    invalid.forEach(value => expect(validator.email({ name: 'email', value }).valid).toBeFalsy())
  })
})