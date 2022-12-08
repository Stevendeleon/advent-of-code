const fs = require('fs');

function readInput(path) {
  return fs.readFileSync(path, 'utf8');
}

module.exports = readInput;
