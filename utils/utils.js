var substitionDict = null

export default{
  replaceSpecialCharacters(text) {
    this._initDict()

    for (const char in substitionDict) {
      let pattern = new RegExp(char, 'g')
      text = text.toString().replace(pattern, substitionDict[char])
    }
    return text
  },

  isNullOrUndefined(value) {
    return value === null || value === undefined
  },

  removeSpecialChars(text) {
    return text.toString().replace(/[^a-zA-Z 0-9]+/g, '')
  },

  removeWhiteSpace(text) {
    if (!text) return ''
    return text.toString().trim().replace(/\s+/g, '')
  },

  _initDict() {
    substitionDict = []
    substitionDict['ã'] = 'a'
    substitionDict['á'] = 'a'
    substitionDict['â'] = 'a'
    substitionDict['ä'] = 'a'
    substitionDict['à'] = 'a'

    substitionDict['é'] = 'e'
    substitionDict['ê'] = 'e'
    substitionDict['ë'] = 'e'
    substitionDict['è'] = 'e'

    substitionDict['í'] = 'i'
    substitionDict['î'] = 'i'
    substitionDict['ï'] = 'i'
    substitionDict['ì'] = 'i'

    substitionDict['õ'] = 'o'
    substitionDict['ó'] = 'o'
    substitionDict['ô'] = 'o'
    substitionDict['ö'] = 'o'
    substitionDict['ò'] = 'o'

    substitionDict['ú'] = 'u'
    substitionDict['û'] = 'u'
    substitionDict['ü'] = 'u'
    substitionDict['ù'] = 'u'

    substitionDict['ç'] = 'c'

    substitionDict['ñ'] = 'n'

    for (const char in substitionDict) {
      substitionDict[char.toUpperCase()] = String(
        substitionDict[char]
      ).toUpperCase()
    }
  }
}