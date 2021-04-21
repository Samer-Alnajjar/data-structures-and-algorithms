"use strict"

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

function fizzBuzzTree(node) {
  let i = 0;
  if (!node) {
    return "Exception";
  }

  let _traverse = (node) => {
    if(node) {
      if (node.value % 3 === 0 && node.value % 5 === 0) {
        node.value = 'FizzBuzz';
      } else if (node.value % 3 === 0) {
        node.value = 'Fizz';
      } else if (node.value % 5 === 0) {
        node.value = 'Buzz';
      } else {
        node.value = 'Not divisible by 3 or 5';
      }
    }
  };

  if (node.children.length && node.value) {
    while (i < node.children.length) {
      _traverse(node.children[i]);
      i++;
    }
  }
  _traverse(node.root);
  return node;
};

// let tree = new BinaryTree(new Node(1));

// tree.root.children.push(new Node(3));
// tree.root.children[0].parent = tree;

// tree.root.children.push(new Node(2));
// tree.root.children[1].parent = tree;

// tree.root.children.push(new Node(4));
// tree.root.children[2].parent = tree;

// tree.root.children[0].children.push(new Node(5));
// tree.root.children[0].children[0].parent = tree.root.children[0];

// tree.root.children[0].children.push(new Node(6));
// tree.root.children[0].children[1].parent = tree.root.children[0];

// console.log(tree);

// console.log(fizzBuzzTree(tree.root).root.children); 

module.exports = {
  Node: Node,
  BinaryTree: BinaryTree,
  fizzBuzzTree: fizzBuzzTree
}