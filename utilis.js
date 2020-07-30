const fs = require('fs');

const methods = {
  splitByNewLine: (text) => {
    return text.split("\r\n");
  },
  countOdd: (numbers) => {
    return numbers.reduce((count, number) => {
      const checkIfOdd = +number % 2 == 0 ? 0 : 1;
      return count + checkIfOdd;
    }, 0);
  },
  readFileAsArray: (file) => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, "utf-8", (err, data) => {
        if (err) reject(err);
        const dataArray = methods.splitByNewLine(data);
        resolve(dataArray);
      });
    });
  }
};
module.exports = methods;
