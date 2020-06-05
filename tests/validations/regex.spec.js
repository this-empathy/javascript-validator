import validator from '../../src/index.js'

describe('REGEX', () => {
  test('Validates regex', () => {
    const regex = /^[0-9]+$/;
    
    expect(validator.regex('regex', '123456789', regex).valid).toBe(true);
    expect(validator.regex('regex', 'abc', regex).valid).toBe(false);
    expect(validator.regex('regex', 'abc-123', regex).valid).toBe(false);
  })
})