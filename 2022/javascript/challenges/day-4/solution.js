const readFile = require("../../utils/io");

const input = readFile("./input.txt", "utf-8")
  .split("\r\n")
  .filter((line) => line.trim().length > 0)
  .map((line) => line.replace(/-|,/g, " "))
  .map((line) => line.split(" ").map(Number));

const result = input.reduce((solution, section) => {
  const [minA, maxA, minB, maxB] = section;
  if (minA >= minB && maxA <= maxB || minB >= minA && maxB <= maxA) {
    solution[0]++;
  }

  if (maxA < minB || maxB < minA) {
    solution[1]--;
  }

  return solution;
}, [0, input.length]);

console.log("Part 1:", result[0]);
console.log("Part 2:", result[1]);
