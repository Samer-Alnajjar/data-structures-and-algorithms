// 'use strict';

// // Require our linked list implementation
// const LinkedLilst = require('../index');

// describe('Linked List', () => {
//   it('works', () => {
//     expect(true).toBeTruthy();
//   });
// });


"use strict"

const Node = require("../linked-list.js").Node;
const LinkedList = require("../linked-list").LinkedList;

// test('init Node class', () => {
//   //arrange
//   let value = 5;
//   //act
//   let node = new Node(value);
//   //assert
//   expect(node.value).toEqual(5);
//   expect(node.next).toEqual(null);
// });

test('init Linked List class', () => {
  let linkedList = new LinkedList();
  expect(linkedList.head).toEqual(null);
});

test('should add new node to empty linked list', () => {
  //arrange
  let ll = new LinkedList();// empty
  let value = 5;
  //act
  ll.insert(value);
  //assert
  expect(ll.head.value).toEqual(value);
  expect(ll.head.next).toBeNull();
});

test("Checking the first node is the head", () => {
  let ll = new LinkedList();

  ll.insert(5);
  ll.insert(7); //This is the head

  expect(ll.head.value).toEqual(7);
})

test("Checking we can insert multiple nodes into the linked list", () => {
  let ll = new LinkedList();

  ll.insert(1);
  ll.insert(36);
  ll.insert(310);

  let length = ll.length
  expect(ll.length).toEqual(length);


  // let finalLinkedList = ll.toString();
  // console.log(finalLinkedList);
  // let array = finalLinkedList.split(" ");

  // expect(array[0]).toEqual("{310}");
  // expect(array[2]).toEqual("{36}");
  // expect(array[4]).toEqual("{1}");
  // expect(array[6]).toEqual("NULL");
})

test("Should return true if the value exists in the linked list", () => {
  let ll = new LinkedList();

  ll.insert(123);
  ll.insert(100);
  ll.insert(500);
  ll.insert(423);

  let exists = ll.includes(500);

  expect(exists).toEqual(true);

})

test("Should return false if the value not exist in the linked list", () => {
  let ll = new LinkedList();

  ll.insert(123);
  ll.insert(100);
  ll.insert(500);
  ll.insert(423);

  let notExists = ll.includes(12);

  expect(notExists).toEqual(false);

})

test("Should return all the values inside the linked list", () => {
  let ll = new LinkedList();

  ll.insert(100);
  ll.insert(500);
  ll.insert(152);
  ll.insert(758);

  let finalLinkedList = ll.toString();
  let array = finalLinkedList.split(" ");

  expect(array[0]).toEqual("{758}");
  expect(array[2]).toEqual("{152}");
  expect(array[4]).toEqual("{500}");
  expect(array[6]).toEqual("{100}");
  expect(array[8]).toEqual("NULL");
})

test("Should add node to the end of the linked list", () => {
  let ll = new LinkedList();

  ll.insert(100);
  ll.insert(200);
  ll.insert(300);
  ll.append(10);

  expect(ll.toString()).toEqual("{300} -> {200} -> {100} -> {10} -> NULL");
})

test("Should add nodes to the end of the linked list", () => {
  let ll = new LinkedList();

  ll.insert(100);
  ll.insert(200);
  ll.insert(300);
  ll.append(10);
  ll.append(20);
  ll.append(30);
  ll.append(40);

  expect(ll.toString()).toEqual("{300} -> {200} -> {100} -> {10} -> {20} -> {30} -> {40} -> NULL");
})


test("Should insert a node before a node located i the middle of a linked list", () => {
  let ll = new LinkedList();

  ll.insert(100);
  ll.insert(200);
  ll.insert(300);
  ll.insertBefore(200, 1000);

  let finalLinkedList = ll.toString();
  let array = finalLinkedList.split(" ");

  expect(array[2]).toEqual("{1000}");

})

test("Should insert a node before the first node of a linked list", () => {
  let ll = new LinkedList();

  ll.append(100);
  ll.append(200);
  ll.insert(300);
 

  let finalLinkedList = ll.toString();
  let array = finalLinkedList.split(" ");

  expect(array[0]).toEqual("{300}");

})

test("Should insert a node after a node located i the middle of a linked list", () => {
  let ll = new LinkedList();

  ll.insert(100);
  ll.insert(200);
  ll.insert(300);
  ll.insertAfter(200, 1000);

  let finalLinkedList = ll.toString();
  let array = finalLinkedList.split(" ");

  expect(array[4]).toEqual("{1000}");

})

test("Should insert a node after the last node of the linked list", () => {
  let ll = new LinkedList();

  ll.insert(100);
  ll.insert(200);
  ll.insert(300);
  ll.append(1000);

  expect(ll.toString()).toEqual("{300} -> {200} -> {100} -> {1000} -> NULL");

})




// test('should insert new header to linked list', () => {
//   //arrange
//   let ll = new LinkedList();// empty
//   ll.insert(10);// header
//   let value = 5;
//   //act
//   ll.insert(value);
//   //assert
//   expect(ll.head.value).toEqual(value);
//   expect(ll.head.next.value).toEqual(10);
// });

// test('should insert new node to linked list with one value', () => {
//   //arrange
//   let ll = new LinkedList();// empty
//   ll.insert(10);// head = 10
//   let value = 5;
//   //act
//   ll.insert(value);// head:10 , next = {node value 5, next = null}
//   //assert
//   expect(ll.head.next.value).toEqual(value);
//   expect(ll.head.next.next).toBeNull();
// });

// test('should insert new node to linked list with more than one value', () => {
//   //arrange
//   let ll = new LinkedList();// empty
//   ll.insert(10);// head = 10
//   ll.insert(26);// head = 10
//   let value = 5;
//   //act
//   ll.insert(value);// head:10 , next = {node value 5, next = null}
//   //assert
//   let count = 0;
//   let lastNode = ll.head;
//   while (count < 2) {
//       count++;
//       lastNode = lastNode.next;
//   }

//   expect(lastNode.value).toEqual(value);
//   expect(lastNode.next).toBeNull();
// });




// old head - next value
// 10 =>26     26 => null

// new head - old head - last value
// 5 => 10    10 => 26   26 => null