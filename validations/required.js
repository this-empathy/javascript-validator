import utils from "./utils/utils";

let field = {
  name: null,
  valid: false
}

export default (name, value) => {
  field.name = name

  if (utils.isNullOrUndefined(value)) {
    return field
  }
  
  // incase a field considers `false` as an empty value like checkboxes.
  if (value === false) {
    return field
  }

  field.valid = !!String(value).trim().length
  return field
}