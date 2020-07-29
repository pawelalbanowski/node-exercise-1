const methods = require("./utilis.js");

const fs = require("fs");

fs.readFile("./numbers.txt", "utf-8", (err, data) => {
  if (err) throw err;
  const dataArray = methods.splitByNewLine(data);
  console.log(dataArray);
  console.log(methods.countOdd(dataArray));
});
