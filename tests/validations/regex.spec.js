import validator from '../../src'

describe('REGEX', () => {
    test('Validates regex', () => {
        const regex = /^[0-9]+$/
    
        expect(validator.regex({ name: 'regex', value: '123456789', regex }).valid).toBe(true)
        expect(validator.regex({ name: 'regex', value: 'abc', regex }).valid).toBe(false)
        expect(validator.regex({ name: 'regex', value: 'abc-123', regex }).valid).toBe(false)
    })
})