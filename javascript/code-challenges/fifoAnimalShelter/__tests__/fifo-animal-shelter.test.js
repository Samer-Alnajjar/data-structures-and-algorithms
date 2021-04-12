"use strict"

const AnimalShelter = require("../fifo-animal-shelter.js");

test("“Happy Path” - Expected outcome", () => {
  const shelter = new AnimalShelter();
  const animal = {type:"cats"}
  
  shelter.enqueue(animal)
  expect(shelter.cats.length).toEqual(1);
})

test("Expected failure", () => {
  const shelter = new AnimalShelter();
  const animal = {type:"animal"}
  

  expect(shelter.enqueue(animal)).toEqual("Exception");
})

test("Edge Case (if applicable/obvious)", () => {
  const shelter = new AnimalShelter();
  const animal = {type:"animal"};

  expect(shelter.dequeue(animal)).toBeNull();
})