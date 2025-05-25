export function numberToWords(number: string): string {
  if (isNaN(Number(number))) return "Invalid number";

  // 处理负数
  let isNegative = false;
  if (number.startsWith('-')) {
    isNegative = true;
    number = number.slice(1);
  }

  // 拆分整数和小数部分
  const [intPart, decPart] = number.split('.');

  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
  const teens = ["Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const thousands = ["", "Thousand", "Million", "Billion"];

  let word = '';
  let num = parseInt(intPart, 10);

  if (num === 0) word = "Zero";
  else {
    let i = 0;
    while (num > 0) {
      if (num % 1000 !== 0) {
        word = helper(num % 1000) + thousands[i] + " " + word;
      }
      num = Math.floor(num / 1000);
      i++;
    }
    word = word.trim();
  }

  // 处理小数部分
  if (decPart && /^\d+$/.test(decPart)) {
    const decWords = decPart
      .split('')
      .map(d => ones[parseInt(d, 10)] || "Zero")
      .join(' ');
    word += " point " + decWords;
  }

  if (isNegative) {
    word = "Minus " + word;
  }

  return word.trim();

  function helper(num: number): string {
    if (num === 0) return "";
    else if (num <= 10) return ones[num] + " ";
    else if (num < 20) return teens[num - 11] + " ";
    else if (num < 100) return tens[Math.floor(num / 10) - 1] + " " + helper(num % 10);
    else return ones[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
  }
}