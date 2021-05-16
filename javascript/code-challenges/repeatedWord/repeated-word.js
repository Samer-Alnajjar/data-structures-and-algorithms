"use strict";

function isRepeated(string) {
  if(string === " ") return "Exception";

  if (string.length) {
    let word = string.match(/\w+/g);
    // let word= string.match(/\b[A-z]\b+/g);
    let count = {};

    for (let i = 0; i < word.length; i++) {
      let letter = word[i].toLowerCase();

      if (!count[letter]) {
        count[letter] = 1;
      } else if (count[letter]) {
        count[letter]++;
      }
      if (count[letter] > 1) {
        return letter;
      }
    }
  } else {
    return "The string provided is empty";
  }
}

let str = "Once upon a time, there was a brave princess who...";

isRepeated(str);

module.exports = isRepeated;
