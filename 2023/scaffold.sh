#!/bin/bash

echo "Scaffolding 2023 for Deno"

mkdir days
cd days

for i in {01..25}
do
  mkdir $i
  touch $i/input.txt

  cat <<EOF >$i/solution.ts
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
EOF

done
