const map = function(arrToMap, callback) {
  const results = [];

  for (let item of arrToMap) {

    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
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

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
