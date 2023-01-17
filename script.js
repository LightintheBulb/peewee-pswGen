// Golbal Variables
var generateBtn = document.querySelector("#generate");

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerCase = [
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
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "=",
  "-",
  "{",
  "}",
  "[",
  "]",
  "|",
  ":",
  ";",
  '"',
  "<",
  ">",
  "?",
  "/",
  "`",
  "~",
];

var charArray = [];

var generatedPSW = [];

function generatePsw() {
  var pswLength = prompt("How many characters would you like your password to be? Must be between 8 and 128 characters.")
  pswLength = parseInt(pswLength);
  if (pswLength < 8 || pswLength > 128) {
    window.alert("Password must be between 8 and 128 characters.");
    writePassword();
  }
  
  var upperCaseConfirm = confirm("Would you like to include uppercase letters?")
  var lowerCaseConfirm = confirm("Would you like to include lowercase letters?")
  var numsConfirm = confirm("Would you like to include numbers?")
  var specialCharsConfirm = confirm("Would you like to include special characters?")
  
  if (upperCaseConfirm === false && lowerCaseConfirm === false && numsConfirm === false && specialCharsConfirm === false) {
    window.alert("You must select at least one character type.");
    writePassword();
  }

  if (upperCaseConfirm === true) {
    charArray = charArray.concat(upperCase);
    console.log(charArray);
  }
  if (lowerCaseConfirm === true) {
    charArray = charArray.concat(lowerCase);
    console.log(charArray);
  }
  if (numsConfirm === true) {
    charArray = charArray.concat(nums);
    console.log(charArray);
  }
  if (specialCharsConfirm === true) {
    charArray = charArray.concat(specialChars);
    console.log(charArray);
  }

// while loop that runs until the length of our generated password is equal to the length of the password the user wants
while (generatedPSW.length < pswLength) {
  // indexs random characters from our character array
  var index = Math.floor(Math.random() * charArray.length);
  // concats the character at the index to our generated password
  generatedPSW = generatedPSW.concat(charArray[index]);
}
// turns generatedPSW into a string
generatedPSW = generatedPSW.join('');
return generatedPSW;
};


// Clears our current password and character array
function clear() {
  generatedPSW = [];
  charArray = [];
};


// Write password to the #password input
function writePassword() {
  var password = generatePsw();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  clear();
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)