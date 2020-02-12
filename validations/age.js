import utils from "../utils/utils";

export default (name, {value, condition, age}) => {
  let field = {
    name: name,
    valid: false
  }

  console.log('age', value, condition, age);
  

  // '===', '>=', '<=', '<', '>', '!=='

  return field
}