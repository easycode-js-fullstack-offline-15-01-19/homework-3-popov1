// -------------------------- Home work - 3 --------------------------
// -------------------------- Попов Евгений --------------------------

// Task 1 - Switch case.
// Write in the switch case the following condition:
/**
 *  if (a === ‘block’) {
        console.log(‘block’)
    } else if (a === ‘none’) {
        console.log(‘none’)
    } else if (a === ‘inline’) {
        console.log(‘inline’)
    } else {
        console.log(‘other’)
    }
*/

let a = 'test';

switch(a) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
        break;
}
// result - other

// Task 2.
// Of the tasks with the conditional if else operator, perform 
// tasks 1, 2 and 3 as a ternary operator.

// Task 2.1
let value = 'visible';
value = value === 'hidden' ? 'visible' : 'hidden'; //  value === 'hidden';

// Task 2.2
let value2 = 0;

value2 = value2 === 0 ? 1 
    : value2 < 0 ? 'less then zero' 
        : value2 * 10;

console.log(value2);
// result - 1

// Task 2.3
let car = {
    name      : 'Lexus',
    age       : 10,
    create    : 2008,
    needRepair: false
}

car.needRepair = car.age > 5 ? true : false;
if (car.needRepair) {
    console.log('Need Repair');
}

// Cycles
// Task 3
/**
 * On the basis of the string “i am in the easycode” make a new line where the first letters of
 *  each word will be in upper case. Use for or while.
 */

let testString = 'i am in the easycode';
let newString  = '';
let progress   = 0;

while (progress < testString.length) {
    if ((testString[progress - 1]) === " " || (progress === 0 )) {
        newString += testString[progress].toUpperCase();
    } else {
        newString += testString[progress];
    }
    progress++;
}
// result - I Am In The Easycode

// Task 2
/**
 * The string “tseb eht ma i” is given. Using cycles,
 * make a string-flip (that is, the last letter becomes the first,
 * the penultimate - the second, etc.).
 */

let testString2 = 'tseb eht ma i';
let newString2  = '';
let progress2   = testString2.length;

while (progress2) {
    --progress2;
    newString2 += testString2[progress2];
}
// result - i am the best
 
// Task 3
/**
 * Factorial - the product of all natural numbers from 1 to n
 * inclusive: 3! = 3 * 2 * 1, 5! = 5 * 4 * 3 * 2 * 1. 
 * Using cycles, calculate the factorial of the number 10. Use for.
 */

let factorialresult = 1;

for (let i = 10; i > 1; i--) {
    factorialresult *= i;
}
// result - 3628800

// Task 4
/** 
 * On the basis of the string “JavaScript is a pretty good language”,
 * make a new line, where each word begins with a capital letter,
 * and spaces are removed. Use for.
 */

let testString3 = 'JavaScript is a pretty good language';
let newString3  = '';

for (let i = 0, max = testString3.length; i < max; i++) {
    if ((testString3[i - 1]) === " " || (i === 0 )) {
        newString3 += testString3[i].toUpperCase();
    } else {
        if (testString3[i] !== " ") {
            newString3 += testString3[i];
        }
    }
}
// result - JavaScriptIsAPrettyGoodLanguage

// Task 5
/**
 * Find all the odd numbers in the array 
 * from 1 to 15 inclusive and output them to the console.
 *  Array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].
 *  Use for of.
 */
let startArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let newArray   = [];

for (elem of startArray) {
    if (elem % 2 > 0) {
        newArray.push(elem);
    }
}
// result  - newArray [1, 3, 5, 7, 9, 11, 13, 15]

// Task 6
/**
 *  object:
 *  let list = {
 *    name: ‘denis’,
 *    work: ‘easycode’,
 *    age: 29
 *  }
 *  Go through the object and if the value of the property is a string,
 *  then rewrite it all in upper case.
 *  Use for in.
 */

let list = {
        name: 'denis',
        work: 'easycode',
        age : 29
}

for (let item in list) {
    if (typeof(list[item]) === 'string') {
        list[item] = list[item].toUpperCase();
    }
}

/**
 * result
 * let list = {
 *      age: 29
 *      name: "DENIS"
 *      work: "EASYCODE"
 * }
 */
