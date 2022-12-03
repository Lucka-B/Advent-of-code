import fs from "fs";

// full input file
const allRucksacks = fs.readFileSync("input.txt").toString().trim();

const rucskasContents = allRucksacks.split("\n");

function getSharedLetter(stringOne, stringTwo) {
  for (let i = 0; i < stringOne.length; i++) {
    const stringOneLetter = stringOne[i];
    for (let j = 0; j < stringTwo.length; j++) {
      const stringTwoLetter = stringTwo[j];
      if (stringOneLetter === stringTwoLetter) {
        return stringOneLetter;
      }
    }
  }
}

const lowerAlphaMap = "abcdefghijklmnopqrstuvwxyz";
const alphaMap = lowerAlphaMap + lowerAlphaMap.toUpperCase();
function getLetterScore(sharedLetter) {
  return alphaMap.indexOf(sharedLetter) + 1;
}

let score = 0;

for (
  let rucsackIndex = 0;
  rucsackIndex < rucskasContents.length;
  rucsackIndex++
) {
  const oneRucksackContent = rucskasContents[rucsackIndex];
  const oneCompartmentSize = oneRucksackContent.length / 2;
  const firstCompartment = oneRucksackContent.substring(0, oneCompartmentSize);
  const secondCompartment = oneRucksackContent.substring(
    oneCompartmentSize,
    oneRucksackContent.length
  );
  const sharedLetter = getSharedLetter(firstCompartment, secondCompartment);
  score += getLetterScore(sharedLetter);
}
console.log(score);
