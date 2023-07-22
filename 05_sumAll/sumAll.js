const sumAll = function(...args) {
  let finalNum = 0;

  for (let i = args[0]; i <= args[1]; i++) {
    finalNum += i;
  }
  
  return finalNum
};

// Do not edit below this line
module.exports = sumAll;
