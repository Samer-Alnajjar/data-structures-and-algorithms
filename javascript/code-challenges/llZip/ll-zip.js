"use strict"

const LinkedList = require("../../linked-list/linked-list").LinkedList;
const Node = require("../../linked-list/linked-list").Node;

const ll1 = new LinkedList();
const ll2 = new LinkedList();

// ll1.append(100);
// ll1.append(10);
// ll1.append(-50);
// ll2.append(200);
// ll2.append(165);
// ll2.append(895);
// ll.toString();

function zipLists(list1, list2) {
  let newLinkedList = new LinkedList();
  let currentList1 = list1.head;
  let currentList2 = list2.head;
  for (let i = 0; i < (list1.length * 2); i++) {
    if(list1.length !== list2.length) {
      return "Exception";
    }
    if(i === 0) {
      let newNode = new Node(currentList1.value);
      newLinkedList.head = newNode;
      currentList1 = currentList1.next;
      continue;
    }
    if (i % 2 === 0) {
      let newNode = new Node(currentList1.value);
      let currentNewLinkedList = newLinkedList.head;
      while(currentNewLinkedList.next) {
        currentNewLinkedList = currentNewLinkedList.next;
      }
      currentNewLinkedList.next = newNode;
      currentList1 = currentList1.next;
    } else {
      let newNode = new Node(currentList2.value);
      let currentNewLinkedList = newLinkedList.head;
      while(currentNewLinkedList.next) {
        currentNewLinkedList = currentNewLinkedList.next;
      }
      currentNewLinkedList.next = newNode;
      currentList2 = currentList2.next;
    }
  }
  return newLinkedList;
}

zipLists(ll1, ll2)

module.exports = {
  LinkedList: LinkedList,
  Node: Node,
  zipLists: zipLists
};