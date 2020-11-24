export const fileType = (files: File): boolean => {
    const re = /\.(jpg|svg|jpeg|png|bmp|gif)$/i
    return re.test(files.name)
}
