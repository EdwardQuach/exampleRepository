/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array#map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/

<<<<<<< HEAD
let myMap = function(arr) {

=======
let myMap = function(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let res = cb(num, i, arr);
        newArr.push(res);
    }
    return newArr;
>>>>>>> 0def8baa8feb3c74e7005e2449ffca2531fe70c4
};


let result = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result);



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myMap;
