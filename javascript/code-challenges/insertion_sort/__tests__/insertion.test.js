const insertionSort = require("../app.js");


test("“Happy Path” - Expected outcome", () => {
  let arr = [62, 25, 20, 79];

  expect(insertionSort(arr)).toEqual([20, 25, 62, 79]);
})

test("Expected failure", () => {
  let arr = [];

  expect(insertionSort(arr)).toEqual("Exception");
})

test("Edge case", () => {
  let arr = [1, 1, 1, 1];

  expect(insertionSort(arr)).toEqual([1, 1, 1, 1]);
})

