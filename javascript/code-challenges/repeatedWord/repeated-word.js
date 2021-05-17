"use strict";

function isRepeated(string) {
  if(string === " ") return "Exception";

  if (string.length) {
    let words = string.match(/\w+/g);
    // let word= string.match(/\b[A-z]\b+/g);
    let count = {};

    for (let i = 0; i < word.length; i++) {
      let word = word[i].toLowerCase();

      if (!count[word]) {
        count[word] = 1;
      } else if (count[word]) {
        count[word]++;
      }
      if (count[word] > 1) {
        return word;
      }
    }
  } else {
    return "The string provided is empty";
  }
}

let str = "Once upon a time, there was a brave princess who...";

isRepeated(str);

module.exports = isRepeated;
