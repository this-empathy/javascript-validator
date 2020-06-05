import validator from '../../src/index.js'

describe('RG', () => {
  test('Validates RG', () => {
    const valid = ['282940297','401887856','379669614', 113440492, '11.550.559-3']
    const invalid = ['@@@', '37966961!!!!', false]

    valid.forEach(value => expect(validator.rg('rg', value).valid).toBeTruthy())
    invalid.forEach(value => expect(validator.rg('rg', value).valid).toBeFalsy())
  })
})