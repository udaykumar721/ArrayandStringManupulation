var readline = require("readline-sync");
const str1 = readline.question('Enter elements of the array (Comma-separated):');
const elements = str1.split(',').map(Number);
console.log('Original Array:',elements);
const resultArray = swapAdjacentElement(elements);
console.log('Array after squaring and swapping adjacent elements:', resultArray);
function swapAdjacentElement(arr) {   
    for (let i = 0; i < arr.length - 1; i += 2) {       
        const adjacentA = arr[i] ** 2;
        const adjacentB = arr[i + 1] ** 2;
        arr[i] = adjacentB;
        arr[i + 1] = adjacentA;
    }
    return arr;
}