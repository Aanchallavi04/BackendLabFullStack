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
