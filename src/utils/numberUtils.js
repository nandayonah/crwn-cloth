export const numberToRupiah = (value) => {
  const str = value.toString()
  let formattedStr = str

  if (str.length === 4) {
    // 1000 -> 1.0000
    formattedStr = `${formattedStr[0]}.${formattedStr.slice(1)}`
  } else if (str.length === 5) {
    formattedStr = `${formattedStr.slice(0, 2)}.${formattedStr.slice(2)}`
  } else if (str.length === 6) {
    formattedStr = `${formattedStr.slice(0, 3)}.${formattedStr.slice(3)}`
  }

  return `Rp ${formattedStr}`
}
