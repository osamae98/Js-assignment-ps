/*//^ Q (1) =====>
console.log(window.prompt("Enter a number" )); */






/*//^ Q (2) =====>
var num = +window.prompt("Enter a number" );
if (num % 3 === 0 && num % 4 === 0) {
  console.log("Yes");
} else {
  console.log("No");
} */






/*//^ Q (3) =====> 
var num1 = +window.prompt("Enter first number" );
var num2 = +window.prompt("Enter second number" );

if (num1 > num2) {
  console.log(num1);
}
else if (num2 > num1) {
  console.log(num2);
}
else {
  console.log("Both are equal");
}
*/




/*//^ Q (4) =====>
var num = +window.prompt("Enter a number" );

if (num > 0){
  console.log("Positive");
}
else if (num < 0){
  console.log("Negative");
}else{
  console.log("Zero");
} */

/*//^ Q (5) =====>

var num1 = +window.prompt("Enter first number" );
var num2 = +window.prompt("Enter second number" );
var num3 = +window.prompt("Enter third number" );

var max = num1

if (num2 > max) {
  max = num2;}
else if (num3 > max) {
  max = num3;}


var min = num1

if (num2 < max) {
  min = num2;}
else if (num3 < max) {
  min = num3;}

console.log("The largest number is: " + max);
console.log("The smallest number is: " + min);
*/


/*//^ Q (6) =====>
var num = +window.prompt("Enter a number" );

if (num % 2 === 0){
  console.log("Even");
}else{
  console.log("Odd");
}
*/




/*//^ Q (7) =====> 
var chars = window.prompt("Enter a character");

if (
  chars === "a" ||
  chars === "e" ||
  chars === "l" ||
  chars === "o" ||
  chars === "u "
) {
  console.log("vowel");
} else {
  console.log("consonant");
} */


/*//^ Q (8) =====>
var number = window.prompt("Enter a number:");

for (var i = 1; i <= number; i++) {
  console.log(i);} */

/*//^ Q (9) =====>
var number = parseInt(prompt("Enter a number:"));

for (var i = number; i <= 60; i += 5) {
  console.log(i);
} */

/*//^ Q (10) =====>
var number = parseInt(prompt("Enter a number:"));

for (let i = 1; i <= number; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
 */






/*//^ Q (11) =====>

  var base = +window.prompt("Enter base" );
  var exponent = +window.prompt("Enter exponent" );

  var result = 1;
  for (var i = 0 ; i< exponent; i++){
    result = result * base; 
    }
  console.log( result);
*/




/*//^  Q (12) =====>
var subject1 = Number(window.prompt("Enter marks for Subject 1:"));
var subject2 = Number(window.prompt("Enter marks for Subject 2:"));
var subject3 = Number(window.prompt("Enter marks for Subject 3:"));
var subject4 = Number(window.prompt("Enter marks for Subject 4:"));
var subject5 = Number(window.prompt("Enter marks for Subject 5:"));

var total = subject1 + subject2 + subject3 + subject4 + subject5;

var average = total / 5;

var percentage = (total / 500) * 100;

console.log("Total Marks: " + total);
console.log("Average Marks: " + average);
console.log("Percentage: " + percentage ); */


/*//^ Q (13) =====>
var month = window.prompt("Enter month number (1-12):");

if (month === "1" || month === "3" || month === "5" || month === "7" || month === "8" || month === "10" || month === "12") {
  console.log("31 days");
} else if (month === "4" || month === "6" || month === "9" || month === "11") {
  console.log("30 days");
} else if (month === "2") {
  console.log("28 or 29 days (February)");
} else {
  console.log("Invalid month number");
} */

/*//^ Q (14) =====> 

var physics = Number(window.prompt("Enter marks for physics:"));
var chemistry  = Number(window.prompt("Enter marks for chemistry:"));
var biology = Number(window.prompt("Enter marks for biology:"));
var mathematics = Number(window.prompt("Enter marks for mathematics:"));
var computer = Number(window.prompt("Enter marks for computer:"));

var total = physics + chemistry + biology + mathematics + computer;

var percentage = (total / 500) * 100;

var grade = "";

if (percentage >= 90){
  grade = "A";


}
else if (percentage >= 80){
  grade = "B";
} 
else if (percentage >= 70){
  grade = "C";
}
else if (percentage >= 60){
  grade = "D";
}
else if (percentage >= 40){
  grade = "E";
} 
else {
  grade = "F";
}

console.log("Percentage: "+ percentage + "%");
console.log("Grade: "+ grade);
*/




/*//^ Q (15) =====> 
var month = + window.prompt("Enter month number (1-12):");

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("days = 31")
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("days = 30")
    break;
  case 2:
    console.log("days = 28")
    break;
  default:
    console.log("Invalid month number!");
    break;
} 
*/


/*//^ Q (16) =====> 
var chart= window.prompt("Enter a character");

switch (chart) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("vowel");
    break;
  default:
    console.log("consonant");
    break;
}
*/

/*//^ Q (17) =====> 
var num1 = + window.prompt("Enter first number:");
var num2 = + window.prompt("Enter secound number:");

switch (true) {
  case (num1 > num2):
    console.log(num1);
    break;
  case (num2 > num1):
    console.log(num2);
    break;  
  default:
    console.log("Both numbers are equal");
    break;
  }
    */



/*//^ Q (18) =====>
var num = + window.prompt("Enter a number:");

switch (true) {
  case (num % 2 === 0):
    console.log("Even");
    break;
  case (num % 2 !== 0):
    console.log("Odd");
    break;
  default:
    console.log("Invalid input");
    break;
}
    */

/*//^ Q (19) =====> 
var num = + window.prompt("Enter a number:");

switch (true) {
  case (num > 0):
    console.log("Positive");
    break;
  case (num < 0):
    console.log("Negative");
    break;
  case (num === 0):
    console.log("Zero");
    break;
}
    */

/*//^ Q (20) =====>

var a=+ window.prompt("Enter first number:");
var o = window.prompt("Enter operator:");
var b=+ window.prompt("Enter second number:");

switch (o) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b); 
    break;
  case "/":
    console.log(a / b);
    break;
  case "%":
    console.log(a % b);
    break;
  default:
    console.log("Invalid operator");
    break;
}
*/