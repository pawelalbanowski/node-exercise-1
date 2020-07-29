const methods = {
  splitByNewLine: (text) => {
    return text.split("\r\n");
  },
  countOdd: (numbers) => {
    return numbers.reduce((count, number) => {
      const checkIfOdd = +number % 2 == 0 ? 0 : 1;
      count + checkIfOdd;
    }, 0);
  },
};
module.exports = methods;
