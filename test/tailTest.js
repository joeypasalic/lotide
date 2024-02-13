const assert = require('chai').assert;
const tail = require('../tail.js');
const words = ["Yo Yo", "Lighthouse", "Labs"];
const low = [];
const single = ["Hey"];

describe('#tail', () => {

  it("returns an empty array when given an empty array", () => {

    assert.deepEqual(tail(low), []);
  });

  it("returns an empty array when given a one word array", () => {

    assert.deepEqual(tail(single), []);
  });

  it("returns the second element of argument array as the first", () => {
    assert.deepEqual(tail(words)[0], "Lighthouse");
  });

  it("returns the third element of argument array as the second", () => {
    assert.deepEqual(tail(words)[1], "Labs");
  });

  it("makes sure the original array still has 3 elements", () => {
    assert.equal(words.length, 3);
  });


});
