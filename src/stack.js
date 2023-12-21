const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
  }
  
  push(element) {
    this.arr.splice(this.arr.length, 0, element);
    // remove line with error and write your code here
  }

  pop() {
    let el = this.arr[this.arr.length - 1];
    this.arr.splice(this.arr.length - 1, 1);
    return el;
    // remove line with error and write your code here
  }

  peek() {
    return this.arr[this.arr.length - 1];
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};

const stack = new Stack();
    stack.push(5);
    stack.push(6);
    stack.push(7);
    console.log(stack.peek())
    console.log(stack.pop())
    console.log(stack.peek())
