"use strict"

const { PseudoQueue, Stack } = require("../queue-with-stacks.js");

test("“Happy Path” - Expected outcome", () => {
  const queue = new PseudoQueue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.dequeue();

  expect(queue.pushStack.array.length).toEqual(0);
})

test("Expected failure", () => {
  const queue = new PseudoQueue();

  expect(queue.dequeue()).toEqual('Exception');
})

test("Edge Case", () => {
  const queue = new PseudoQueue();

  expect(queue.pushStack.peek()).toEqual('Exception');
})