const assert = require('chai').assert;
const flatten = require('../flatten');
const testArr = [1, 2, [3, 4], 5, [6]];
const result = flatten(testArr).length;

describe('#flatten', () => {

  it('should return [1, 2, 3, 4, 5, 6] when recieved [1, 2, [3, 4], 5, [6]]', () => {

    assert.deepEqual(flatten(testArr), [1, 2, 3, 4, 5, 6]);
  });

  it('should make sure the original array still has 6 elements', () => {

    assert.deepEqual(result, 6);
  });

});
