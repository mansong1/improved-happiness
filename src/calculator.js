function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function modulo(a, b) {
    return a % b;
}
function power(a, b) {
    return Math.pow(a, b);
}
function factorial(a) {
    if (a === 0) {
        return 1;
    }
    return a * factorial(a - 1);
}
function square(a) {
    return Math.pow(a, 2);
}
function cube(a) {
    return Math.pow(a, 3);
}
function squareRoot(a) {
    return Math.sqrt(a);
}
function cubeRoot(a) {
    return Math.cbrt(a);
}
function sin(a) {
    return Math.sin(a);
}
function cos(a) {
    return Math.cos(a);
}
function tan(a) {
    return Math.tan(a);
}
function asin(a) {
    return Math.asin(a);
}
function acos(a) {
    return Math.acos(a);
}
function atan(a) {
    return Math.atan(a);
}
function sinh(a) {
    return Math.sinh(a);
}
function cosh(a) {
    return Math.cosh(a);
}
function tanh(a) {
    return Math.tanh(a);
}
function asinh(a) {
    return Math.asinh(a);
}
function acosh(a) {
    return Math.acosh(a);
}
function atanh(a) {
    return Math.atanh(a);
}
function log(a) {
    return Math.log(a);
}
function ln(a) {
    return Math.log(a);
}
function log10(a) {
    return Math.log10(a);
}
function lg(a) {
    return Math.log10(a);
}
function log2(a) {
    return Math.log2(a);
}
function exponent(a) {
    return Math.exp(a);
}
function average(a, b) {
    return (a + b) / 2;
}
function max(a, b) {
    return Math.max(a, b);
}
function min(a, b) {
    return Math.min(a, b);
}
function absolute(a) {
    return Math.abs(a);
}
function round(a) {
    return Math.round(a);
}
function floor(a) {
    return Math.floor(a);
}
function ceiling(a) {
    return Math.ceil(a);
}
function median(a, b) {
    return (a + b) / 2;
}
function mode(a, b) {
    return a > b ? a : b;
}
function range(a, b) {
    return b - a;
}
function standardDeviation (a, b) {
    return Math.sqrt((a - b) ** 2);
}
function variance (a, b) {
    return (a - b) ** 2;
}
function absoluteValue(a) {
    return Math.abs(a);
}

module.exports.median = median;
module.exports.mode = mode;
module.exports.range = range;
module.exports.standardDeviation = standardDeviation;
module.exports.variance = variance;
module.exports.absoluteValue = absoluteValue;
module.exports.add = add;
module.exports.average = average;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.modulo = modulo;
module.exports.divide = divide;
module.exports.power = power;
module.exports.log = log;
module.exports.atanh = atanh;
module.exports.squareRoot = squareRoot;
module.exports.log10 = log10;
module.exports.lg = lg;
module.exports.ln = ln;
module.exports.factorial = factorial;
module.exports.square = square;
module.exports.log2 = log2;
module.exports.cube = cube;
module.exports.cubeRoot = cubeRoot;
module.exports.sin = sin;
module.exports.cos = cos;
module.exports.tan = tan;
module.exports.asin = asin;
module.exports.acos = acos;
module.exports.sinh = sinh;
module.exports.cosh = cosh;
module.exports.tanh = tanh;
module.exports.asinh = asinh;
module.exports.acosh = acosh;
module.exports.atan = atan;
module.exports.atanh = atanh;
module.exports.factorial = factorial;
module.exports.exponent = exponent;
module.exports.floor = floor;
module.exports.round = round;
module.exports.max = max;
module.exports.min = min;
module.exports.absolute = absolute;
module.exports.average = average;
module.exports.ceiling = ceiling;