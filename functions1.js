/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName() {
  console.log("Badreyah");
}

printName();

function printAge(birthYear) {
  console.log(` Your Age Is ${2024 - birthYear}`);
}
printAge(1997);

function printAgeAndName(birthYear, name) {
  console.log(`Hello ${name} you are ${2024 - birthYear} Years old. `);
}

printAgeAndName(1997, "Badreyah");

function printHello(name, language) {
  if (language === "en") {
    console.log(`Hello ${name} `);
  } else if (language === "es") {
    console.log(`Hola ${name}`);
  } else if (language === "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language === "tr") {
    console.log(`Merhaba ${name}`);
  }
}
printHello("Badreyah", "en");
printHello("Badreyah", "es");
printHello("Badreyah", "fr");
printHello("Badreyah", "tr");

function printMax(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    console.log(firstNumber);
  } else {
    console.log(secondNumber);
  }
}
printMax(9, 5);
