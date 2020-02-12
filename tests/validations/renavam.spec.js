import validator from '../../index.js'

describe('RENAVAM', () => {
  test('Validates RENAVAM', () => {
    const valid = ['62686659821', '34992662022', '37480623073', '78262717022', '37421234813', '90877041860', '66326197250' ]
    const invalid = ['MHD', '9564048', '@#T-5886', '132']
    
    valid.forEach(value => expect(validator.renavam('renavam', value).valid).toBeTruthy())
    invalid.forEach(value => expect(validator.renavam('renavam', value).valid).toBeFalsy())
  })
})