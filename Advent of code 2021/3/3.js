import fs from 'fs';

// full input file
const file = fs.readFileSync('input.txt').toString().trim();
const lines = file.split('\n');
let grate = [];
let erate = [];
for (let columnNumber = 0; columnNumber < lines[0].length; columnNumber += 1) {
  let zero = 0;
  let one = 0;
  for (let rowNumber = 0; rowNumber < lines.length; rowNumber += 1) {
    const firstNumber = (lines[rowNumber])[columnNumber];
    if (firstNumber === '1') {
      one += 1;
    } else {
      zero += 1;
    }
  }
  console.log(zero, one);
  if (zero > one) {
    grate[columnNumber] = 0;
    erate[columnNumber] = 1;
  } else {
    grate[columnNumber] = 1;
    erate[columnNumber] = 0;
  }
}
console.log(grate, erate);
grate = grate.join('');
erate = erate.join('');
console.log(grate, erate);
const result = parseInt(grate, 2) * parseInt(erate, 2);
console.log(result);
