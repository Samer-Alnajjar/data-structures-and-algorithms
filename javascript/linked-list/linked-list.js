"use strict"

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next= next;
  }
}

class LinkedList  {
  constructor(head) {
    this.head = null;
    this.length = 0;
  }

  // This will insert to the head of the linked list
  insert(value){
    try {
      this.head = new Node(value, this.head);
      this.length++;
    } catch(error) {
      console.log(`Error while calling the insert function`, error);
    }
  }

  includes(val) {
    try {
      let current = this.head;

      while(current) {
        if(current.value === val) {
          // console.log(true);
          return true;
        }
        current = current.next;
      }
      // console.log(`false`);
      return false;
    } catch(error) {
      console.log(`Error while calling the includes function`, error);
    }
  }

  toString() {
    try {
      let linkedList = "";
      let current = this.head;
  
      while(current) {
        linkedList +=  `{${current.value}} -> `;
        current = current.next;
      }
      linkedList += "NULL";
      console.log(linkedList);
      return linkedList;
    } catch (error) {
      console.log(`Error while calling the toString function`, error);
    }
  }

}

const ll = new LinkedList();

ll.insert(100);
ll.insert(200);
ll.includes(300);
ll.toString();


module.exports = {
  Node: Node,
  LinkedList: LinkedList
}