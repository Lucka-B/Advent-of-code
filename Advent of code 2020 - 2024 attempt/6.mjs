import fs from 'fs';

const data = fs.readFileSync('./input.txt', 'utf8').trim();
const groupInputs = data.split('\n\n');

// Part 1
let totalSum = 0;

for (let i = 0; i < groupInputs.length; i++) {
    const groupInput = groupInputs[i].replace(/\n/g, '');
    const uniqueValues = new Set(groupInput);
    const sum = uniqueValues.size;
    totalSum += sum;
}

// console.log(totalSum)

// Part 2

let totalSum2 = 0;

for (let i = 0; i < groupInputs.length; i++) {
    const groupInput = groupInputs[i];
    // console.log(groupInput)
    const individualInputs = groupInput.split('\n');
    console.log(individualInputs)
    let shortestInput = individualInputs[0];

    for (let j = 0; j < individualInputs.length; j++) {
        const individualInput = individualInputs[j];
        if(individualInput.length < shortestInput.length) {
            shortestInput = individualInput;
        }
    }
    // console.log(shortestInput)

    let totalEveryoneAnsweredYes = 0;

    for (let k = 0; k < shortestInput.length; k++) {
        const shortestInputLetter = shortestInput[k];
        // console.log(shortestInputLetter)
        const everyoneAnsweredYes = individualInputs.every((input) => input.includes(shortestInputLetter));
        if(everyoneAnsweredYes){
            totalEveryoneAnsweredYes += 1;
        }
    }
    totalSum2 += totalEveryoneAnsweredYes
// console.log(totalEveryoneAnsweredYes)
}
console.log(totalSum2)