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
  saysYes: true,
}

var x = 8;

console.log(mygeneratedPassword)

function generatePassword () {
  mygeneratedPassword = window.prompt("How many characters do you want your password?");
  if ( x >= 8 && 128 ) {
    window.prompt("Do you want a lowercase character?");
  }


  return mygeneratedPassword;
}


generatePassword ();