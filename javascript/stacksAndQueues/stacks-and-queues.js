"use strict"

// Stacks

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if(!this.top) {
      return "Exception";
    }
    return this.top;
  }
  push(value){
    const newNode = new Node(value);
    if(this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode; 
      this.top.next = temp;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.top) {
      return "Exception";
    }
    if(this.top === this.bottom) {
      this.bottom = null;
    }
    const temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp.value;
  }
  isEmpty() {
    if(this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}


class Queue {
  constructor(){
    this.front = null;
    this.back = null;
    this.length = 0;
  }
  peek() {
    if(!this.front) {
      return "Exception";
    }
    return this.front.value;
  }
  enqueue(value){
    const newNode = new Node(value);
    if (this.length === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.length++;
    return this;
  }
  dequeue(){
    if (!this.front) {
      return "Exception";
    }
    if (this.front === this.back) {
      this.back = null;
    }
    const holdingPointer = this.front;
    this.front = this.front.next;
    this.length--;
    return this;
  }
  isEmpty() {
    if(this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  Node: Node,
  Stack: Stack,
  Queue: Queue
}