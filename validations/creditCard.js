import utils from "../utils/utils";
import validNumber from "./number";
import validLetter from "./letter";

export default (name, {number, owner, cvv, date}) => {
  const field = {
    name: name,
    valid: false
  }

  return field
}