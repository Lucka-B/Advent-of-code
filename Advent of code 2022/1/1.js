import fs from 'fs';

// full input file
const file = fs.readFileSync('input.txt').toString().trim();

const moduleMasses = file.split('\n').map(Number);

let totalFuelNeeded = 0;

for (let moduleIndex = 0; moduleIndex < moduleMasses.length; moduleIndex++) {
    const moduleMass = moduleMasses[moduleIndex];
    const fuelForModule = Math.floor(moduleMass / 3) - 2;
    totalFuelNeeded = totalFuelNeeded + fuelForModule;
}

console.log(totalFuelNeeded);