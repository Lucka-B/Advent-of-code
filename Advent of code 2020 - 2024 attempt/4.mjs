import fs from 'fs';

const data = fs.readFileSync('./input.txt', 'utf8').trim();
const passportInputs = data.split('\n\n');

let validPassportCount = 0;

function hgtValidation(hgt) {
    if(!hgt) {
        return false
    }
    const isCm = hgt.includes('cm');
    const isIn = hgt.includes('in');
    const valueWithoutUnit = Number(hgt.slice(0, -2));
    if (isCm) {
        if(valueWithoutUnit >= 150 && valueWithoutUnit <= 193) {
            return true;
        }
    } else if (isIn) {
        if(valueWithoutUnit >= 59 && valueWithoutUnit <= 76) {
            return true;
        }
    }
    return false;
}

const hclRegex = /^#[\da-f]{6}$/;
const eclValid = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
const pidRegex = /^\d{9}$/;


for (let i = 0; i < passportInputs.length; i++) {
    const passportInput = passportInputs[i];
    const requiredFields = ['ecl',
    'pid',
    'eyr',
    'hcl',
    'byr',
    'iyr',
    'hgt']
    if (requiredFields.every(field => passportInput.includes(field))) {
        const passportFields = passportInput.split(/[ \n]/)
        let isValid = true;
        for (let j = 0; j < passportFields.length; j++) {
            const passportField = passportFields[j];
            const passportFieldWithoutType = passportField.slice(4);
            // console.log(typeof(passportFieldWithoutType), passportFieldWithoutType, eclRegex.test(passportFieldWithoutType))
            const fieldName = passportField.substring(0, 3)
            const validators = {
                byr: (v) => Number(v) >= 1920 && Number(v) <= 2002,
                iyr: (v) => Number(v) >= 2010 && Number(v) <= 2020,
                eyr: (v) => Number(v) >= 2020 && Number(v) <= 2030,
                hgt: hgtValidation,
                ecl: (v) => eclValid.includes(v),
                hcl: (v) => hclRegex.test(v),
                pid: (v) => pidRegex.test(v),
                cid: (v) => true,
                
            }
            if (!validators[fieldName](passportFieldWithoutType)) {
                isValid = false;
                console.log(`'${fieldName}'`, `'${passportFieldWithoutType}'`, isValid)
                break;
            }
                console.log(`'${fieldName}'`, `'${passportFieldWithoutType}'`, isValid)

        }
        console.log(passportInput, isValid)
        if (isValid) {validPassportCount += 1;}
    }
}

console.log(validPassportCount);