var prompt = require('sync-prompt').prompt;
var first = prompt("What is your first name? ");
var last = prompt("what is your last name? ");
var full = first +  " " + last ;
console.log("Your full name is:", full);

var color = prompt("what is your fav color? ");
console.log("Your fav color is " + color + ".");

var age = prompt("What is your dog's age? ");
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);

var humanAge = age * 7;
console.log("Your dog is " + age + " years old");
console.log("Your dog is " + humanAge + " human years old");

age = prompt("What is your age? ");
age = parseInt(age);
if (age >= 21) 
    console.log("You can drink alcohol");
    else
    console.log("No alcohol for you");
    

var cOrF = prompt("Do you want to convert to C or F? ");
var temp = parseInt(prompt("What is the temperature you want to convert? "));
if (cOrF === "C")
{ var newTemp = ((temp - 32) * 5 / 9);
// debug console.log("new temp is C");
}
else
{   newTemp = ((temp * 9 / 5) + 32);
}  

console.log("The converted temperature is " + newTemp + cOrF + " degrees");

var height = parseInt(prompt("what is your height in inches? "));
var weight = parseInt(prompt("what is your weight in pounds? "));

var BMI = weight / (height * height) * 703;

console.log("Your BMI is ", BMI.toFixed(1));

if (BMI < 18.5)
  console.log("You are underweight.");
  else if (BMI < 25)
  console.log("You are in normal range.");
  else if (BMI < 30)
  console.log("You are overweight.");
  else
  console.log("You are obese.");


