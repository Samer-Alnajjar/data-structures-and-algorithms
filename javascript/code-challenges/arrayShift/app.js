"use strict"

function insertShiftArray(arr, num) {

  if(arr.length === 0) {
    return [];
  }

  let newArr = [];
  let flag = false;

  for(let i = 0; i < arr.length; i++) {
    if(i === (arr.length / 2) || i === ((arr.length / 2) + 0.5)) {
      newArr[i] = num;
      flag = true;
    }
    if(!flag) {
      newArr[i] = arr[i];
    } else {
      newArr[i+1] = arr[i];
    }
  }
  return newArr;
}

module.exports = insertShiftArray;