function arrayFromValue(item) {
    return
      [item];
  }
  
  console.log(arrayFromValue(10)) // undefined

  /**
   * It’s easy to miss the new line between the return keyword and [item] expression.
   * However, this newline makes the JavaScript automatically insert a semicolon between return and [item] expression.
   * 
   * Here’s an equivalent code with the semicolon inserted after return:
   * function arrayFromValue(item) {
   *    return;
   *    [item];
   * }
   * arrayFromValue(10); // => undefined
   * 
   * return; inside the function makes it return undefined.
   * So arrayFromValue(10) evaluates to undefined.
   */