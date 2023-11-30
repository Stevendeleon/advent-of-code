function getSumOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

function splitArrayAfterNValues(array, len) {
  let result = [];
  let loopAmount = array.length / len;

  for (let i = 0; i < loopAmount; i++) {
    const downRange = i * len;
    const upperRange = (i + 1) * len;
    result = [...result, array.slice(downRange, upperRange)];
  }

  return result;
}

module.exports = {
  getSumOfArray,
  splitArrayAfterNValues,
};
