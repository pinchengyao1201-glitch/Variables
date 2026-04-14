// ============================================
//  Unit 8.1 – Variables & Math
// ============================================
//  Complete each function below by following
//  the STEP comments. Do NOT rename the functions.
// ============================================

function greeting() {
  let name = prompt("What is your name?");
  let color = prompt("What is your favorite color?");
  alert("Hello, " + name + "! Your favorite color is " + color + ".");
}

function convertTemp() {
  let input = prompt("Enter temperature in Fahrenheit");
  let fahrenheit = parseFloat(input);
  let celsius = (fahrenheit - 32) * 5 / 9;
  alert("Temperature in Celsius: " + celsius.toFixed(2));
}

function circleArea() {
  let input = prompt("Enter circle radius");
  let radius = parseFloat(input);
  const pi = Math.PI;
  let area = pi * radius * radius;
  alert("Area of the circle: " + area.toFixed(2));
}

function numberInfo() {
  let input = prompt("Enter a whole number");
  let num = parseInt(input);
  let square = num ** 2;
  let remainder = num % 3;
  alert("Square: " + square + ", Remainder: " + remainder);
}
