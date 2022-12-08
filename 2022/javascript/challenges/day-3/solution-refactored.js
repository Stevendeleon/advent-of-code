const readInput = require('../../utils/io');
const { splitArrayAfterNValues } = require('../../utils/array');
const { getCharacterValue } = require('./helpers');

const input = readInput('./input.txt', 'utf-8')
  .split('\r\n')
  .filter(line => line.trim().length > 0);

const partOne = input.reduce((sum, word) => {
  const [a, b] = [
    word.substring(0, word.length / 2),
    word.substring(word.length / 2),
  ]

  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      return sum += getCharacterValue(a[i]);
    }
  }
}, 0);

const partTwo = splitArrayAfterNValues(input, 3)
  .reduce((sum, wordTriplet) => {
    const [a, b, c] = wordTriplet;

    for (let j = 0; j < a.length; j++) {
      if (b.includes(a[j]) && c.includes(a[j])) {
        return sum += getCharacterValue(a[j]);
      }
    }
  }, 0);

console.log('Part 1:', partOne);
console.log('Part 2:', partTwo);


