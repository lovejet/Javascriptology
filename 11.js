// Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("level"));                   // true
console.log(isPalindrome("levels"));                  // false
console.log(isPalindrome("A car, a man, a maraca"));  // true