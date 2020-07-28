const Methods = {
  splitByNewLine: text => {
    return text.split("\r\n");
  },
  countOdd: numbers =>  {
      return numbers.reduce((count, number) => count+ (Number(number)%2==0 ? 0 : 1), 0);
  }
}
module.exports = Methods;
