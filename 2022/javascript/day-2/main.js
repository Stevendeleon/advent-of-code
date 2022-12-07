// imports
const { mapMoves, ownMoveScore, gameScore, outcomeMapping } = require('./mappers');
const readInput = require('../readInput');

const inputPartOne = readInput('./input.txt', 'utf-8')
  .split('\r\n')
  .filter(line => line.trim().length > 0)
  .map(line => {
    return {
      a: line.split(' ')[0],
      b: mapMoves[line.split(' ')[1]],
    }
  });

function sumUpPoints (input) {
  return input.reduce((sum, move) => {
    const pointsForSelection = ownMoveScore[move.b];
    const pointsForResult = move.a === move.b ? 3 : gameScore[move.a][move.b];

    return sum + pointsForSelection + pointsForResult;
  }, 0);
}

const inputPartTwo = inputPartOne
  .map(move => {
    return {
      ...move,
      b: (move.b === 'B') ? move.a : outcomeMapping[move.b][move.a]
    };
  });

console.log('Part 1:', sumUpPoints(inputPartOne));
console.log('Part 2:', sumUpPoints(inputPartTwo));
