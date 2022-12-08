const readFile = require('../../../utils/io');

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

function partOne() {
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    const arr = input[i];
    const sum = findSumOfArray(arr);

    if (sum > total) {
      total = sum;
    }
  }

  console.log('Part 1:', total);
}

function partTwo() {
  let total = []

  for (let i = 0; i < input.length; i++) {
    const arr = input[i];
    const sum = findSumOfArray(arr);

    total = [...total, sum];
  }

  total.sort((a, b) => b - a);

  let topThree = total[0] + total[1] + total[2]

  console.log('Part 2:', topThree);
}
function findSumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

partOne();
partTwo();

