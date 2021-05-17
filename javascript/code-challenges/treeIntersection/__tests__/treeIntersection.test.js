'use strict';

const { Node, BinaryTree } = require('../../../tree/tree');
console.log(Node, BinaryTree);
const treeIntersection = require('../treeIntersection');

//===================================

const firstNodeArrOne = new Node(100);
const secondNodeArrOne = new Node(200);
const thirdNodeArrOne = new Node(85);
const fourthNodeArrOne = new Node(75);
const fifthNodeArrOne = new Node(42);
const sixthNodeArrOne = new Node(120);
const seventhNodeArrOne = new Node(321);
const eighthNodeArrOne = new Node(45);
const ninthNodeArrOne = new Node(12);
const tenthNodeArrOne = new Node(345);
const eleventhNodeArrOne = new Node(213);

firstNodeArrOne.left = secondNodeArrOne;
firstNodeArrOne.right = thirdNodeArrOne;
secondNodeArrOne.left = fourthNodeArrOne;
secondNodeArrOne.right = fifthNodeArrOne;
thirdNodeArrOne.left = sixthNodeArrOne;
thirdNodeArrOne.right = seventhNodeArrOne;
fifthNodeArrOne.left = eighthNodeArrOne;
fifthNodeArrOne.right = ninthNodeArrOne;
seventhNodeArrOne.left = tenthNodeArrOne;
seventhNodeArrOne.right = eleventhNodeArrOne;

let tree1 = new BinaryTree(firstNodeArrOne);
//=================================
const firstNodeArrTwo = new Node(12);
const secondNodeArrTwo = new Node(25);
const thirdNodeArrTwo = new Node(420);
const fourthNodeArrTwo = new Node(36);
const fifthNodeArrTwo = new Node(753);
const sixthNodeArrTwo = new Node(120);
const seventhNodeArrTwo = new Node(42);
const eighthNodeArrTwo = new Node(36);
const ninthNodeArrTwo = new Node(42);
const tenthNodeArrTwo = new Node(213);
const eleventhNodeArrTwo = new Node(100);

firstNodeArrTwo.left = secondNodeArrTwo;
firstNodeArrTwo.right = thirdNodeArrTwo;
secondNodeArrTwo.left = fourthNodeArrTwo;
secondNodeArrTwo.right = fifthNodeArrTwo;
thirdNodeArrTwo.left = sixthNodeArrTwo;
thirdNodeArrTwo.right = seventhNodeArrTwo;
fifthNodeArrTwo.left = eighthNodeArrTwo;
fifthNodeArrTwo.right = ninthNodeArrTwo;
seventhNodeArrTwo.left = tenthNodeArrTwo;
seventhNodeArrTwo.right = eleventhNodeArrTwo;

let tree2 = new BinaryTree(firstNodeArrTwo);

//=======================================
const one3 = new Node(1);
const two3 = new Node(2);
const three3 = new Node(3);
one3.left = two3;
one3.right = three3;
let tree3 = new BinaryTree(one3)
console.log(tree3);

const one4 = new Node(4);
const two4 = new Node(5);
const three4 = new Node(6);
one4.left = two4;
one4.right = three4;
let tree4 = new BinaryTree(one4)
console.log(tree4);


//======================================
test('if it can return a set of values intersected in both trees', () => {
    let results = treeIntersection(tree1, tree2);

    expect(results.length).toBeGreaterThan(0);
});

test('No common values between the trees', () => {
    let results = treeIntersection(tree3, tree4);
    console.log(results);

    expect(results).toEqual("There is no common values inside the two trees");
})

test('Edge case', () => {
    let results = treeIntersection(tree4);

    expect(results).toEqual("Exception");
})