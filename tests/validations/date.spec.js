import validator from '../../src'

describe('Date', () => {
    test('Validates date', () => {
        const valid = ['08/01/1991', '08/12/2009', '01/12/2001']
        const validEn = ['8/01/1991', '3/5/2009', '1/12/2001']
        const invalid = ['08011991', '111', '@#T', '', '01/12/-4000']

        valid.forEach((value) =>
            expect(validator.date({ name: 'date', value }).valid).toBeTruthy()
        )
        validEn.forEach((value) =>
            expect(validator.date({ name: 'date', value, locale: 'en-US' }).valid).toBeTruthy()
        )
        invalid.forEach((value) =>
            expect(validator.date({ name: 'date', value }).valid).toBeFalsy()
        )
    })
})
