const add = function(a, b) {
	return a + b;
};

const subtract = function(a ,b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  };
	return sum;
};

const multiply = function() {
  return Array.from(arguments).reduce((acc, curr) => acc * curr)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
