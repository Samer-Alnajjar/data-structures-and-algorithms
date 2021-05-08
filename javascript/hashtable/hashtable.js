class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class HashTable {
  table = new Array(50);

  add(key, value) {
    let hash = this.hash(key);
    //if contains a key, do nothing
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();//LL
    }

    this.table[hash].add({ key, value });
  }

  hash(key) {
    let hash = 353;
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total = (hash * total + key.charCodeAt(i)) % this.table.length;
    }

    if(total < 1) {
      this.table.length - 1;
    }
    return parseInt(total);
  }

  get(key) {
    let hash = this.hash(key);
    if(!this.table[hash]){
      return null;
    }else{
      return this.table[hash];
    }
  }
  contains(key) {
    let hash = this.getHash(key);
    if(this.table[hash] === null){
      return null;
    }else{
      return true;
    }
  }
}

const hashTable = new HashTable();
hashTable.add('firstName', 'Ahmad');
hashTable.add('secondName', 'Mohd');
hashTable.add('family', 'Test');

// console.log("1", hashTable.table);
// console.log("2", hashTable.table[0]);
// console.log("3", hashTable.table[0].head.next);
// console.log("4", hashTable.table[20].head);

module.exports = HashTable;