const flatten = function(testArr){

  let flattenedArr = [];

  testArr.forEach(item => {
    if (Array.isArray(item)) {
      flattenedArr = flattenedArr.concat(flatten(item));
    } else {
      flattenedArr.push(item);
    }
  });

  return flattenedArr;
};

module.exports = flatten;
