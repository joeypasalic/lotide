// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅✅✅ assertion passed: ${actual} === ${expected}`);
  
  } else {

    console.log(`🛑🛑🛑 assertion failed: ${actual} !== ${expected}`);
  }
}


const head = function(array) {
  if (array && array.length > 0) {
    return array[0];
  }
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

