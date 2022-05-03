// Assignment code here

// This array contains the four different character types. 
var charStrings = [
  {chars: "abcdefghijklmnopqrstuvwxyz"},
  {chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
  {chars: "0123456789"},
  {chars: "!\"#$%&\'()*+,-./:;<=>?@[]\\^_`{|}~"}];

function generatePassword() {
  var typeInclude = [0, 0, 0, 0];
  var typeIncludeCopy = [0, 0, 0, 0];
  var j = 0; // The variable j will represent the number of chosen character types.
  var numChar = window.prompt("Choose a password length between 8 and 128 characters:");
  if (numChar < 8 || numChar > 128) {
    window.alert("Password length must be between 8 and 128 characters. Please try again");
    return null;
  }
  if (window.confirm("Would you like to include lowercase letters?")) {typeInclude[0] = 1; j++}
  if (window.confirm("Would you like to include uppercase letters?")) {typeInclude[1] = 1; j++}
  if (window.confirm("Would you like to include numeric characters?")) {typeInclude[2] = 1; j++}
  if (window.confirm("Would you like to include special characters?")) {typeInclude[3] = 1; j++}
  if (j == 0) {
    window.alert("You must choose at least one character type to generate a password. Please try again.");
    return null;
  }
  // This loop creates a copy of the array that tells which character types to include. By creating this copy, the program is able to ensure all types are included by manipulating the copy in later statements. 
  for (var k = 0; k < 4; k++) {
    typeIncludeCopy[k] = typeInclude[k];
  }
  var password = "";

  // This loop generates a random character type out of the chosen types, then concatenates a random character from that type to the password string. 
  for (var i = 0; i<numChar; i++) {
    var whichType = Math.floor(Math.random() * 4);
    while (typeIncludeCopy[whichType] != 1) {
      whichType = Math.floor(Math.random() * 4);
    }
    var newChar = charStrings[whichType].chars[Math.floor(Math.random() * charStrings[whichType].chars.length)];
    password += newChar;

    // The following conditional statements ensure that each type of chosen characters shows up at least once in the first 4 characters of the password. 
    if (j > 0) { 
      typeIncludeCopy[whichType] = 0;
      j--;
    }
    if (j == 0) {
      typeIncludeCopy = typeInclude;
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
