//for statement loops through the properties of an Object:

for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }

// example 2
// i is the index
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 2;
let len = cars.length;
let text = "";

for (; i < len; i++) {
  text += cars[i] + "<br>";
}