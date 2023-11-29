const readline = require('readline-sync');

let str1 = readline.question('Enter elements of the array (comma-separated): ');

const elements = str1.split(',').map(Number);
if (elements.every(Number.isFinite)) {
    const result = findMaxAndMin(elements);

    console.log('Array Elements:', elements);
    console.log('Maximum Element In An Array:', result.max);
    console.log("Minimum Element In An Array:",result.min);
} else {
    console.log('Invalid input. Please enter valid numbers.');
}
function findMaxAndMin(arr) {
    if (arr.length === 0) {
        return null; 
    }
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length-1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}