const sumAll = function(...args) {
  if (args.some(x => x < 0 || typeof x != "number")) {
    return "ERROR"
  } else if (args[1] < args[0]) {
    args.sort()
  }

  let finalNum = 0;

  for (let i = args[0]; i <= args[1]; i++) {
    finalNum += i;
  }
  
  return finalNum
};

// Do not edit below this line
module.exports = sumAll;
