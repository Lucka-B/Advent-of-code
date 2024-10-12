import fs from 'fs';

const data = fs.readFileSync('./input.txt', 'utf8').trim();
const rows = data.split('\n').map(Number);

for (let i = 0; i < rows.length; i++) {
    const firstNumber = rows[i];
    for (let j = i + 1; j < rows.length; j++) {
        const secondNumber = rows[j];
        if (firstNumber + secondNumber === 2020) {
            console.log(firstNumber * secondNumber)
        }
    }
    
}

// Part 2

for (let i = 0; i < rows.length; i++) {
    const firstNumber = rows[i];
    for (let j = i + 1; j < rows.length; j++) {
        const secondNumber = rows[j];
        for (let k = j + 1; k < rows.length; k++) {
            const thirdNumber = rows[k];
            if (firstNumber + secondNumber + thirdNumber === 2020) {
                console.log(firstNumber * secondNumber * thirdNumber)
            }
         }
    }
}