"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// 1. isTrue
function isTrue(input) {
    return input === true;
}
// 2. isFalse
function isFalse(input) {
    return input === false;
}
// 3. not
function not(input) {
    return !input;
}
// 4. addOne
function addOne(input) {
    return ++input;
}
// 5. isEven
function isEven(input){
    let num = parseInt(input)
    return num % 2 === 0;
}
// 6. isIdentical
function isIdentical(inputOne, inputTwo) {
    return inputOne === inputTwo
}
// 7. isEqual
function isEqual(inputOne, inputTwo) {
    return inputOne == inputTwo
}
// 8. or
function or(inputOne, inputTwo) {
    return inputOne || inputTwo
}
// 9. and
function and(inputOne, inputTwo) {
    return inputOne && inputTwo
}
// 10. concat
function concat(inputOne, inputTwo) {
    return (inputOne.toString() + inputTwo.toString())
}