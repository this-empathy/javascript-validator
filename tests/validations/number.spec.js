import validator from '../../src'

describe('Number', () => {
    test('Validates Number', () => {
        const valid = ['12', '1111111', '551137673866', '1234567890']
        const invalid = ['aaaaa', 'bbbbb', '@@!##$@']

        valid.forEach(value => expect(validator.number({ name: 'number', value }).valid).toBeTruthy())
        invalid.forEach(value => expect(validator.number({ name: 'number', value }).valid).toBeFalsy())
    })
})