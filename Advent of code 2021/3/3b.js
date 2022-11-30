import fs from 'fs';

// full input file
const file = fs.readFileSync('input.txt').toString().trim();
const rows = file.split('\n');
let oxGR = [];
let co2SR = [];
let midResult = [...rows];
let midResult2 = [...rows];
for (let columnNumber = 0; columnNumber < midResult[0].length; columnNumber += 1) { // prochazi sloupce od 0 po "delku prvniho radku"
  let zero = 0;
  let one = 0;
  let zero2 = 0;
  let one2 = 0;
  for (let rowNumber = 0; rowNumber < midResult.length; rowNumber += 1) { // prochazi radky (rows) od 0 po konec
    const targetNumber = (midResult[rowNumber])[columnNumber];
    if (targetNumber === '1') {
      one += 1;
    } else {
      zero += 1;
    }
  }
  for (let rowNumber = 0; rowNumber < midResult2.length; rowNumber += 1) { // prochazi radky (rows) od 0 po konec
    const targetNumber = (midResult2[rowNumber])[columnNumber];
    if (targetNumber === '1') {
      one2 += 1;
    } else {
      zero2 += 1;
    }
  }
  // console.log(zero, one);
  // zjisten pocet cisel zacinajicich zero a one
  if (one >= zero) {
    midResult = midResult.filter((line) => line[columnNumber] === '1');
  } else {
    midResult = midResult.filter((line) => line[columnNumber] === '0');
  }
 
  if (midResult.length === 1) {
    oxGR = midResult[0];
    console.log('oxGR', oxGR);
  }
  if (zero2 <= one2) {
    midResult2 = midResult2.filter((line) => line[columnNumber] === '0');
  } else {
    midResult2 = midResult2.filter((line) => line[columnNumber] === '1');
  }
  // console.log(midResult2);
  if (midResult2.length === 1) {
    co2SR = midResult2[0];
    console.log('co2SR', co2SR);
  }
  console.log(midResult.length, midResult2.length);
}
const result = parseInt(co2SR, 2) * parseInt(oxGR, 2);
console.log(result, parseInt(co2SR, 2), parseInt(oxGR, 2));
