const methods = require("./utilis.js");

const fs = require("fs");

const readFileAsArray = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject(err);
      const dataArray = methods.splitByNewLine(data);
      console.log(dataArray);
      resolve(dataArray);
    });
  });
};

async function showAmountOdds() {
  try {
    const lines = await readFileAsArray("./numbers.txt");
    console.log(methods.countOdd(lines));
  } catch (err) {
    throw err;
  }
}

showAmountOdds();
