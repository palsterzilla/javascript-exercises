const removeFromArray = function(array, ...removeFromArray) {

  return array.filter(x => !removeFromArray.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
