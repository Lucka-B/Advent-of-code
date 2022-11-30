import fs from 'fs';

const file = fs.readFileSync('input.txt').toString();
const numbers = file.split('\n').map(Number);

const rok = 2020;
for (let i = 0; i < numbers.length; i += 1) {
  const iValue = numbers[i];
  for (let j = i + 1; j < numbers.length; j += 1) {
    const jValue = numbers[j];
    for (let k = j + 1; k < numbers.length; k += 1) {
      const kValue = numbers[k];
      if (iValue + jValue + kValue === rok
        && iValue !== 0
        && jValue !== 0
        && kValue !== 0) {
        console.log(iValue, jValue, kValue, iValue + jValue + kValue, iValue * jValue * kValue);
      }
    }
  }
}
