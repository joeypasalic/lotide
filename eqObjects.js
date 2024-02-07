const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }


  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);


  if (keys1.length !== keys2.length) {

    return false;
  }

  for (const key in keys1) {

    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;

      } else if (obj1[key] !== obj2[key]) {

        return false;
      }
    }
  }
  return true;
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEquals(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEquals(eqObjects(shirtObject, longSleeveShirtObject), false); // => false
