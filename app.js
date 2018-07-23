let pigLatinTransaltor = (function() {
  let newStr = "";

  let vowelFirst = function (str) {
    let firstLetter = str.charAt(0).toLowerCase();
    //Guard against numbers
    
    if(firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
      newStr = str + "-ay"

      return newStr;
    } else { // Working on consanants
    }
  }

  return {
    vowelFirst: vowelFirst
  }
}) ();

let result = pigLatinTransaltor.vowelFirst("li");
console.log(result);