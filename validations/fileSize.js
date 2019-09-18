
export default (files, size) => {
  if (isNaN(size)) return false

  let field = {
    name: null,
    valid: false
  }
  const nSize = size * 1024
  return files.size <= nSize
}