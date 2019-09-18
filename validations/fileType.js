let field = {
  name: null,
  valid: false
}
 
export default (files) => {
  const re = /\.(jpg|svg|jpeg|png|bmp|gif)$/i
  return re.test(files.name)
}