import fs from 'fs';

const file = fs.readFileSync('input.txt').toString();
const numbers = file.split('\n').map(Number);

let neco = 0;
while (neco < 3) {
  neco += 1;
  console.log(neco);
}

for (let dalsineco = 0; dalsineco < 3; dalsineco += 1) {
  console.log(dalsineco);
}

neco += 1;
if (neco < 3) {
  console.log(neco);
} else if (neco > 3) {
  console.log('buu');
} else {
  console.log('text');
}

// eslint-disable-next-line no-console
console.log(numbers);
