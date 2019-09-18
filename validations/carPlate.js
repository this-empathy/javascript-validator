import utils from "./utils/utils";
import letter from "./letter";
import number from "./number";

let field = {
  name: null,
  valid: false
}
export default (name, value) => {    
  field.name = name

  let plate = value.replace('-', '')
  plate = utils.removeWhiteSpace(plate)

  if (plate.length > 7 || plate.length < 7) return field

  const isLetterNumber = /[^A-Za-z0-9]+$/

  let plate_partOne = plate.slice(0, 3)
  let plate_partTwo = plate.charAt(3)
  let plate_partThree = plate.charAt(4)
  let plate_partFour = plate.slice(5, 7)

  if (!letter(name, plate_partOne).valid){
    return field
  }
  if (!number(name, plate_partTwo).valid){
    return field
  }
  if (isLetterNumber.test(plate_partThree)){
    return field
  } 
  if (!number(name, plate_partFour).valid) {
    return field
  }

  return field
}