import fs from "fs";

// full input file
const allSectionsIds = fs.readFileSync("input.txt").toString().trim();

const pairSections = allSectionsIds.split("\n");
let fullyContainsOther = 0;

for (let i = 0; i < pairSections.length; i++) {
  const twoSectionsRow = pairSections[i];
  const [firstPair, secondPair] = twoSectionsRow.split(",");
  console.log(firstPair, "+", secondPair);
  const [firstPairFirstValue, firstPairSecondValue] = firstPair
    .split("-")
    .map(Number);
  const [secondPairFirstValue, secondPairSecondValue] = secondPair
    .split("-")
    .map(Number);
  console.log(firstPairFirstValue, firstPairSecondValue);
  const isFirstInSecond =
    secondPairFirstValue >= firstPairFirstValue &&
    secondPairSecondValue <= firstPairSecondValue;
  const isSecondInFirst =
    firstPairFirstValue >= secondPairFirstValue &&
    firstPairSecondValue <= secondPairSecondValue;
  if (isFirstInSecond || isSecondInFirst) {
    fullyContainsOther += 1;
  }
}

console.log(fullyContainsOther);
