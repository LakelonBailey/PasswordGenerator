// Assignment code here
function generatePassword() {
  var numChar = window.prompt("Choose a password length from 8-128 characters, inclusively: ");
  var lCase = window.confirm("Would you like to include lowercase letters?");
  var uCase = window.confirm("Would you like to include uppercase letters?");
  var numeric = window.confirm("Would you like to include numeric characters?");
  var special = window.confirm("Would you like to include special characters?");

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
