import fs from 'fs';

const file = fs.readFileSync('input.txt').toString();
const numbers = file.split('\n').map(Number);

const rok = 2020;
for (let i = 0; i < numbers.length; i += 1) {
  const iValue = numbers[i];
  for (let j = 0; j < numbers.length; j += 1) {
    const jValue = numbers[j];

    if (iValue + jValue === rok) {
      console.log(iValue, jValue, iValue + jValue, iValue * jValue);
    }
  }
}
