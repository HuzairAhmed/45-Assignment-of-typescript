// Define Variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];

// Test for equality and inequality With Strings
console.log("Is apple is equal to apple?");
console.log(apple == apple);

console.log("Is apple is unequal to apple?");
console.log(apple != apple);

// Test using Lowercase Function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// Tests Numericals;
// Equals to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

// Not Equals to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);

// Smaller than
console.log("\n Is twenty is smaller than ten?");
console.log(twenty < ten);

// Greater than or Equals too
console.log("\n Is ten is  greater then or equals to 5?");
console.log(ten >= 5);

// Less than or Equals too 
console.log("\n Is twenty is Smaller then or equals to 10?");
console.log(twenty <= 5);

// Tests using "and" & "or" Operators

// Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);

// Using || (OR)
console.log("\n twenty is greater than 50 OR 20 is equal to 20 ");
console.log(twenty > 50 || twenty == 20);

console.log("\n twenty is greater than 50 OR 20 is not equal to 20 ");
console.log(twenty > 50 || twenty != 20);


// Tests whether an item is include array
console.log("\nIs orange is include in my Fruits array");
console.log(fruits.includes("orange"));

// Not Include
console.log("\nIs orange not include in my Fruits array");
console.log(!fruits.includes("orange"));
