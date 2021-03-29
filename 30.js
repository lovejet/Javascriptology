console.log(!!null); //false
console.log(!!undefined); //false
console.log(!!''); //false
console.log(!!0); //false
console.log(!!NaN); //false
console.log(!!' '); //true
console.log(!!{}); //true
console.log(!![]); //true
console.log(!!1); //true
console.log(!![].length); //false

/**
 *  The Double NOT operator or !! coerces the value on the right side into a boolean. basically it's a fancy way of converting a value into a boolean.
 */