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
    this.minValue = null;
    this.maxValue = null;

  }

  root() {
    return this.rootVar;
  }

  add(data) {
    let newNode = new Node(data);
    //console.log(newNode)
    if (this.rootVar === null) {
      this.rootVar = newNode;
      //console.log('this root ' + this.rootVar)
    } else {
      this.compareNodes(this.rootVar, newNode);
    }
    return this;
  }
    // remove line with error and write your code here

  has(data) {
    let result = this.searchNodes(this.rootVar, data);
    //console.log(result)
    return result !== null;
    // remove line with error and write your code here
  }

  find(data) {
    return this.searchNodes(this.rootVar, data);
    // remove line with error and write your code here
  }

  remove(data) {
    this.rootVar = this.removeNodes(this.rootVar, data);
    // remove line with error and write your code here
  }

  min() {
    return this.rootVar !== null ? this.minSearch(this.rootVar).data : null;
    // remove line with error and write your code here
  }

  max() {
    return this.rootVar !== null ? this.maxSearch(this.rootVar).data : null;
    // remove line with error and write your code here
  }

  compareNodes(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
        //console.log('left ' + node.left)
      } else {
        this.compareNodes(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
        //console.log('right ' + node.right.data)
      } else {
        this.compareNodes(node.right, newNode);
      }
    } 
  }

  searchNodes(node, data) {
    if (node === null || data === node.data) {
      this.midValue = node;
      //console.log(this.midValue)
    } else if (data < node.data) {
      //console.log(data + ' is smaller than ' + node.data)
      this.searchNodes(node.left, data);
    } else if (data > node.data) {
      //console.log(data + ' is bigger than ' + node.data)
      this.searchNodes(node.right, data);
    }
    return this.midValue;
  }

  minSearch(node) {
    if (node.left === null) {
      this.minValue = node;
    } else {
      this.minSearch(node.left);
    }
    return this.minValue;
  }

  maxSearch(node) {
    if (node.right === null) {
      this.maxValue = node;
    } else {
      this.maxSearch(node.right);
    }
    return this.maxValue;
  }

  removeNodes(node, data) {
    console.log(data)
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNodes(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNodes(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        console.log('no children')
        node = null;
        return node;
      }

      if (node.left !== null && node.right !== null) {
        console.log('two children')
        let newNode = this.minSearch(node.right);
        node.data = newNode.data;
        node.right = this.removeNodes(node.right, newNode.data)
        return node;
      } else if (node.left !== null) {
        console.log('one left child')
        node = node.left
        return node;
      } else if (node.right !== null) {
        console.log('one right child')
        node = node.right;
        return node;
      }
    }
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
      tree.add(6);
      tree.add(11);
      tree.add(7);
      tree.add(2);
      tree.add(3);
      tree.add(4);
      tree.add(5);
      tree.remove(3)
      console.log(tree)
      console.log(tree.has(3))
      console.log(tree.root())
      console.log(tree.has(5));
      console.log(tree.find(5).data)
      console.log(tree.min());
      console.log(tree.max())*/

      const tree = new BinarySearchTree();
      const values = [1, 43, 5, 6, 7, 3, 12, 14, 15, 44, 34, 52, 65, 342, 124, 111, 11, 113, 87, 86];

      values.forEach((item) => tree.add(item));
      console.log(tree.find(14).right.data)
      values.sort((a, b) => a % 2 - b % 2 || a - b);
      console.log(values)
      const valuesToRemove = values.splice(0, 10);
      valuesToRemove.forEach((item) => tree.remove(item));
      console.log(values)
      console.log(valuesToRemove)
      valuesToRemove.forEach(item => console.log(item + ' ' + tree.has(item)))
      console.log(valuesToRemove.every(item => tree.has(item) === false));
      console.log(values.every(item => tree.has(item) === true));
