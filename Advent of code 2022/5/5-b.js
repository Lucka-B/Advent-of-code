import fs from "fs";

// full input file
const mixedInput = fs.readFileSync("input.txt").toString().trim();

const [supplyState, instructionsInput] = mixedInput.split("\n\n");
const instructions = instructionsInput.split("\n");
const supplyStateRows = supplyState.split("\n");

// supply state
const state = [];

const bottomNumberLine = supplyStateRows.pop().replace(/ /g, "");
console.log(bottomNumberLine);
for (let i = 0; i < bottomNumberLine.length; i++) {
  let newString = "";
  for (let j = supplyStateRows.length - 1; j >= 0; j--) {
    const supplyStateRow = supplyStateRows[j];
    newString += supplyStateRow[i * 4 + 1];
  }
  state.push(newString.trim());
}

console.log("state", state);

// instructions
for (let k = 0; k < instructions.length; k++) {
  const instruction = instructions[k];
  const [, moveHowMany, , moveFrom, , moveWhere] = instruction
    .split(" ")
    .map(Number);

  const chunk = state[moveFrom - 1].slice(-moveHowMany);
  state[moveFrom - 1] = state[moveFrom - 1].slice(0, -moveHowMany);
  state[moveWhere - 1] = state[moveWhere - 1] + chunk;
}

console.log("state end", state);

let finalString = "";
for (const column of state) {
  finalString += column.slice(-1);
}
console.log(finalString);

/* ;
[D]        
[N] [C]    
[Z] [M] [P]
 1   2   3 

 const state = [
  'ZND',
  'MC',
  'P',
 ] */
