const {quickSort, partition, swap} = require("../app.js");


test("“Happy Path” - Expected outcome", () => {
  let arr = [8, 4, 23, 42, 16, 15];

  expect(quickSort(arr, 0, arr.length - 1)).toEqual([4, 8, 15, 16, 23, 42]);
})


test("Expected failure", () => {
  let arr = [];

  expect(quickSort(arr, 0, arr.length - 1)).toEqual("Exception");
})


test("Edge case", () => {
  let arr = [1, 1, 1, 1];

  expect(quickSort(arr, 0, arr.length - 1)).toEqual([1, 1, 1, 1]);
})

