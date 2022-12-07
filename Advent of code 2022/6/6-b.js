import fs from 'fs';

// full input file
const inputLine = fs.readFileSync('input.txt').toString().trim();



for (let letterIndex = 0; letterIndex < (inputLine.length - 13); letterIndex++) {
    const checkedString = inputLine.substring(letterIndex, letterIndex + 14);
    const setOfCheckedValues = new Set(checkedString.split(''));
    if (setOfCheckedValues.size === 14) {
        const result = letterIndex + 14;
        console.log(result);
        break;
    }
}