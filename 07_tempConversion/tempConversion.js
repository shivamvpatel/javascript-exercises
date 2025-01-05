const convertToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit - 32)*5)/9;
  if (Number.isInteger(celsius)) {
    return celsius;
  } else {
  return parseFloat(celsius.toFixed(1));
  }
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 1.8) + 32;
  if (Number.isInteger(fahrenheit)) {
    return fahrenheit;
  } else {
  return parseFloat(fahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
