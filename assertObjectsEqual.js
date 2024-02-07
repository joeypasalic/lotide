const eqObjects = function(obj1, obj2) {

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);


  if (keys1.length !== keys2.length) {

    return false;
  }



  for (const key of keys1) {

    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {

      return false;
    }
  }

  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);

  } else {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  }

};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, longSleeveShirtObject); // => false
assertObjectsEqual(shirtObject, longSleeveShirtObject); // => false should fail

