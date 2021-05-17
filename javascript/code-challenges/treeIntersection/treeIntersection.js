"use strict";

function treeIntersection(tree1, tree2) {

  if((tree1 && !tree2) || (!tree1 && tree2)) {
    return "Exception";
  }
  const arrFromTree1 = tree1.preOrder();
  const arrFromTree2 = tree2.preOrder();
  const newArr  = [];
  for (let i = 0; i < arrFromTree1.length; i++) {
    if(arrFromTree2.includes(arrFromTree1[i])) {
      newArr.push(arrFromTree1[i]);
    }
  }

  if(newArr.length){
      return newArr;
  }else{
      return "There is no common values inside the two trees"
  }
}

module.exports = treeIntersection;

