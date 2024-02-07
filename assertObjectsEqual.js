const eqObjects = function(obj1, obj2) {

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);


  if (keys1.length !== keys2.length) {

    return false;
  }

  for (const key of keys1) {

    if (obj1[key] !== obj2[key]) {

      return false;
    }
  }

  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);

  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  }

};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false
assertObjectsEqual(eqObjects(shirtObject, longSleeveShirtObject), true); // => false should fail

