import validator from '../../index.js'

describe('RENAVAM', () => {
  test('Validates RENAVAM', () => {
    const valid = ['38914927148', '65655504170', '95640486440']
    const invalid = ['MHD', '9564048', '@#T-5886', '00000000000']
    
    valid.forEach(value => expect(validator.renavam('renavam', value).valid).toBeTruthy())
    invalid.forEach(value => expect(validator.renavam('renavam', value).valid).toBeFalsy())
  })
})