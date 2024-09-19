// Answer 1 :
function calculateDifference(a, b) {
    return a - b;
}
const num1 = 10;
const num2 = 5;
const result = calculateDifference(num1, num2);

console.log(`The difference between ${num1} and ${num2} is ${result}.`);

//Answer 2:

function isOdd(number) {
    return number % 2 !== 0;
}

const numToCheck = 8;
const res = isOdd(numToCheck);

if (res) {
    console.log(`${numToCheck} is odd.`);
} else {
    console.log(`${numToCheck} is not odd.`);
}

//Answer 3 :

function findMin(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return undefined; 
    }

    let min = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]; 
        }
    }

    return min;
}
const myArr = [5, 2, 9, 1, 7];
const minValue = findMin(myArr);

if (minValue !== undefined) {
    console.log(`The smallest number in the array is: ${minValue}`);
} else {
    console.log("The array is empty or invalid.");
}

//Answer 4 :

function filterEvenNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        return []; // Return an empty array for invalid input
    }

    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    return evenNumbers;
}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
const evenValues = filterEvenNumbers(myArray);

console.log("Even numbers in the array:");
console.log(evenValues);

// Answer 5 :

function sortArrayDescending(numbers) {
    if (!Array.isArray(numbers)) {
        return []; 
    }
    const sortedArray = numbers.slice().sort((a, b) => b - a);

    return sortedArray;
}
const myNumbers = [5, 2, 9, 1, 7];
const sortedDescending = sortArrayDescending(myNumbers);

console.log("Array sorted in descending order:");
console.log(sortedDescending);

// Answer 6 :

function lowercaseFirstLetter(inputString) {
    if (typeof inputString !== 'string' || inputString.length === 0) {
        return inputString; // Return unchanged for invalid input
    }

    const firstLetterLowercased = inputString.charAt(0).toLowerCase();
    const restOfString = inputString.slice(1);

    return firstLetterLowercased + restOfString;
}


const myString = "HELLO";
const Answer = lowercaseFirstLetter(myString);

console.log(`Modified string: ${Answer}`)


// Answer 7 :

function countVowels(inputString) {
    const lowerCaseString = inputString.toLowerCase();

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // Initialize the count
    let vowelCount = 0;

    for (const char of lowerCaseString) {
        if (vowels.has(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}
const myStr = "Hello, World! How are you?";
const value = countVowels(myStr);

console.log(`Number of vowels in the string: ${value}`);

// Answer 8 :

function findAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return undefined;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    return average;
}
const myNum = [10, 20, 30, 40, 50];
const avg = findAverage(myNum);

if (avg !== undefined) {
    console.log(`The average of the numbers is: ${avg}`);
} else {
    console.log("The array is empty or invalid.");
}
