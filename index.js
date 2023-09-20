// index.js
const add = require('./add');
const sub = require('./sub');
const div = require('./div');
const mult = require('./mult');

module.exports = { add, sub, div, mult };

const calculator = require('./calculator-module');

console.log('Addition:', calculator.add(5, 3));
console.log('Subtraction:', calculator.sub(5, 3));
console.log('Division:', calculator.div(6, 2));
console.log('Multiplication:', calculator.mult(5, 3));
