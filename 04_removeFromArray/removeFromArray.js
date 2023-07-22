const removeFromArray = function(array, ...removeFromArray) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < removeFromArray.length; j++) {
      if (array[i] !== removeFromArray[j]) {
        newArray.push(array[i]);
      }
    }
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
