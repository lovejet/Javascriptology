//Write a sum method which will work properly when invoked using either syntax below.
// console.log(sum(2,3));   // 5
// console.log(sum(2)(3));  // 5

function sum(x, y) {
    if (y !== undefined) {
      return x + y;
    } else {
      return function(y) { return x + y; };
    }
  }

console.log(sum(2,3));   // 5
console.log(sum(2)(3));  // 5

/**
 * When a function is invoked, JavaScript does not require the number of arguments to match the number of arguments in the function definition.
 * If the number of arguments passed exceeds the number of arguments in the function definition, the excess arguments will simply be ignored.
 * On the other hand, if the number of arguments passed is less than the number of arguments in the function definition, the missing arguments will have a value of undefined when referenced within the function.
 * So, in the above example, by simply checking if the 2nd argument is undefined, we can determine which way the function was invoked and proceed accordingly.
 */