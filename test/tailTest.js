const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');


const words = ["Yo Yo", "Lighthouse", "Labs"];
const low = [];
const single = ["Hey"];


assertEqual(tail(low).length, 0);
assertEqual(tail(single).length, 0);


tail(words); // no need to capture the return value since we are not checking it
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse"); // first element of returned array should be second element of argument array
assertEqual(tail(words)[1], "Labs");
