let animals = ["cow", "dog", "cat", "horse", "lion"];
// looping through every element in the animal
for (let index = 0; index < animals.length; index++) {
    console.log(animals[index]);
}
let numbers = [7, 2, 3, 8, 11, 1, 4, 15, 10];
// declare an empty list
evenNumbers = [];
// loop through the elements in the numbers list
for (let index = 0; index < numbers.length; index++) {
    // check to see if a number is even
    if (numbers[index] % 2 === 0) {
        // add the even number to the evenNumbers list 
        evenNumbers.push(numbers[index]);
    }
}
// this will print [2, 8, 4, 10]
console.log(evenNumbers);

let numbers = [7, 2, 3, 8, 11, 1, 4, 15, 10];

let evenNumbers = [];

// declare a function 
const getEvenNumbers = function (number) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}
// call the forEach method on the numbers array with the function as the argument
numbers.forEach(getEvenNumbers);
console.log(evenNumbers);


let numbers = [7, 2, 3, 8, 11, 1, 4, 15, 10];
const doubleNumbers = function (list) {
    // square each element of the array and store it in the result variable
    let result = numbers.forEach(number => {
        return number ** 2;
    });
    return result;
}
console.log(doubleNumbers(numbers)); // this will return undefined

let numbers = [7, 2, 3, 8, 11, 1, 4, 15, 10];
const doubleNumbers = function (list) {
    // square each element of the array and store it in the result variable
    numbers.forEach(number => {
        //print the result of the operation
        console.log(number ** 2);
    });
}
console.log(doubleNumbers(numbers)); // this will print the squared value of each element in the array

let numbers = [7, 2, 3, 8, 11, 1, 4, 15, 10];
const doubleNumbers = function (list) {
    // square each element of the array and store it in the result variable
    let result = numbers.map(number => {
        return number ** 2;
    });

    return result;
}
console.log(doubleNumbers(numbers)); // this will return [ 49, 4, 9, 64, 121, 1, 16, 225, 100 ]

let numbers = [7, 2, 3, 8, 11, 1, 4, 15, 10];

const doubleNumbers = function (list) {
    // declare an empty array
    let newArray = [];
    // loop through every element in the list array
    for (let index = 0; index < list.length; index ++){
        // append the element that has been squared to newArray 
        newArray.push(list[index] ** 2);
    }
    return newArray;
}
console.log(doubleNumbers(numbers)); // this will return [ 49, 4, 9, 64, 121, 1, 16, 225, 100 ]


let numbers = [7, 2, 3, 8, 11, 1, 4, 15, 10];
const squareNumbers = function (list) {
    // square each element of the array and store it in the result variable
    let result = numbers.map(number => {
        return number ** 2;
        //log to the console every element of the new array
    }).forEach(element => {
        console.log(element);
    });

    return result;
}
// this will log every element in the numbers array which is now squared
squareNumbers(numbers);

let numbers = [7, 2, 3, 35, 11, 1, 4, 15, 10];
// function that checks mulitples of 5
const getMultiplesOfFive = function (list) {
    return list.filter(number => {
        // check to see wether a number is a multiple of 5
        return number % 5 === 0;
    });
}
// this will return [ 35, 15, 10 ]
console.log(getMultiplesOfFive(numbers));