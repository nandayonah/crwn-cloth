export const logError = (error) => {
  const { code, message } = error
  console.error(code, message)
}
