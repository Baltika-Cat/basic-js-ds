const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootVar = null;
    this.midValue = null;

  }

  root() {
    return this.rootVar;
  }

  add(data) {
    let newNode = new Node(data);
    console.log(newNode)
    if (this.rootVar === null) {
      this.rootVar = newNode;
      console.log('this root ' + this.rootVar)
    } else {
      this.compareNodes(this.rootVar, newNode);
    }
    return this;
  }
    // remove line with error and write your code here

  has(data) {
    let result = this.searchNodes(this.rootVar, data);
    console.log(result)
    return result !== null;
    // remove line with error and write your code here
  }

  find(data) {
    return this.searchNodes(this.rootVar, data);
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  compareNodes(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
        console.log('left ' + node.left)
      } else {
        this.compareNodes(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
        console.log('right ' + node.right.data)
      } else {
        this.compareNodes(node.right, newNode);
      }
    } 
  }

  searchNodes(node, data) {
    if (node === null || data === node.data) {
      this.midValue = node;
      console.log(this.midValue)
    } else if (data < node.data) {
      console.log(data + ' is smaller than ' + node.data)
      this.searchNodes(node.left, data);
    } else if (data > node.data) {
      console.log(data + ' is bigger than ' + node.data)
      this.searchNodes(node.right, data);
    }
    return this.midValue;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  BinarySearchTree
};

/*const tree = new BinarySearchTree();
      tree.add(2);
      tree.add(3);
      tree.add(4);
      console.log(tree)
      console.log(tree.root())
      console.log(tree.has(5));
      console.log(tree.find(5).data)*/