// Assignment code here
var charStrings = [
  {chars: "abcdefghijklmnopqrstuvwxyz"},
  {chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
  {chars: "0123456789"},
  {chars: "!\"#$%&\'()*+,-./:;<=>?@[]\\^_`{|}~"}];

function generatePassword() {
  var typeInclude = [0, 0, 0, 0];
  var typeIncludeCopy = [0, 0, 0, 0];
  var j = 0;
  var numChar = window.prompt("Choose a password length from 8-128 characters, inclusively: ");
  if (window.confirm("Would you like to include lowercase letters?")) {typeInclude[0] = 1; j++}
  if (window.confirm("Would you like to include uppercase letters?")) {typeInclude[1] = 1; j++}
  if (window.confirm("Would you like to include numeric characters?")) {typeInclude[2] = 1; j++}
  if (window.confirm("Would you like to include special characters?")) {typeInclude[3] = 1; j++}
  for (var k = 0; k < 4; k++) {
    typeIncludeCopy[k] = typeInclude[k];
  }
  var password = "";
  for (var i = 0; i<numChar; i++) {
    var whichType = Math.floor(Math.random() * 4);
    while (typeIncludeCopy[whichType] != 1) {
      whichType = Math.floor(Math.random() * 4);
    }
    var newChar = charStrings[whichType].chars[Math.floor(Math.random() * charStrings[whichType].chars.length)];
    password += newChar;
    debugger;
    if (j > 0) {
      typeIncludeCopy[whichType] = 0;
      console.log(typeIncludeCopy);
      j--;
    }
    if (j == 0) {
      typeIncludeCopy = typeInclude;
      console.log(typeIncludeCopy);
      j--;
    }
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
