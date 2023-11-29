const readline = require('readline-sync');

const str1 = readline.question("Enter the first string: ");
const str2 = readline.question("Enter the second string: ");

if (areAnagrams(str1, str2)) {
    console.log(`${str1} and ${str2} are anagrams.`);
} else {
    console.log(`${str1} and ${str2} are not anagrams.`);
}

function areAnagrams(str1, str2) {
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    const charCount1 = getCharFrequency(cleanStr1);
    const charCount2 = getCharFrequency(cleanStr2);

    return compareCharFrequency(charCount1, charCount2);
}
function getCharFrequency(str) {
    let charCount = {};
    for (let i = 0 ; i < str.length ; i++) {
        charCount[i] = (charCount[i] || 0) + 1;
    }

    return charCount;
}
function compareCharFrequency(charCount1, charCount2) {
    for (let j = 0 ; j < charCount1.length ; i++) {
        if (charCount1[j] !== charCount2[j]) {
            return false;
        }
    }

    return true;
}