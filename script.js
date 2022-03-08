let userChoice = "";

while (userChoice != "even" && userChoice != "odd") {
  userChoice = prompt("Odd or even?").toLowerCase().trim();
}

let userNumber = 0;

while (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
  userNumber = parseInt(prompt("Insert a number between 1 and 5").trim());
}

const aINumber = randomInteger(1, 5);
console.log(aINumber);
const sum = aINumber + userNumber;

if (
  (userChoice == "even" && isEven(sum)) ||
  (userChoice == "odd" && !isEven(sum))
) {
  console.log("hai vinto!", " la somma è: ", sum);
} else {
  console.log("hai vinto!", " la somma è: ", sum);
}

function isPalindromeInPlace(stringToCheck) {
  let reversedString = "";

  for (let i = stringToCheck.length - 1; i >= 0; i--) {
    reversedString += stringToCheck.charAt(i);
  }

  if (reversedString == stringToCheck) {
    return true;
  }

  return false;
}

function isPalindromeByArray(stringToCheck) {
  return stringToCheck.split("").reverse().join("") == stringToCheck;
}

function randomInteger(minimumValue, maximumValue) {
  if (isNaN(parseInt(minimumValue)) || isNaN(parseInt(maximumValue))) {
    console.error("randomInteger(min, max) needs two numbers as argument");
  }
  return Math.floor(
    Math.random() * (maximumValue + 1 - minimumValue) + minimumValue
  );
}

function isEven(number) {
  return number % 2 === 0;
}
