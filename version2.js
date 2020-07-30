const methods = require("./utilis.js");


methods.readFileAsArray("./numbers.txt")
  .then((amount) => console.log(methods.countOdd(amount)))
  .catch(err => console.log(err));
