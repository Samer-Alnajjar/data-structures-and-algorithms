"use strict"

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    if(this.array.length === 0) {
      return "Exception";
    }
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    this.array.pop();
  }
}

class PseudoQueue {
  constructor() {
    this.popStack = new Stack();
    this.pushStack = new Stack();
  }

  enqueue(value) {
    this.pushStack.array.push(value);
  }

  dequeue() {
    if(this.pushStack.array.length === 0 && this.popStack.array.length === 0) {
      return "Exception";
    }
    if(this.pushStack.array.length >= 1 && this.popStack.array.length === 0) {
      while(this.pushStack.array.length > 1) {
        const temp = this.pushStack.array.pop();
        this.popStack.array.push(temp);
        if(this.pushStack.array.length === 1) {
          return this.pushStack.array.pop();
        }
      }
    } else if(this.pushStack.array.length !== 0) {
      return this.popStack.array.pop();
    } else {
      return this.popStack.array.pop();
    } 
  }
}

// const queue = new PseudoQueue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.dequeue();
// queue.enqueue(6);
// queue.dequeue();
// queue.dequeue();
// queue.enqueue(7);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();

// console.log(queue);


module.exports = {
  PseudoQueue : PseudoQueue,
  Stack : Stack
}
