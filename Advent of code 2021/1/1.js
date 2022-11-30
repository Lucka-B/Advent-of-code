import fs from 'fs';

// full input file
const file = fs.readFileSync('input.txt').toString().trim();

const lines = file.split('\n').map(Number);

let zvyseni = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line < lines[i + 1]) {
        zvyseni = zvyseni + 1;
    }
}
console.log(zvyseni);
