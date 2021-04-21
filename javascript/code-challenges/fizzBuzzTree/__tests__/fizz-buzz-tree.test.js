"use strict"

const { Node, BinaryTree, fizzBuzzTree } = require("../fizz-buzz-tree");

describe('Binary Tree', () => {
  let tree;
  let emptyTree;

  beforeAll(() => {
    tree = new BinaryTree(new Node(1));
    emptyTree = new BinaryTree(new Node());

    tree.root.children.push(new Node(3));
    tree.root.children[0].parent = tree;

    tree.root.children.push(new Node(2));
    tree.root.children[1].parent = tree;

    tree.root.children.push(new Node(4));
    tree.root.children[2].parent = tree;

    tree.root.children[0].children.push(new Node(5));
    tree.root.children[0].children[0].parent = tree.root.children[0];

    tree.root.children[0].children.push(new Node(6));
    tree.root.children[0].children[1].parent = tree.root.children[0];
  });



  test("“Happy Path” - Expected outcome", () => {
    const test = fizzBuzzTree(tree.root);
    expect(test).toEqual(tree.root);
  })

  test("Expected failure", () => {
    const test = fizzBuzzTree();
    expect(test).toEqual("Exception");
  })

  test("Edge case", () => {
    const test = fizzBuzzTree(emptyTree.root);
    expect(test.value).toBeUndefined();
  })

})
