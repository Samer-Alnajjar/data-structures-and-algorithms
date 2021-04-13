"use strict"

const validation = require("../multi-bracket-validation.js");

test("“Happy Path” - Expected outcome", () => {
  expect(validation("{}(){}")).toBeTruthy();
})

test("Expected failure", () => {
  expect(validation("{}({}")).toBeFalsy();
})

test("Edge case", () => {
  expect(validation("")).toEqual("Please enter a valid string");
})