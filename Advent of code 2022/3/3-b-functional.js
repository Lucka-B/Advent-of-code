import fs from "fs";

// full input file
const allRucksacks = fs.readFileSync("input.txt").toString().trim();

const rucskasContents = allRucksacks.split("\n");

const lowerAlphaMap = "abcdefghijklmnopqrstuvwxyz";
const alphaMap = lowerAlphaMap + lowerAlphaMap.toUpperCase();

const getSharedLetter = (stringOne, stringTwo, stringThree) =>
  stringOne
    .split("")
    .find((letter1) =>
      stringTwo
        .split("")
        .find((letter2) => letter1 === letter2 && stringThree.includes(letter1))
    );

const score = rucskasContents.reduce((total, batoh, i) => {
  if (i % 3 !== 0) return total;
  return (
    total +
    1 +
    alphaMap.indexOf(
      getSharedLetter(
        rucskasContents[i],
        rucskasContents[i + 1],
        rucskasContents[i + 2]
      )
    )
  );
}, 0);

console.log(score);
