const convertToCelsius = function(val) {
  let convertVal = (val - 32) * 5/9
  let finalVal = Number(convertVal.toFixed(1))

  return finalVal
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
