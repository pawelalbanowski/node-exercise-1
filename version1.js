const methods = require('./utilis.js');

var fs = require('fs');

fs.readFile('./numbers.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  data = methods.splitByNewLine(data);
  console.log(data);
  console.log(methods.countOdd(data));
});
