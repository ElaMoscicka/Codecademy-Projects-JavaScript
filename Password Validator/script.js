//A function that verifies the password has an uppercase letter.
function hasUppercase(input){
  for (var i = 0; i<input.length; i++){
    if (input[i] === input[i].toUpperCase()){
    return true;
		}
	}
}

//A function that verifies the password has a lowercase letter.
function hasLowercase(input){
  for (var i = 0; i<input.length; i++){
    if (input[i] === input[i].toLowerCase()){
      return true;
    }
  }
}

//A function that verifies the password is at least 8 characters
function isLongEnough(input){
  if (input.length >= 8){
    return true;
  } 
}

//A function that verifies the password has a special character.
function hasSpecialCharacter(input){
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];

  for (var i = 0; i<input.length; i++){
    for (var j = 0; j<specialCharacters.length; j++){
    	if (input[i] === specialCharacters[j]){
      return true;
    }
  }
}
}

//A function that reports to the user if their password is complex enough, and if not, tells them what they are missing.
function isPasswordValid(input){
  if (hasUppercase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
    console.log('This password is valid.');
  }
  if (!hasUppercase(input)){
    console.log('This password needs a capital letter!');
  }
  if (!hasLowercase(input)){
    console.log('This passwords needs a lowercase letter!')
  }
  if (!isLongEnough(input)){
    console.log('Your passwords needs at least 8 letters!')
  }
  
  if (!hasSpecialCharacter(input)) {
    console.log('Your passwords needs a special character!')
  }
  
}


//word we are going to use as a password
isPasswordValid('HAaHaaaaa');
