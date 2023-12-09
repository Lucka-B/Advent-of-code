import fs from "fs";

const importedText = fs.readFileSync("./input.txt").toString().trim();
const lines = importedText.split("\n");
let sumOfNumbers = 0;

for (let index = 0; index < lines.length; index++) {
  const line = lines[index];
  const numbersOnly = line.match(/\d/gm);
  const firstNumber = numbersOnly[0];
  const lastNumber = numbersOnly[numbersOnly.length - 1];
  const finalNumber = Number(firstNumber + lastNumber);
  sumOfNumbers = sumOfNumbers + finalNumber;
}
console.log(sumOfNumbers);
