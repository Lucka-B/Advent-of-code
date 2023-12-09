import fs from "fs";

const importedText = fs.readFileSync("./test.txt").toString().trim();
const lines = importedText.split("\n");
let sumOfNumbers = 0;
const numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

for (let index = 0; index < lines.length; index++) {
  let line = lines[index];
  console.log(line);
  // get first word-number index

  Object.entries(numbers).forEach(([key, value]) => {
    let min = Infinity;
    if (line.includes(key)) {
      const firstWordIndex = line.indexOf(key);
      if (firstWordIndex < min) {
        min = firstWordIndex;
      }
      console.log(firstWordIndex);
    }
  });
  // get last word-number index
  // console.log("filtered", line);
  const numbersOnly = line.match(/\d/gm);
  const firstNumber = numbersOnly[0]; // + get index
  const lastNumber = numbersOnly[numbersOnly.length - 1]; // + get index
  const finalNumber = Number(firstNumber + lastNumber);
  // compare word/number indexes and select the final number
  sumOfNumbers = sumOfNumbers + finalNumber;
}
// console.log(sumOfNumbers);
