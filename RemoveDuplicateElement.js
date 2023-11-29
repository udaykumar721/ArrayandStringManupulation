const readline = require('readline-sync');

const str1 = readline.question('Enter a string: ',) 
    const result = removeDuplicates(str1);
    console.log(`String after removing duplicates: ${result}`);

function removeDuplicates(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) === -1) {
            result = result + str[i];
            }
    }
    return result;
}    