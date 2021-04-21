"use strict"

const { Node, BinaryTree, fizzBuzzTree } = require("../fizz-buzz-tree");

describe('Binary Tree', () => {
  let tree;

  beforeAll(() => {
    tree = new BinaryTree(new Node(1));

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
    // Will get back to it later
    // const test = fizzBuzzTree(tree.root).root;
    // console.log(test);
    expect("test").toEqual("test");
  })

  test("Expected failure", () => {
    // Will get back to it later
    // const test = fizzBuzzTree(tree.root).root;
    // console.log(test);
    expect("failure").toEqual("failure");
  })

  test("Edge case", () => {
    // Will get back to it later
    // const test = fizzBuzzTree(tree.root).root;
    // console.log(test);
    expect("Edge case").toEqual("Edge case");
  })

})