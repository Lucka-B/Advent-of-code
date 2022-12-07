import fs from "fs";

// full input file
const allRucksacks = fs.readFileSync("input.txt").toString().trim();

const rucskasContents = allRucksacks.split("\n");

const lowerAlphaMap = "abcdefghijklmnopqrstuvwxyz";
const alphaMap = lowerAlphaMap + lowerAlphaMap.toUpperCase();
function getLetterScore(sharedLetter) {
  return alphaMap.indexOf(sharedLetter) + 1;
}
function getSharedLetter(stringOne, stringTwo, stringThree) {
  for (let i = 0; i < stringOne.length; i++) {
    const stringOneLetter = stringOne[i];
    for (let j = 0; j < stringTwo.length; j++) {
      const stringTwoLetter = stringTwo[j];
      for (let k = 0; k < stringThree.length; k++) {
        const StringThreeLetter = stringThree[k];
        if (
          stringOneLetter === stringTwoLetter &&
          StringThreeLetter === stringTwoLetter
        ) {
          return stringOneLetter;
        }
      }
    }
  }
}
let score = 0;

for (
  let rucsackIndex = 0;
  rucsackIndex < rucskasContents.length;
  rucsackIndex += 3
) {
  const firstRucksackContent = rucskasContents[rucsackIndex];
  const secondRucksackContent = rucskasContents[rucsackIndex + 1];
  const thirdRucksackContent = rucskasContents[rucsackIndex + 2];
  const sharedLetter = getSharedLetter(
    firstRucksackContent,
    secondRucksackContent,
    thirdRucksackContent
  );

  score += getLetterScore(sharedLetter);
}
console.log(score);
