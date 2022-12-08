const mapMoves = {
  'X': 'A',
  'Y': 'B',
  'Z': 'C',
}

const ownMoveScore = {
  'A': 1,
  'B': 2,
  'C': 3,
}

const gameScore = {
  'A': {
    'B': 6,
    'C': 0,
  },
  'B': {
    'A': 0,
    'C': 6,
  },
  'C': {
    'A': 6,
    'B': 0,
  }
}

const outcomeMapping = {
  'A': {
    'A': 'C',
    'B': 'A',
    'C': 'B',
  },
  'C': {
    'A': 'B',
    'B': 'C',
    'C': 'A',
  },
}

function sumUpPoints (input) {
  return input.reduce((sum, move) => {
    const pointsForSelection = ownMoveScore[move.b];
    const pointsForResult = move.a === move.b ? 3 : gameScore[move.a][move.b];

    return sum + pointsForSelection + pointsForResult;
  }, 0);
}

module.exports = {
  mapMoves,
  ownMoveScore,
  gameScore,
  outcomeMapping,
  sumUpPoints,
}