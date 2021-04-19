'use strict'

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Root - Left - Right
  preOrder() {
    const results = [];
    const _traverse = (node) => {
      results.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;
  }

  // Left - Root - Right
  inOrder() {
    const results = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      results.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;
  }

  // left - Right - Root
  postOrder() {
    const results = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      results.push(node.value);
    };
    _traverse(this.root);
    return results;
  }

  find_maximum_value() {
    if (this.root === undefined) {
      return 'exception';
    } else {
      let array = this.inOrder();
      let max = 0;
      for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
          max = array[i];
        }
      }
      return max;
    }
  }

  bfs() {
    if(this.root === null) return "Exception"
    if(this.length === 1) return 1;
    let visited = [],
        queue = [],
        current_node = this.root;
  
    queue.push(current_node);
    while (queue.length) {
      current_node = queue.shift();
      visited.push(current_node.value);
  
      if (current_node.left) queue.push(current_node.left);
      if (current_node.right) queue.push(current_node.right);
    };
      return visited;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(value);
      return;
    } else {
      const binarySearchTree = (node) => {
        if (value > node.value) {
          if (node.right === null) {
            node.right = new Node(value);
            return;
          } else if (node.right !== null) {
            return binarySearchTree(node.right);
          }
        } else if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value);
            return;
          } else if (node.left !== null) {
            return binarySearchTree(node.left);
          }
        } else {
          return null;
        }
      }
      return binarySearchTree(node);
    }
  }

  contains(value) {
    if (this.root === null) {
      return 'The tree is empty';
    }
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

}


module.exports = {
  BinaryTree,
  BinarySearchTree,
  Node
}