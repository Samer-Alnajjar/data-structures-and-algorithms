"use strict"

const ll_zip = require("../ll-zip.js").zipLists;
const LinkedList = require("../ll-zip.js").LinkedList;
const Node = require("../ll-zip.js").Node;


test("'Happy path', Should return all the values into a new linked list", () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();
  const resultLinkedList = new LinkedList();

  ll1.append(100);
  ll1.append(10);
  ll1.append(-50);
  ll2.append(200);
  ll2.append(165);
  ll2.append(895);
  resultLinkedList.append(100);
  resultLinkedList.append(200);
  resultLinkedList.append(10);
  resultLinkedList.append(165);
  resultLinkedList.append(-50);
  resultLinkedList.append(895);

  expect(ll_zip(ll1, ll2).toString()).toEqual(resultLinkedList.toString());
})

test("It should return Exception when the length of list1 and list2 are not equal", () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();

  ll1.append(100);
  ll1.append(10);
  ll1.append(-50);
  ll2.append(200);
  ll2.append(165);
  expect(ll_zip(ll1, ll2).toString()).toEqual("Exception");

})

test("'Edge case', Empty linked lists", () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();

  expect(ll_zip(ll1, ll2).toString()).toEqual("NULL");
})