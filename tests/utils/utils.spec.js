import utils from '../../utils/utils'

describe('UTILS', () => {
  test('Test isNullOrUndefined function', () => {
    const valid = null
    const invalid = 'algo'

    let validFlag = utils.isNullOrUndefined(valid)
    let invalidFlag = utils.isNullOrUndefined(invalid)

    expect(validFlag).toBeTruthy()
    expect(invalidFlag).toBeFalsy()
  })

  test('Test replaceSpecialCharacters function', () => {
    utils.substitionDict = true
    const valid = 'ãéìöùçñ'

    let replaced = utils.replaceSpecialCharacters(valid)
    expect(replaced).toBe('aeioucn')
  })

  test('Test removeWhiteSpace function', () => {
    const valid = 'aaaa            bbbbbbb        cccccc  '
    const invalid = '' 

    let trim = utils.removeWhiteSpace(valid)
    let invalidRule = utils.removeWhiteSpace(invalid)
    expect(trim).toBe('aaaabbbbbbbcccccc')
    expect(invalidRule).toBe('')
  })

  test('Test removeSpecialChars function', () => {
    const valid = 'ABCDEF'
    const invalid = 'AB@C!D%E*F'

    let validFlag = utils.removeSpecialChars(valid)
    let invalidFlag = utils.removeSpecialChars(invalid)

    expect(validFlag).toBe('ABCDEF')
    expect(invalidFlag).toBe('ABCDEF')
  })
});