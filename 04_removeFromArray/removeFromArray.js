const removeFromArray = function(array, removeFromArray) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
      if (array[i] !== removeFromArray) {
        newArray.push(array[i]);
      }
    }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
