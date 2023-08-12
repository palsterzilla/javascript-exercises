const fibonacci = function(num) {
  let number = num;
  if (num != Number) {
    number = Number(num)
  }

  let n1 = 0, n2 = 1, nextTerm;
  if (number === 1 || number === 0) {
    return 1;
  } else if (number < 0) {
    return "OOPS"
  } else {
    for (let i = 2; i <= number; i++) {
     nextTerm = n1 + n2;
     n1 = n2
     n2 = nextTerm
    }
  }

  return nextTerm
};

// Do not edit below this line
module.exports = fibonacci;
