import validator from '../../src'

describe('Phone', () => {
    test('Validates Phone', () => {
        const valid = [
            '+55 (11) 3767-3866',
            '551137673866',
            '(11) 3767-3866',
            '+55 (84) 99787-7803',
            '(84) 99787-7803',
            '8499787-7803',
            11994944599
        ]

        const invalid = ['11111', '11111111', '11 222-22', '1', 'aaaaa', 119949]

        valid.forEach(value => expect(validator.phone({ name: 'phone', value }).valid).toBeTruthy())
        invalid.forEach(value => expect(validator.phone({ name: 'phone', value }).valid).toBeFalsy())
    })
})