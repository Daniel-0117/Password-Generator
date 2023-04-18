// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // moved to the top 


// Arrays to pull data from for the passwords
var upperChars = "ABCDEFGHIJKLMJNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrsturwxyz";
var Numbs = "0123456789";
var specChars = "!@#$%^&*-+";
var password= "";

//creating the function that will generate the password from button
function generatePassword (click) {
  var passlength = prompt("Choose a number between 8-128"); // prompt allows user to put in random number to be logged 
   console.log(passlength); // helped me ensure a value was correctly logged within inspect elements it can be removed and the function will still work as intended
  var UpperL = confirm ("Would you like upper case letters?"); // confirm allows this to be a simple yes or no question
   console.log(UpperL);
  var LowerL = confirm ("Would you like lower case letters?");
   console.log(LowerL);
  var NumbL = confirm ("Would you like numbers?");
   console.log(NumbL);
  var SpecL = confirm ("Would you like special characters?");
   console.log(SpecL);


//+=  adds the value on its right to the variable or property on its left, and assigns the result to the variable or property on its left
// these statements ensure when the yes button is pressed under each prompt then the particular array associated with it is enabled then added into the password
   if (UpperL === true) {
     password += UpperL = upperChars;
   }

   if(LowerL === true) {
     password += LowerL = lowerChars;
   }

   if(NumbL === true ) {
     password += NumbL = Numbs;
   } 

   if(SpecL === true) {
     password += SpecL = specChars;
   } 

  var Finalps = ""; // this function calculates the values above and comes up with the password
    for (var i = 0; i <= passlength; i++) {
    Finalps += password[Math.floor(Math.random() * password.length)];
  }

     return Finalps;
}


//   // Write password to the #password input (as stated)
   function writePassword() {
     var password = generatePassword();
   var passwordText = document.querySelector("#password");

     passwordText.value = password;

   }
