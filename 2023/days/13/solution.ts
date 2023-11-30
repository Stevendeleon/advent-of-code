async function partOne(){
  const data = await Deno.readTextFile("./input.txt");
  return;
}

async function partTwo() {
  const data = await Deno.readTextFile("./input.txt");
  return;
}

const p1 = await partOne();
const p2 = await partTwo();

console.log('Part One:', p1);
console.log('Part Two:', p2);
