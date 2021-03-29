console.log(false == '0') // true
console.log(false === '0') // false

/**
 * In JavaScript, there are two sets of equality operators.
 * The triple-equal operator === behaves like any traditional equality operator would: evaluates to true if the two expressions on either of its sides have the same type and the same value.
 * The double-equal operator, however, tries to coerce the values before comparing them.
 * It is therefore generally good practice to use the === rather than ==. The same holds true for !== vs !=.
 */