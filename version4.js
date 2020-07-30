const methods = require("./utilis.js");

const fs = require("fs");
const fsPromises = fs.promises;


async function showAmountOdds() {
  try {
    const content = await fsPromises.readFile("./numbers.txt", "utf-8");
    const lines = methods.splitByNewLine(content);
    const numOdds = methods.countOdd(lines);
    console.log(numOdds);
  } catch (err) {
    throw err;
  }
}

showAmountOdds();
