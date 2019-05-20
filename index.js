function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  revstring = []
  for (i = 0, i < string.length, i++) {
    revstring.push(string[0])
    string.pop()
  }
}