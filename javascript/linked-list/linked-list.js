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

  append(value) {
    var newNode = new Node(value);
    this.length++;
    if(!this.head){
        this.head = newNode;
    } else {
        let lastNode = this.head;
        while(lastNode.next) {
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
    }
  }

  insertAfter(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    while(current) {
      if(current.value === value) {
        this.length++;
        let temp = current.next;
        current.next = node;
        node.next = temp;
        return;
      }
      current = current.next;
    }
    return "Exception";
  }

  insertBefore(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    while(current && current.next !== null) {
      if(current.next.value === value) {
        this.length++;
        let temp = current.next;
        current.next = node;
        node.next = temp;
        return;
      }
      current = current.next;
    }
    return "Exception";
  }

  kthFromEnd(k) {
    let current = this.head;
    let position = this.length - 1 - k;
    let index = 0;
    while(current) {
      if(position === index) {
        console.log(current.value);
        return current.value;
      }
      current = current.next
      index++;
    }
    console.log(`Exception`);
    return "Exception";
  }

}

const ll = new LinkedList();

ll.insert(100);
ll.insert(200);
ll.insert(300);
// ll.insert(400);
// ll.includes(300);
// ll.insertAfter(200, 25);
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.insertBefore(300, 25);
ll.kthFromEnd(0)
ll.toString();



module.exports = {
  Node: Node,
  LinkedList: LinkedList
}