import fs from 'fs';

const data = fs.readFileSync('./input.txt', 'utf8').trim();
const rules = data.split('\n');

/**
 * @type {{
 *  color: string;
 *  contains: [{
 *      color: string;
 *      count: number;
 *  }]
 * }[]}
 */
const nodes = [];

for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const parentBagColor = rule.split('bags contain')[0].trim();
    const childBags = rule.split('bags contain')[1].split(',').map((bag) => bag.replace(/bags?\.?/, '').trim());
    nodes.push({
        color: parentBagColor,
        contains: childBags.map((bag) => ({
            color: bag.split(' ').slice(1).join(' '),
            count: Number(bag.split(' ')[0])
        }))
    })
}

// console.log(JSON.stringify(nodes, null, 4))

const acceptedBagColors = ['shiny gold']
let acceptedBagColorsLength = 0;

while (acceptedBagColors.length !== acceptedBagColorsLength) {
    acceptedBagColorsLength = acceptedBagColors.length;
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        function isAccepted(insideBagContent) {
            const containedColor = insideBagContent.color;
            if(acceptedBagColors.includes(containedColor)) {
                return true;
            }
            return false;
        }
        if (node.contains.some(isAccepted) && !acceptedBagColors.includes(node.color)) 
            acceptedBagColors.push(node.color)
        }
    }


console.log('BAGS', acceptedBagColors.length - 1)

// PART 2