console.log("=== Day 1 ===");

// read the input
const input = await Deno.readTextFile("input.txt");
const lines = input.split("\n");

// parse the input
const pairsLeft = [];
const pairsRight = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const [left, right] = line.replace(/\s+/g, " ").split(" ");
  pairsLeft.push(parseInt(left));
  pairsRight.push(parseInt(right));
}

// Part 1

// sort the pairs
pairsLeft.sort((a, b) => a - b);
pairsRight.sort((a, b) => a - b);

// sum the pairs distance
let sum = 0;
for (let i = 0; i < lines.length; i++) {
  sum += Math.abs(pairsLeft[i] - pairsRight[i]);
}

console.log("Part 1: " + sum);

// Part 2

let score = 0;

// find how many times each left value appears on the right
for (let i = 0; i < lines.length; i++) {
  const left = pairsLeft[i];

  // similarity score is left multiply by number of times appears on the right
  score += left * pairsRight.filter((right) => right === left).length;
}

console.log("Part 2: " + score);
