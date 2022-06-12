const characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "v",
  "z",
];

let arrayId;

let output = document.getElementById("main");

function getValue() {
  let maxLength = characters.length - 1;

  arrayId = prompt("Enter a number");

  if (arrayId < characters.length) {
    printValue();
  } else {
    alert(
      "Error! The number should be within the range from 0 to " + maxLength
    );
    getValue();
  }
}

function printValue() {
  output.innerText = characters[arrayId];
}

getValue();

document.addEventListener("keypress", handleKeyPress);

function handleKeyPress(object) {
  if (object.key === characters[arrayId]) {
    alert("CORRECT");
    getValue();
  } else {
    alert("INCORRECT");
  }
}
