const palindromes = function (string) {
  let newStr = string
                .replace(/[\W\s]+/g,"")
                .toLowerCase()
                
  let revStr = newStr
                .split("")
                .reverse()
                .join("")
  
  if (newStr === revStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
