// import the readInput method from the readInput.js file
const readInput = require('../readInput');

// read the input file
const input = readInput('input.txt');

const mapOfScores = new Map([
  ['A X', 3], ['A Y', 6], ['A Z', 0],
  ['B X', 0], ['B Y', 3], ['B Z', 6],
  ['C X', 6], ['C Y', 0], ['C Z', 3],
]);

let runningTotal = 0;

const games = input.split('\n');

for (let i = 0; i < games.length; i++) {
  let roundScore = mapOfScores.get(games[i]);

  if (roundScore !== undefined) {
    runningTotal += roundScore;
  }
}

console.log(runningTotal);


