const clothes = ['jacket', 't-shirt'];

console.log(clothes[0]) // jacket

clothes.length = 0;
console.log(clothes[0]) // undefined

/**
 * Reducing the value of the length property has the side-effect of deleting own array elements whose array index is between the old and new length values.
 * As result when JavaScript executes clothes.length = 0, all clothes items are deleted.
 * clothes[0] is undefined, because clothes array has been emptied.
 */