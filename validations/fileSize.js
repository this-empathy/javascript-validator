let field = {
  name: null,
  valid: false
}
 
export default (files, size) => {
  if (isNaN(size)) return false
  const nSize = size * 1024

  return files.size <= nSize
}