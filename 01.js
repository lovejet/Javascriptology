const func1 = () => {
    for(let i = 0; i < 5; i ++) {
        setTimeout(function() { console.log(i); }, i * 1000 );
    }
}

const func2 = () => {
    for (var i = 0; i < 5; i++) {
        setTimeout(function() { console.log(i); }, i * 1000 );
    }
}

//func1() //0 1 2 3 4 
func2() //5 5 5 5 5

/**
 * The code sample shown will not display the values 0, 1, 2, 3, and 4 as might be expected; rather, it will display 5, 5, 5, 5, and 5.
 * The reason for this is that each function executed within the loop will be executed after the entire loop has completed and all will therefore reference the last value stored in i, which was 5.
 * Closures can be used to prevent this problem by creating a unique scope for each iteration, storing each unique value of the variable within its scope, as follows:
 * for (var i = 0; i < 5; i++) {
 *  (function(x) {
 *     setTimeout(function() { console.log(x); }, x * 1000 );
 *  })(i);
 * }
 */