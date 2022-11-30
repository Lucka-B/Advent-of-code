import fs from 'fs';

// full input file
const file = fs.readFileSync('input.txt').toString().trim();

const lines = file.split('\n').map(Number);

let zvyseni = 0;

for (let i = 0; i < lines.length; i++) {
    const fstSoucet = lines[i] + lines[i + 1] + lines[i + 2];
    const scdSoucet = lines[i + 1] + lines[i + 2] + lines[i + 3];
    if (fstSoucet < scdSoucet) {
        zvyseni = zvyseni + 1;
    }
}
console.log(zvyseni);
