export function kelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;

  // round to 1 decimal place
  return Math.round(celsius * 10) / 10;
}
