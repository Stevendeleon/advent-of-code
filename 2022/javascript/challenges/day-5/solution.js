const readFile = require('../../utils/io');
const { replaceAll } = require('../../utils/functions');

const input = readFile('./input.txt', 'utf-8')
  .split('\r\n\r\n')
  .filter(line => line.trim().length > 0)
  .map(line => line.split('\r\n'));

const stacksAsArray = input[0]
  .map(line => {
    line = replaceAll(' ' + line, '    ', '[0]');
    line = replaceAll(line, ' ', '')
    line = replaceAll(line, '\\[', '');
    line = replaceAll(line, '\\]', '');
    return line;
  })
  .slice(0, input[0].length - 1)
  .map(line => line.split(''));


console.log(stacksAsArray);