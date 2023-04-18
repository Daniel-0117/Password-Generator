
// Assignment Code
var generateBtn = document.querySelector("#generate");
//Creating arrays which will be used to generate the password
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lowercase = "abcdefghijklmnopqrstuvwxyz";
var Specchars = "!@#$%^&*";
var numbs = "0123456789";
var password = "";

// Function that will generate password 
function generatePassword (event) {
  var passlength = prompt("Select a number between 8-128")
  var Specslection = confirm("Would you like a special character?")
  var Upperselection = confirm("Would you like an Uppercase Letter")
  var Lowerselection = confirm("Would you like a lowercase letter?")
  var Numbselection = confirm("Would you like a number?")

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
         document.getElementById("password").value = password;
  }
 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
