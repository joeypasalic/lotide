const assert = require('chai').assert;
const middle = require('../middle');
const testArr1 = [1];
const testArr2 = [1, 2, 3, 4];
const testArr3 = [1, 2, 3];

describe('#middle', () => {

  it("returns an empty array when receiving 1 digit array", () => {

    assert.deepEqual(middle(testArr1), []);
  });

  it("returns the middle 2 numbers when given an array of even numbers", () => {

    assert.deepEqual(middle(testArr2), [2, 3]);
  });

  it("returns the one middle number when given an array of odd numbers", () => {

    assert.deepEqual(middle(testArr3), [2]);
  });

  
});
