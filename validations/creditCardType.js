import utils from "../utils/utils"
import matches from '../utils/matches'
import types from '../utils/card-types'

const cardNames = {
  VISA: 'visa',
  MASTERCARD: 'mastercard',
  AMERICAN_EXPRESS: 'american-express',
  DINERS_CLUB: 'diners-club',
  DISCOVER: 'discover',
  JCB: 'jcb',
  UNIONPAY: 'unionpay',
  MAESTRO: 'maestro',
  ELO: 'elo',
  MIR: 'mir',
  HIPER: 'hiper',
  HIPERCARD: 'hipercard'
};

const ORIGINAL_TEST_ORDER = [
  cardNames.VISA,
  cardNames.MASTERCARD,
  cardNames.AMERICAN_EXPRESS,
  cardNames.DINERS_CLUB,
  cardNames.DISCOVER,
  cardNames.JCB,
  cardNames.UNIONPAY,
  cardNames.MAESTRO,
  cardNames.ELO,
  cardNames.MIR,
  cardNames.HIPER,
  cardNames.HIPERCARD
];

const testOrder = utils.clone(ORIGINAL_TEST_ORDER);

export default{

  findType(type) {
    return types[type]
  },
  
  getAllCardTypes() {
    return testOrder.map(type => clone(findType(type)))
  },

  addMatchingCardsToResults(cardNumber, cardConfiguration, results){
    let i, pattern, patternLength, clonedCardConfiguration;

    for (i = 0; i < cardConfiguration.patterns.length; i++) {
      pattern = cardConfiguration.patterns[i];
  
      if (!matches.matches(cardNumber, pattern)) continue

      clonedCardConfiguration = utils.clone(cardConfiguration)
      if (Array.isArray(pattern)) {
        patternLength = String(pattern[0]).length
      } else {
        patternLength = String(pattern).length
      }
  
      if (cardNumber.length >= patternLength) clonedCardConfiguration.matchStrength = patternLength
      results.push(clonedCardConfiguration)
      break
    }
  },

  hasEnoughResultsToDetermineBestMatch(results){
    const numberOfResultsWithMaxStrengthProperty = results.filter(result => result.matchStrength)
    return numberOfResultsWithMaxStrengthProperty > 0 && numberOfResultsWithMaxStrengthProperty === results.length
  },

  findBestMatch(results){
    if (!this.hasEnoughResultsToDetermineBestMatch(results)) return
    return results.reduce((bestMatch, result) => {
      if (!bestMatch) return result
      if (bestMatch.matchStrength < result.matchStrength) return result
      return bestMatch;
    });
  },

  get(cardNumber){
    let bestMatch
    let results = []

    testOrder.forEach((type) => {
      let cardConfiguration = this.findType(type)
      this.addMatchingCardsToResults(cardNumber, cardConfiguration, results)
    })

    bestMatch = this.findBestMatch(results)
    if (bestMatch) return [ bestMatch ]
    return results;
  }
}