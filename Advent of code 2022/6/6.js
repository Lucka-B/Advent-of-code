import fs from 'fs';

// full input file
const inputLine = fs.readFileSync('input.txt').toString().trim();



for (let letterIndex = 0; letterIndex < (inputLine.length - 3); letterIndex++) {
    const a = inputLine[letterIndex];
    const b = inputLine[letterIndex + 1];
    const c = inputLine[letterIndex + 2];
    const d = inputLine[letterIndex + 3];
    const setOfCheckedValues = new Set([a, b, c, d]);
    console.log(a, b, c, d, '&&&', setOfCheckedValues, '^', setOfCheckedValues.length);
    if (setOfCheckedValues.size === 4) {
        const result = letterIndex + 4;
        console.log(result);
        break;
    }
}