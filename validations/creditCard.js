import utils from "../utils/utils";
import validNumber from "./number";
import validLetter from "./letter";

export default (name, {number, owner, cvv, date}) => {
  const field = {
    name: name,
    valid: false,
    errorType: ''
  }

  const validCardDate = function(date){
    const res = date.split('/')
    const parsed = new Date()
    let today = new Date()
    parsed.setFullYear(res[1], res[0], 1)
    if (parsed < today) {
      field.errorType = 'date'
      return false
    }
    return true
  }

  if(!validCardDate(date)){
    field.valid = validCardDate(date)
    return field  
  }


  // let cardNumber = validNumber('cardNumber', utils.removeWhiteSpace(number)).valid ? utils.removeWhiteSpace(number) : false
  // let cardOwner = validLetter('cardOwner', utils.removeWhiteSpace(owner)).valid ? owner : false
  // let cardCvv = validNumber('cardCvv', utils.removeWhiteSpace(cvv)).valid ? utils.removeWhiteSpace(cvv) : false


  console.log('card', field);
  
  return field
}