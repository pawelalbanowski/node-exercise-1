const methods = require("./utilis.js");

const fs = require("fs");

const readFileAsArray = (file, cb) => {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) throw err;
    const dataArray = methods.splitByNewLine(data);
    cb(err, dataArray);
  });
};

readFileAsArray("./numbers.txt", (err, lines) => {
  if (err) throw err;
  const amountOdds = methods.countOdd(lines);
  console.log(amountOdds);
});
