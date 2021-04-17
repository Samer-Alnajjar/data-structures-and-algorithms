"use strict"

function multiBracketValidation(string) {

  if(string === "") return "Please enter a valid string";

  let Parentheses = 0;
  let Bracket = 0;
  let CurlyBracket = 0;

  for (let i = 0; i < string.length; i++) {
    if("(" === string[i]) {
      Parentheses++;
    } else if(")" === string[i]) {
      Parentheses++;
    } else if("[" === string[i]) {
      Bracket++;
    } else if("]" === string[i]) {
      Bracket++;
    } else if("{" === string[i]) {
      CurlyBracket++;
    } else if("}" === string[i]) {
      CurlyBracket++;
    }
  } 

  
  if(Parentheses > 0 ||  Bracket > 0 || CurlyBracket > 0) {
    if(Parentheses % 2 === 0 && Bracket % 2 === 0 && CurlyBracket % 2 === 0) {
      return true;
    }
  } else {
    return false
  }
    return false
}


module.exports = multiBracketValidation;