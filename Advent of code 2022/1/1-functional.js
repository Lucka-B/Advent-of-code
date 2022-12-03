import fs from "fs";

// full input file
const file = fs.readFileSync("input.txt").toString().trim();

const elvesCalories = file.split("\n").map(Number); //.slice(0, 10);

console.log(
  [...elvesCalories, 0].reduce(
    (total, currentCalories) => {
      if (currentCalories) {
        return { ...total, last: total.last + currentCalories };
      } else {
        return {
          max: total.max > total.last ? total.max : total.last,
          last: 0,
        };
      }
    },
    { max: 0, last: 0 }
  ).max
);
