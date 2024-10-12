import fs from 'fs';

const data = fs.readFileSync('./input.txt', 'utf8').trim();
const rows = data.split('\n');

let treeCount = 0;
let positionX = 0;
const shiftX = 3;
const tree = '#';


// for (let rowIndex = 1; rowIndex < rows.length; rowIndex++) {
//     const row = rows[rowIndex];
//     positionX = (positionX + shiftX) % row.length;
//     // console.log(positionX);
//     if (row[positionX].toString() === tree) {
//         treeCount ++;
//     }

//     console.log(row.substring(0, positionX) + '8' + row.substring(positionX + 1)); 
// }


// Part 2
function checkTree(shiftX, shiftY) {
    let treeCount2 = 0;
    let positionX2 = 0;
    for (let rowIndex = shiftY; rowIndex < rows.length; rowIndex += shiftY) {
        const row = rows[rowIndex];
        positionX2 = (positionX2 + shiftX) % row.length;
        if (row[positionX2].toString() === tree) {
            treeCount2 ++;
        }
        
        console.log(row.substring(0, positionX2) + '8' + row.substring(positionX2 + 1)); 
    }
    return treeCount2;
}
const resultsForAngles = [
    checkTree(1, 1),
    checkTree(3, 1),
    checkTree(5, 1),
    checkTree(7, 1),
    checkTree(1, 2),
]
const multipliedResult = resultsForAngles.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
)
console.log(resultsForAngles, multipliedResult);