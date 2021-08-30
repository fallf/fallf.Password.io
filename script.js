function generatePassword(){// Assignment code here
  var promptlength = window.prompt ("Password lenght? Minimum 8 to Maximum 128");
  console.log(promptlength)
  // if the prompt length is less than 8 OR prompt length is greater than 128
  // alert the user that they have an error
  if (promptlength < 8 || promptlength > 128)
  {
    window.alert ("the Password is either to short or to long. please refresh the page and try again ")
  }

  for (let i = 0; i < promptlength.length; i++ ){
    Text += promptlength[i] + "<br>";
  }

  // lowerLetter[0]
  const getRandomlower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const getRandomUpper = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const getRandomNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0"]
  const getRandomSymbol = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","/","?",".",">","<","~","~"]
  //const promptlength = promptlength.value

  
  var promptlower = confirm ("click OK to comfirm including lowcase character");
  var promptUpper = confirm ("click OK to comfirm including Uppercase Characters");
  var promptNumber = confirm ("click OK to comfirm including Number Characters");
  var promptSymbol = confirm ("click OK to comfirm including Symbol Characters");

  console.log(promptlower)

  var possibleChars = [];

  if (promptlower){ 
    possibleChars = possibleChars.concat(getRandomlower);
  }

  if (promptUpper) {
    possibleChars = possibleChars.concat(getRandomUpper)
  }

  if (promptNumber ){
    possibleChars = possibleChars.concat(getRandomNumber)
  }

  if (promptSymbol){
    possibleChars = possibleChars.concat(getRandomSymbol)
  }

  //var possibleChars = ["a","b","c", "A","B","C"];
  console.log(possibleChars)

  //build a password with random chars from possibleChars
  //has a length of parseInt(promptlength)

  console.log(promptlength)
  console.log(Math.floor(Math)) //a random number from 0-0.999
  console.log(Math.floor(Math.random() * promptlength))
  
  var myPassword = ""
  for(var i = 0; i<parseInt(promptlength); i++){
    let number = Math.floor(Math.random()* possibleChars.length)
    myPassword+= possibleChars[number]
  }

  return myPassword
}

writePassword()

//Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);