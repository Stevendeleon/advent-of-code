const readFile = require('../../../utils/io');
const { getSumOfArray } = require('../../../utils/array');

const input = readFile('../input.txt', 'utf-8')
  .split('\r\n\r\n')
  .map(line => {
    return line.split('\r\n')
  })
  .map(arr => {
    return arr
      .filter(x => !!x)
      .map(n => parseInt(n))
  })
  .map(arr => {
    return getSumOfArray(arr);
  }).sort((a,b) => a-b);


console.log('Part 1:', input[input.length - 1]);
console.log('Part 2:', getSumOfArray(input.splice(input.length - 3)));
