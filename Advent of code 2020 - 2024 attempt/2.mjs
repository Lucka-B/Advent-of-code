import fs from 'fs';

const data = fs.readFileSync('./input.txt', 'utf8').trim();
const rows = data.split('\n')

function parseRow(row) {
    const parsedRow = row.split(/[- :]/);
    return parsedRow;
}

function validatePassword1(letter, password, min, max) {
    let matchCount = 0;
    for (let j = 0; j < password.length; j++) {
        const passwordLetter = password[j];
        if (passwordLetter === letter) {
            matchCount++;
        }   
    }
    const result = matchCount >= Number(min) && matchCount <= Number(max);
    return result;
}

let validPasswordCount = 0;

for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const [min, max, letter,  , password] = parseRow(row)
    validPasswordCount += validatePassword1(letter, password, min, max) ? 1 : 0;
}

console.log(validPasswordCount);

// Part 2
let validPasswordCount2 = 0;


function validatePassword2(letter, password, position1, position2) {
    const doesFirstPass = password[position1] === letter;
    const doesSecondPass = password[position2] === letter;
    console.log(doesFirstPass, doesSecondPass, letter, password, position1, position2)
    if ((doesFirstPass && !doesSecondPass) || (!doesFirstPass && doesSecondPass)) {
        return true;
    }
}

for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const [position1, position2, letter,  , password] = parseRow(row)
    validPasswordCount2 += validatePassword2(letter, password, Number(position1) - 1, Number(position2) - 1) ? 1 : 0;
}
console.log(validPasswordCount2);