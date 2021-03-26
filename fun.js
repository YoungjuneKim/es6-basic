// First Class Functions, Higher Order Functions & Callback Functions -----------------
// First Class Functions
var add = (x, y) => x + y;
var subtract = (x, y) => x - y;
var multiply = (x, y) => x * y;

function numbers(fn, x, y) {
    return fn(x, y);
}
var addResult = numbers(add, 3, 2);
var subtractResult = numbers(subtract, 3, 2);
var multiplyResult = numbers(multiply, 3, 2);

console.log("addResult : ", addResult);
console.log("subtractResult : ", subtractResult);
console.log("multiplyResult : ", multiplyResult);
console.log("");


//Higher Order Functions
var nums = [1, 2, 3, 4, 5];
//var nums = [1, 3, 5, 7, 9];
var numsTimesTwo = nums.map(num => num * 2);
console.log("numsTimesTwo1 : ", numsTimesTwo);

var multiplyByTwo = num => num * 2;
var numsTimesTwo = nums.map(multiplyByTwo);
console.log("numsTimesTwo2 : ", numsTimesTwo);
// nums.map(multiplyByTwo) 
// would be exactly the same as
// nums.map(num => num * 2)

var oddNumbers = nums.filter(num => num % 2 !== 0);
console.log("oddNumbers1 : ", oddNumbers);
var isOdd = num => num % 2 !== 0;
var oddNumbers = nums.filter(isOdd);
console.log("oddNumbers2 : ", oddNumbers);

if (nums.every(isOdd)) {
    console.log('Yes, they are all odd!');
} else {
    console.log('Nope, they are not all odd!');
}

if (nums.some(isOdd)) {
    console.log('At least one of these numbers are odd!');
} else {
    console.log('None of these numbers are odd!');
}