"use strict"

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
    this.length = 0;
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
    const temp = this.front;
    this.front = this.front.next;
    this.length--;
    return temp;
  }
  
}

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(animal){
    if(typeof animal === "object" && animal.type === "cats") {
      this.cats.enqueue(animal);
    } else if(typeof animal === "object" && animal.type === "dogs") {
      this.dogs.enqueue(animal);
    } else {
      return "Exception";
    }
  }

  dequeue(pref){
    if(typeof pref === "object" && pref === "cats") {
      this.cats.dequeue();
    } else if (typeof pref === "object" && pref === "dogs") {
      this.dogs.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;