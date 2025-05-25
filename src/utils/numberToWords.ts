export function numberToWords(number: string): string {
  if (isNaN(Number(number))) return "Invalid number"

  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
  const teens = ["Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
  const tens = ["", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
  const thousands = ["", "Thousand", "Million", "Billion"]

  let word = ''
  let num = parseInt(number)

  if (num === 0) return "Zero"

  let i = 0
  while (num > 0) {
    if (num % 1000 !== 0) {
      word = helper(num % 1000) + thousands[i] + " " + word
    }
    num = Math.floor(num / 1000)
    i++
  }

  return word.trim()

  function helper(num: number): string {
    if (num === 0) return ""
    else if (num <= 10) return ones[num] + " "
    else if (num < 20) return teens[num - 11] + " "
    else if (num < 100) return tens[Math.floor(num / 10) - 1] + " " + helper(num % 10)
    else return ones[Math.floor(num / 100)] + " Hundred " + helper(num % 100)
  }
}