const obj = {
    method(){
    console.log(this)
    }
}
obj.method() // { method: [Function: method] }

const method = obj.method
method() /*
Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function]
  }
}
*/

obj.method.call({}) // {}

/**
 * 1st: this has function scope
 * 2nd: this has global scope
 * 3rd: this is {} that is defined as the 1st param
 */