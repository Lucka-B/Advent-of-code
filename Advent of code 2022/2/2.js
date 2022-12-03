import fs from "fs";

// full input file
const strategyGuide = fs.readFileSync("input.txt").toString().trim();

const strategyGuideTurns = strategyGuide.split("\n");
console.log("strategyGuideTurn = ", strategyGuideTurns);

const shapeScores = {
  Z: 3,
  Y: 2,
  X: 1,
};

const outcomeScores = {
  AX: 3,
  AY: 6,
  AZ: 0,
  BX: 0,
  BY: 3,
  BZ: 6,
  CX: 6,
  CY: 0,
  CZ: 3,
};

function scoreGame(oponentTurn, myTurn) {
  return shapeScores[myTurn] + outcomeScores[`${oponentTurn}${myTurn}`];
}

let totalScore = 0;

for (let i = 0; i < strategyGuideTurns.length; i++) {
  const [oponentTurn, myTurn] = strategyGuideTurns[i].split(" ");
  totalScore = totalScore + scoreGame(oponentTurn, myTurn);
}
console.log(totalScore);
