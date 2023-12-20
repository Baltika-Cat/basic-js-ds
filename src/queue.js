const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.currentElement = null;
    this.array = [];
  }
  getUnderlyingList() {
    for (let i = 0; i < this.array.length; i += 1) {
      this.array[i].next = i < this.array.length - 1 ? this.array[i + 1] : null;
    }
    if (this.array[0]) {
      this.currentElement = this.array[0];
    }
    return this.currentElement;
    // remove line with error and write your code here
  }

  enqueue(value) {
    this.array.push(new ListNode(value));
    // remove line with error and write your code here
  }

  dequeue() {
    return this.array.shift().value;
    // remove line with error and write your code here
  }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = {
  Queue
};


/*const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(2);
queue.enqueue(0);
console.log(queue.dequeue());
console.log(queue.getUnderlyingList());*/