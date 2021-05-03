const {mergeSort, merge} = require("../app.js");


test("“Happy Path” - Expected outcome", () => {
  let arr = [62, 25, 20, 79];

  expect(mergeSort(arr)).toEqual([20, 25, 62, 79]);
})


test("Expected failure", () => {
  let arr = [];

  expect(mergeSort(arr)).toEqual("Exception");
})


test("Edge case", () => {
  let arr = [1, 1, 1, 1];

  expect(mergeSort(arr)).toEqual([1, 1, 1, 1]);
})

