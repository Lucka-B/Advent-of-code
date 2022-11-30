import fs from 'fs';

// full input file
const file = fs.readFileSync('input.txt').toString().trim();

const lines = file.split('\n');

let hpos = 0;
let depth = 0

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const value = Number(line.split(" ")[1]);
    if (line.includes("up")) {
        depth = depth - value;
    }
    if (line.includes("down")) {
        depth = depth + value;
    }
    if (line.includes("forward")) {
        hpos = hpos + value
    }
}
console.log(depth * hpos);