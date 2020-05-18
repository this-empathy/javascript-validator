export default (files) => {
  const re = /\.(csv)$/i
  return re.test(files.name)
}