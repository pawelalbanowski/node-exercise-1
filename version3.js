const methods = require("./utilis.js");


const showAmountOdds = async () => {
  try {
    const lines = await methods.readFileAsArray("./numbers.txt");
    const numOdds = methods.countOdd(lines);
    console.log(numOdds);
  } catch (err) {
    throw err;
  }
}

showAmountOdds();
