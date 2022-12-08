import fs from "fs";

// full input file
const allSectionsIds = fs.readFileSync("input.txt").toString().trim();

const pairSections = allSectionsIds.split("\n");
let overlaps = 0;

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

  const doesOverlap =
    secondPairFirstValue <= firstPairSecondValue &&
    secondPairSecondValue >= firstPairFirstValue;

  if (doesOverlap) {
    overlaps += 1;
  }
}

console.log(overlaps);
