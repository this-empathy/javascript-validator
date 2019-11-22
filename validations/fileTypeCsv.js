export default (files) => {
  const re = /\.(csv)$/i
  let field = {
    name: null,
    valid: false
  }

  return re.test(files.name)
}