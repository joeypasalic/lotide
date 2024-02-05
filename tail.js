// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅✅✅ assertion passed: ${actual} === ${expected}`);
  
  } else {

    console.log(`🛑🛑🛑 assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array && array.length > 1) {
    return array.slice(1);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
