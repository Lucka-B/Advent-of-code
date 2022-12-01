import fs from "fs";

// full input file
const file = fs.readFileSync("input.txt").toString().trim();

const elvesCalories = file.split("\n").map(Number);
console.log(elvesCalories);

let elfSum = 0;
const caloriesArray = [];

for (
  let caloriesLineIndex = 0;
  caloriesLineIndex < elvesCalories.length;
  caloriesLineIndex++
) {
  const caloriesLine = elvesCalories[caloriesLineIndex];
  if (caloriesLine !== 0) {
    elfSum = elfSum + caloriesLineIndex;
  } else {
    caloriesArray.push(elfSum);
    elfSum = 0;
  }
}

console.log(caloriesArray);
