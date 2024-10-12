// array.forEach(callback)
// forEach(array, callback)

const logItem = (value, index, array) => {
    console.log(`${value} is ${index + 1}th out of ${array.length}`);
}

const stringLength = (string) => string.length;

const isLongEnough = (string) => string.length > 3;


const stuff = ['prd', 'bricho', 'haha', 'tak']
console.log('^^^^^^^^^^', logItem('pero', 1, stuff));

const forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        callback(element, i, array)
    }
}

const map = (array, callback) => {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        resultArray.push(callback(element, i, array));
    }
    return resultArray;
}

forEach(stuff, logItem);
console.log('MAP', map(stuff, stringLength));

const filter = (array, condition) => {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (condition(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}

console.log('FILTER', filter(stuff, isLongEnough));

const some = (array, condition) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (condition(element))
            return true
    }
    return false;
};

console.log('SOME', some(stuff, isLongEnough));

