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

let evenNumbers = [];

numbers.forEach(number => {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    } 
});
console.log(evenNumbers);