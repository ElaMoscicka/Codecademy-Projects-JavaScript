function hasUppercase(input) {
  return input !== input.toLowerCase();
}

function hasLowercase(input) {
  return input !== input.toUpperCase();
}

function isLongEnough(input) {
  return input.length >= 8;
}

function hasSpecialCharacter(input) {
  const specialCharacters = /[!@#$%^&*]/;
  return specialCharacters.test(input);
}

function isPasswordValid(input) {
  const validConditions = [
    hasUppercase(input),
    hasLowercase(input),
    isLongEnough(input),
    hasSpecialCharacter(input),
  ];

  const invalidConditions = [
    !hasUppercase(input) && 'This password needs a capital letter!',
    !hasLowercase(input) && 'This password needs a lowercase letter!',
    !isLongEnough(input) && 'Your password needs at least 8 characters!',
    !hasSpecialCharacter(input) && 'Your password needs a special character!',
  ];

  if (validConditions.every((condition) => condition)) {
    console.log('This password is valid.');
  } else {
    invalidConditions.forEach((condition) => condition && console.log(condition));
  }
}

// example usage
isPasswordValid('HAaHaaaaa');
