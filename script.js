/*
Pseudocode
1. Create a string containing a welcoming message to the user
2. Create three variables in javascript representing the three numbers in the lock combo
3. Use 3 different arithmetic operations to set the value of each variable to correspond with one of the numbers
4. Create an html file to display the javascript code
5. Concatenate the welcoming string along with the three variables that make up the combo
6. Print out the contatenated string to the console.
*/ 

// Creating welcome message string
let message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
// creating variable for combo number 1
let num1 = 3 + 7;
// creating variable for combo number 2
let num2 = 20 * 2;
// creating variable for combo number 3
let num3 = 50 - 11;

let x = message + " " + num1 + "-" + num2 + "-" + num3;
alert(x);
