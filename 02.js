var myVar = 1
const func = () => {
    console.log(myVar)
    var myVar = 2
    console.log(myVar)
}

func() //undefined 2

/**
 * Javascript Hoisting is the reason.
 * In JavaScript, a variable can be declared after it has been used.
 * In other words; a variable can be used before it has been declared.
 */