const reverseString = function(string) {
  let finalString = "";

  finalString = string
    .split("")
    .reverse()
    .join("");

  return finalString;
};

// Do not edit below this line
module.exports = reverseString;
