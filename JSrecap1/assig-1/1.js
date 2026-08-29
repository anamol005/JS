const celsius = Number(prompt('Enter temperature in Celsius:'));

const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

document.write('<p>Celsius: ' + celsius + ' °C</p>');
document.write('<p>Fahrenheit: ' + fahrenheit + ' °F</p>');
document.write('<p>Kelvin: ' + kelvin + ' K</p>');
