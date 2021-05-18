"use strict";

const HashTable = require("../../../hashtable/hashtable");
const leftJoin = require("../left-join");

const hashTable1 = new HashTable();
const hashTable2 = new HashTable();
hashTable1.add("firstName", "Ahmad");
hashTable1.add("secondName", "Mohd");
hashTable2.add("secondName", "Test");
hashTable2.add("thirdName", "Samer");

test("Happy path", () => {
  const hashTable1 = new HashTable();
  const hashTable2 = new HashTable();
  hashTable1.add("firstName", "Ahmad");
  hashTable1.add("secondName", "Mohd");
  hashTable2.add("secondName", "Test");
  hashTable2.add("thirdName", "Samer");

  expect(leftJoin(hashTable1, hashTable2)).toEqual([
    ["firstName", "Ahmad", null],
    ["secondName", "Mohd", "Test"],
  ]);
});

test("Edge case", () => {
  const hashTable1 = new HashTable();
  const hashTable2 = new HashTable();
  hashTable1.add("firstName", "Ahmad");
  hashTable1.add("secondName", "Mohd");
  hashTable2.add("secondName", "Test");
  hashTable2.add("thirdName", "Samer");

  expect(leftJoin(hashTable1)).toEqual("Exception");
});

test("Exception", () => {
  const hashTable1 = new HashTable();
  const hashTable2 = new HashTable();
  hashTable2.add("secondName", "Test");
  hashTable2.add("thirdName", "Samer");

  expect(leftJoin(hashTable1, hashTable2)).toEqual(
    "Please pass a full hash table"
  );
});
