const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!