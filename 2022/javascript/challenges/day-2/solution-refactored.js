const { mapMoves, outcomeMapping, sumUpPoints } = require("./helpers");
const readInput = require("../../utils/io");

const inputPartOne = readInput("./input.txt", "utf-8")
  .split("\r\n")
  .filter((line) => line.trim().length > 0)
  .map((line) => {
    return {
      a: line.split(" ")[0],
      b: mapMoves[line.split(" ")[1]],
    };
  });

const inputPartTwo = inputPartOne
  .map((move) => {
    return {
      ...move,
      b: (move.b === "B") ? move.a : outcomeMapping[move.b][move.a],
    };
  });

console.log("Part 1:", sumUpPoints(inputPartOne));
console.log("Part 2:", sumUpPoints(inputPartTwo));
