// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {

      return false;

    }


  }
  return true;

};

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3]));

