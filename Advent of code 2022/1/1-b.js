import fs from 'fs';

// full input file
const file = fs.readFileSync('input.txt').toString().trim();

const moduleMasses = file.split('\n').map(Number);

let totalFuelNeeded = 0;

function massToFuel(mass) {
    return Math.floor(mass / 3) - 2;
};

for (let moduleIndex = 0; moduleIndex < moduleMasses.length; moduleIndex++) {
    const moduleMass = moduleMasses[moduleIndex];
    const fuelForModule = massToFuel(moduleMass);
    totalFuelNeeded = totalFuelNeeded + fuelForModule;

    let fuelForFuel = massToFuel(fuelForModule);

    while (fuelForFuel > 0) {
        totalFuelNeeded = totalFuelNeeded + fuelForFuel;
        fuelForFuel = massToFuel(fuelForFuel);
    };
}
///////////////////


console.log(totalFuelNeeded);