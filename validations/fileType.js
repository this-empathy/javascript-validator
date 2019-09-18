export default (files) => {
  const re = /\.(jpg|svg|jpeg|png|bmp|gif)$/i
  let field = {
    name: null,
    valid: false
  }

  return re.test(files.name)
}