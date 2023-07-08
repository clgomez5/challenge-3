// Assignment Code
var generateBtn = document.querySelector("#generate");

var mygeneratedPassword = {
  num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  lCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  uCase: "ABCDEFGHIJKLMNOPQRSTUV".split(""),
  special: "!@#*$".split(""),
  passLength: 8
}

console.log(mygeneratedPassword.length);

function generatePassword () {
  var mygeneratedPassword = "";

    window.prompt("How many characters do you want your password?");

    window.prompt("Do you want lowercase letters?");
    if (Math.floor(Math.random() * lCase.length));

    window.prompt("Do you want a uppercase character?");

    window.prompt("Do you want a number?");
    if (Math.floor(Math.random() * 10));

    window.prompt("Do you want special characters?");

  return mygeneratedPassword;    
    }

generatePassword ();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function mygeneratedPassword (length = 8) {
//   var password = " ";
//   var options = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%*()?ABCDEFGHIJKLMNOPQRSTUVWZYZ";
//   var passLength = 8
// }








