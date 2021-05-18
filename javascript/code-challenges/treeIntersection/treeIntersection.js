"use strict";

function treeIntersection(tree1, tree2) {

  if((tree1 && !tree2) || (!tree1 && tree2)) {
    return "Exception";
  }
  const arrFromTree1 = tree1.preOrder();
  const arrFromTree2 = tree2.preOrder();
  const newArr  = [];
  for (let i = 0; i < arrFromTree1.length; i++) {
    for(let j = 0; j < arrFromTree2.length; j++) {
      if(arrFromTree1[i] === arrFromTree2[j]) {
        newArr[i] = arrFromTree2[j];
        break;
      }
    }
  }

  if(newArr.length){
      return newArr;
  }else{
      return "There is no common values inside the two trees"
  }
}

module.exports = treeIntersection;

