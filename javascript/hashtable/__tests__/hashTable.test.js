"use strict"

const HashTable = require("../hashtable");

test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
  let hashTable = new HashTable();
  hashTable.add('firstName', 'Ahmad');
  let index = hashTable.hash("firstName");
  expect(hashTable.table[index].head.value.key).toEqual("firstName");
});

test('Retrieving based on a key returns the value stored', () => {
  let hashTable = new HashTable();
  hashTable.add('firstName', 'Ahmad');
  const value = hashTable.get("firstName");
  expect(value.head.value.key).toEqual("firstName");
});

test('Successfully returns null for a key that does not exist in the hashtable', () => {
  let hashTable = new HashTable();
  // hashTable.add('firstName', 'Ahmad');
  const value = hashTable.get("firstName");
  // console.log(value); 
  expect(value).toBeNull();
});

test('Successfully handle a collision within the hashtable', () => {
  let hashTable = new HashTable();
  hashTable.add('firstName', 'Ahmad');
  hashTable.add('firstName', 'Samer');
  const value = hashTable.get("firstName");
  // console.log(value); 
  expect(value.head.next.value.value).toEqual("Samer");
});

test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
  let hashTable = new HashTable();
  hashTable.add('firstName', 'Ahmad');
  hashTable.add('firstName', 'Samer');
  const value = hashTable.get("firstName");
  console.log(value.head.next); 
  expect(value.head.next.value.value).toEqual("Samer");
});

test('Successfully hash a key to an in-range value', () => {
  let hashTable = new HashTable();
  hashTable.add('firstName', 'Ahmad');
  const value = hashTable.hash("firstName");
  expect(value).toBeLessThan(50);
});