const calculator = require('./calculator');
const x = 13;
const y = 5;

test('Add numbers using the add method', () => {
     expect(calculator.add(x, y)).toBe(18)
});
test('Subtract numbers using the subtract method', () => {
     expect(calculator.subtract(x, y)).toBe(8)
});
test('Multiply numbers using the multiply method', () => {
     expect(calculator.multiply(x, y)).toBe(65)
});
test('Divide numbers using the divide method', () => {
     expect(calculator.divide(x, y)).toBe(2.6)
});
test('Find the remainder of dividing numbers using the modulo method', () => {
     expect(calculator.modulo(x, y)).toBe(3)
});
test('Find the square root of a number using the squareRoot method', () => {
    expect(calculator.squareRoot(x)).toBe(3.605551275463989)
});
test('Find the square of a number using the square method', () => {
    expect(calculator.square(x)).toBe(169)
});
test('Find the cube of a number using the cube method', () => {
    expect(calculator.cube(x)).toBe(2197)
});
test('Find the cube of a number using the cube method', () => {
    expect(calculator.cube(y)).toBe(125)
});
test('Find the factorial of a number using the factorial method', () => {
    expect(calculator.factorial(x)).toBe(6227020800)
});
test('Find the average of a number using the average method', () => {
    expect(calculator.average(x, y)).toBe(9)
});
test('Find the median of a number using the median method', () => {
    expect(calculator.median(x, y)).toBe(9)
});
test('Find the mode of a number using the mode method', () => {
    expect(calculator.mode(x, y)).toBe(13)
});
test('Find the range of a number using the range method', () => {
    expect(calculator.range(x, y)).toBe(-8)
});
test('Find the standard deviation of a number using the standardDeviation method', () => {
    expect(calculator.standardDeviation(x, y)).toBe(8)
});
test('Find the variance of a number using the variance method', () => {
    expect(calculator.variance(x, y)).toBe(64)
});
test('Find the absolute value of a number using the absoluteValue method', () => {
    expect(calculator.absoluteValue(x)).toBe(13)
});
test('Find the ceiling of a number using the ceiling method', () => {
    expect(calculator.ceiling(x)).toBe(13)
});
test('Find the floor of a number using the floor method', () => {
    expect(calculator.floor(x)).toBe(13)
});
test('Find the exponent of a number using the exponent method', () => {
    expect(calculator.exponent(x)).toBe(442413.3920089205)
});
test('Find the square root of a number using the squareRoot method', () => {
    expect(calculator.squareRoot(y)).toBe(2.23606797749979)
});
test('Find the square of a number using the square method', () => {
    expect(calculator.square(y)).toBe(25)
});