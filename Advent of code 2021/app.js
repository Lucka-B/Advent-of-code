import fs from 'fs';

// full input file
const file = fs.readFileSync('input.txt').toString().trim();

const lines = file.split('\n');

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    console.log(`index ${i} has line ${line}`);
}
