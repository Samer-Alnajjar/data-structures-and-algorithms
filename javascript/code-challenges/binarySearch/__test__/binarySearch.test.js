'use strict';

const newArray = require("../app.js") 

describe("Return the index of the array’s element", () => {
  test("return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.", () => {
    expect(newArray([15, 20, 23, 40, 50, 52, 100], 100)).toStrictEqual(6);
    expect(
      newArray([-10, 0, 10, 25, 43, 50, 100], 90)
    ).toStrictEqual(-1);
  });
});