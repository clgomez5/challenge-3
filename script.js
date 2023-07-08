// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//console.log(num.length);
//console.log(lCase.length);
//console.log(uCase.length);
//console.log(special.length);

var mygeneratedPassword = {
  num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  lCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  uCase: "ABCDEFGHIJKLMNOPQRSTUV".split(""),
  special: "!@#*$".split(""),
}

function generatePassword () {
  var mygeneratedPassword = "";
  window.prompt("How many characters do you want your password?");
  
    window.alert("Do you want lowercase letters?");

    window.alert("Do you want a uppercase character?");

    window.alert("Do you want a number?");

    window.alert("Do you want special characters?");

  return mygeneratedPassword;    
    }

  

 
  




console.log(mygeneratedPassword)

function mygeneratedPassword (length = 8) {
  var password = " ";
  var options = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%*()?ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  var passLength = 8
}

var expression1 = (passLength >= 8);







generatePassword ();