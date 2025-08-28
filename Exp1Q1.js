module.exports = {
  math: {
    mul(a, b) { return a * b; },
    div(a, b) { return b !== 0 ? a / b : null; },
  },
  greet: {
    hello(name) { return `Hello, ${name}!`; },
    bye(name) { return `Goodbye, ${name}!`; },
  },
};

2nd file code
const helpers = require("./helpers");

console.log(helpers.math.mul(4, 2));        // 8
console.log(helpers.greet.hello("Aanchal")); // Hello, Aanchal!

