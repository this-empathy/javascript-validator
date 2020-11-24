import validator from '../../src'

describe('Required', () => {
    test('Validates Required', () => {
        const valid = ['asjdj', 0, 'undefined', 'null', 's ', true]
        const checkbox = false
        const invalid = ['', ' ', [], undefined, null]

        valid.forEach(value => expect(validator.required({ name: 'required', value }).valid).toBeTruthy())
        expect(validator.required({ name: 'required', value: checkbox }).valid).toBeFalsy()
        invalid.forEach(value => expect(validator.required({ name: 'required', value }).valid).toBeFalsy())
    })
})