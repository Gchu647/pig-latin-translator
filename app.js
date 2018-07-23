let pigLatinTransaltor = (function() {
  let newStr = "";

  let toPigLatin = function (str) {
    let strArr = str.split("");
    console.log("entered string: ", str);
    console.log("string array", strArr)
    //Guard against numbers
    for (let i = 0; i < strArr.length; i++) {
      console.log("index: ", i);
      if(strArr[0] === "a" || strArr[0] === "e" || strArr[0] === "i" || strArr[0] === "o" || strArr[0] === "u") {
        newStr = str + "-ay"
        
        console.log(newStr);
        return newStr;
      } else if (strArr[i] === "a" || strArr[i] === "e" || strArr[i] === "i" || strArr[i] === "o" || strArr[i] === "u") {
        leftPart = strArr.slice(i).join("");
        rightPart = "-" + strArr.slice(0,i).join("") + "ay";
        newStr = leftPart + rightPart;

        console.log(newStr);
        return newStr;
      }
    }
  }

  let toEnglish = function(str) {
    let index = str.indexOf("-");
    let leftPart = str.slice(0, index);
    let rightPart = str.slice(index);
    let indexOfR = rightPart.indexOf("ay"); // If this is -1, stop function

    if(indexOfR < 0) {
      console.log("Error: This is not Pig Latin")
    } else if(indexOfR === 1) {
      console.log(leftPart);
    } else {
      let consonant = rightPart.slice(1,indexOfR);
      console.log(consonant + leftPart);
    }

  }

  return {
    toPigLatin: toPigLatin,
    toEnglish: toEnglish
  }
}) ();

pigLatinTransaltor.toPigLatin("eat");
pigLatinTransaltor.toPigLatin("trash");
pigLatinTransaltor.toEnglish("ash-tray");
pigLatinTransaltor.toEnglish("eat-ay");
pigLatinTransaltor.toEnglish("happy");