// Global (convertFahrenheitToCelsius)
  // Local (temp)
    // Local (isFreezing)

let convertFahrenheitToCelsius = function (temp) {
    if (temp <= 32) {
        let isFreezing = true;
    }
    return ((temp - 32) * 5 / 9).toFixed(2);
}
