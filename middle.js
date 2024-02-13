const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {

  if (arr.length < 3) {
    return [];
  }

  const middleObj = [];
  const midIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {

    middleObj.push(arr[midIndex - 1], arr[midIndex]);
  
  } else {

    middleObj.push(arr[midIndex]);
  }
  return middleObj;

};

module.exports = middle;
