import fs from "fs";

// full input file
const strategyGuide = fs.readFileSync("input.txt").toString().trim();

const strategyGuideTurns = strategyGuide.split("\n");
console.log("strategyGuideTurn = ", strategyGuideTurns);

const outcomeScores = {
  Z: 6,
  Y: 3,
  X: 0,
};

const myTurnScores = {
  AX: 3,
  AY: 1,
  AZ: 2,
  BX: 1,
  BY: 2,
  BZ: 3,
  CX: 2,
  CY: 3,
  CZ: 1,
};

function scoreGame(oponentTurn, outcome) {
  return outcomeScores[outcome] + myTurnScores[`${oponentTurn}${outcome}`];
}

let totalScore = 0;

for (let i = 0; i < strategyGuideTurns.length; i++) {
  const [oponentTurn, outcome] = strategyGuideTurns[i].split(" ");
  totalScore = totalScore + scoreGame(oponentTurn, outcome);
}
console.log(totalScore);
