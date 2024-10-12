import fs from 'fs';

const data = fs.readFileSync('./input.txt', 'utf8').trim();
const boardingPasses = data.split('\n');

// PART 1
const maximumRowNumber = 127;
const maximumColumnNumber= 7;

function getNumberFromBoardingPass(boardingPass, maxNumber) {
    let min = 0;
    let max = maxNumber;

    for (let i = 0; i < boardingPass.length; i++) {
        const boardingPassLetter = boardingPass[i];
        
        if(boardingPassLetter.includes('B') || boardingPassLetter.includes('R')) {
            min = Math.ceil((min + max) / 2);
        } else {
            max = Math.floor((min + max) / 2);
        }
        // console.log([min, max]);
    }

    return min;
}

let highestSeatId = 0;

for (let i = 0; i < boardingPasses.length; i++) {
    const boardingPass = boardingPasses[i];
    
    const seatId = getSeatId(boardingPass);
    if(seatId > highestSeatId) {
        highestSeatId = seatId;
    }
}

console.log(highestSeatId)


function getSeatId(boardingPass) {
    const row = boardingPass.slice(0, 7);
    const column = boardingPass.slice(7);

    const rowResult = getNumberFromBoardingPass(row, maximumRowNumber);
    const columnResult = getNumberFromBoardingPass(column, maximumColumnNumber);

    const seatId = rowResult * 8 + columnResult;
    return seatId;
}

// PART 2
const sortedSeatIds = boardingPasses.map(getSeatId);
sortedSeatIds.sort((a, b) => a - b);
console.log(sortedSeatIds)
const result = 1 + sortedSeatIds.find((id, i) => {
    console.log(sortedSeatIds[i + 1], id)
    return  sortedSeatIds[i + 1] - id > 1;
})

console.log(result)