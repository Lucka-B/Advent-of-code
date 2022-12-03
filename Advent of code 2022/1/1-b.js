import fs from "fs";

// full input file
const file = fs.readFileSync("input.txt").toString().trim();

const elvesCalories = file.split("\n").map(Number); //.slice(0, 10);

let elfSum = 0;
const caloriesArray = [];

for (
  let caloriesLineIndex = 0;
  caloriesLineIndex < elvesCalories.length;
  caloriesLineIndex++
) {
  const caloriesLine = elvesCalories[caloriesLineIndex];
  if (caloriesLine !== 0) {
    elfSum = elfSum + caloriesLine;
  } else {
    caloriesArray.push(elfSum);
    elfSum = 0;
  }
}

const maxCalories = Math.max(...caloriesArray);
console.log(maxCalories);

caloriesArray.sort((a, b) => b - a);
console.log(caloriesArray);

const sumTopThree = caloriesArray[0] + caloriesArray[1] + caloriesArray[2];
console.log("result", sumTopThree);
