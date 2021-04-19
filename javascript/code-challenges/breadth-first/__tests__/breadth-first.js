'use strict';

const { Node } = require('../breadth-first.js');
const { BinaryTree } = require('../breadth-first.js');
const { BinarySearchTree } = require('../breadth-first.js');


describe('Node Module', () => {
  it('create an instance of Node', () => {
    const node = new Node();
    expect(node instanceof Node).toBeTruthy();
  });

  it('create an instance of Node with the correct properties', () => {
    const value = 'any value';
    const node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});

describe('Binary Tree', () => {
  let tree;
  let emptyTree;
  let nodeTree;

  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = eight;
    three.left = six;
    three.right = seven;
    tree = new BinaryTree(one);
    emptyTree = new BinaryTree();
    nodeTree = new BinaryTree(new Node(1));
  });

  it('Should successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBe(null);
  });

  it('Should successfully instantiate a tree with a single root node', () => {
    const one = new Node(1);
    const tree = new BinaryTree(one);
    expect(tree.root.value).toBe(1);
  });

  it('Should successfully add a left child and right child to a single root node', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    one.left = two;
    one.right = three;
    const tree = new BinaryTree(one);
    expect(tree.root.left.value).toBe(2);
    expect(tree.root.right.value).toBe(3);
  });

  it('preOrder', () => {
    const expected = [1, 2, 4, 5, 8, 3, 6, 7];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });

  it('inOrder', () => {
    const expected = [4, 2, 8, 5, 1, 6, 3, 7];
    const inOrder = tree.inOrder();
    expect(inOrder).toEqual(expected);
  });

  it('postOrder', () => {
    const expected = [4, 8, 5, 2, 6, 7, 3, 1];
    const postOrder = tree.postOrder();
    expect(postOrder).toEqual(expected);
  });

  it("breadth-first", () => {
    const array = tree.bfs();
    // console.log(array);
    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  })

  it("breadth-first, failure excepted", () => {
    const array = emptyTree.bfs();
    // console.log(array);
    expect(array).toEqual("Exception");
  })

  it("breadth-first, Edge case", () => {
    const array = emptyTree.bfs();
    // console.log(array);
    expect(array).toEqual("Exception");
  })
});




describe('Binary Search Tree', () => {
  
  it('Should successfully instantiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.root).toBe(null);
  });

  it('Should successfully instantiate a tree with a single root node', () => {
    const one = new Node(1);
    const tree = new BinarySearchTree(one);
    expect(tree.root.value).toBe(1);
  });

  it('Should successfully add a left child and right child to a single root node', () => {
    const two = new Node(2);
    const tree = new BinarySearchTree(two);
    tree.add(1);
    tree.add(3);

    expect(tree.root.left.value).toBe(1);
    expect(tree.root.right.value).toBe(3);
  });
});