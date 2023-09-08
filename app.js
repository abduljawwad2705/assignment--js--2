// var declare
var num1 = 3;
var num2 = 5;

// Calculate the sum
var sum = num1 + num2;

// result
document.write("<h1>Sum of " + num1 + " and " + num2 + " is: " + sum + "</h1>");

// Subtraction
var sum = num1 - num2;

// result
document.write("<h1>Sub of " + num1 + " and " + num2 + " is: " + sum + "</h1>");

// division
var sum = num1 / num2;

// results
document.write(
  "<h1>Division of " + num1 + " and " + num2 + " is: " + sum + "</h1>");

// Multiplication
var sum = num1 * num2;

// results
document.write(
  "<h1>Multiplication of " + num1 + " and " + num2 + " is: " + sum + "</h1>");




// a. Declare a variable
var myVariable;

// b. Show the value of the variable after declaration
document.write(
  "<h1>Value after variable declaration is: " + myVariable + "</h1>"
);

// c. Initialize the variable with some number
myVariable = 5;

// d. Show the initial value of the variable
document.write("<h1>Initial value: " + myVariable + "</h1>");

// e. Increment the variable
myVariable++;

// f. Show the value of the variable after increment
document.write("<h1>Value after increment is: " + myVariable + "</h1>");

// g. Add 7 to the variable
myVariable += 7;

// h. Show the value of the variable after addition
document.write("<h1>Value after addition is: " + myVariable + "</h1>");

// i. Decrement the variable
myVariable--;

// j. Show the value of the variable after decrement
document.write("<h1>Value after decrement is: " + myVariable + "</h1>");

// k. Show the remainder after dividing the variable's value by 3
var remainder = myVariable % 3;

// l. Show the remainder
document.write("<h1>The remainder is: " + remainder + "</h1>");


// Storing ticket price
var ticketprice = 600;
var currencytype = ("PKR")

// calculating ticket cost
var numberoftickets = 5;
var totalcost = ticketprice * numberoftickets;

// results
document.write("<h1>The cost of buying " + numberoftickets + " movie tickets is: " + totalcost + currencytype + " </h1>");

// a. Storing Celsius temperature
var celsiusTemperature = 25;

// b. Conversion to Fahrenheit & output
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write("<h1>" + celsiusTemperature + "°C is " + fahrenheitTemperature + "°F</h1>");

// c. Storing Fahrenheit temperature
var fahrenheitTemperature2 = 70;

// d. Conversion to Celsius & output
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
document.write("<h1>" +fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C </h1>");

// a. price of item1
var item1 = 650;

// b. Price of item2
var item2 = 100;

// c. Ordered quantity of item1
var QuantityItem1 = 3;

// d. Ordered quantity of item2
var QuantityItem2 = 7; 

// Shipping charges
var Shipping = 100;

// total amount of items

var totalitem1 = item1 * QuantityItem1;
var totalitem2 = item2 * QuantityItem2;

var totalbill = totalitem1 + totalitem2 + Shipping;

// Results
document.write("<h1> SHOPPING CART </h1> ");
document.write("<h1> Price of Item 1 is " + item1 + "</h1>");
document.write("<h1> Quantity of Item 1 is " + QuantityItem1 + "</h1>"); 
document.write("<h1> Price of Item 2 is " + item2 + "</h1>");
document.write("<h1> Quantity of Item 2 is " + QuantityItem2 + "</h1>"); 
document.write("<h1> Shipping Charges " + Shipping + "</h1>");
document.write("<h1> Total Cost of your Order is " + totalbill + "</h1>");


document.write("<h1> MARKS SHEET </h1>")

// Total marks
var totalmarks = 980;
document.write("<h1> Total Marks: " + totalmarks + "</h1>");

// obtained marks
var obtainedmarks = 804;
document.write("<h1> Marks obtained: " + obtainedmarks + "</h1>");

// results
var Percentage = obtainedmarks / totalmarks * 100;
document.write("<h1> Percentage: " + Percentage + "%</h1>");

// Quantity of Foreign Currencies
var USD = 10;
var Riyal = 25;

// Exchange Rate in PKR
var usdtopkr = 104.80;
var riyaltopkr = 28;

// Amount after conversion & total
var totalofusd = USD * usdtopkr;
var totalofriyal = Riyal * riyaltopkr;
var totalofcurrencies = totalofusd + totalofriyal;

// Results
document.write("<h1> CURRENCY IN PKR")
document.write("<h1> Total Currency in PKR: " + totalofcurrencies + "</h1>");

// Arithmetic calculation
var initialnum = 20;
var calculation = ((initialnum + 5) * 10) / 2;

// Results
document.write("<h1> Result after performing all calculations: " + calculation + "</h1>");

// Age Calculator
var currentyear = 2023;
var birthyear = 2002;
var age = currentyear - birthyear;

// Results
document.write("<h1> Current Year: " + currentyear + "</h1>");
document.write("<h1> Birth Year: " + birthyear + "</h1>");
document.write("<h1> Age: " + age + "</h1>");

// Geometrizer
var radius = 20;
var PI = 3.142;
var circumference = 2 * PI * radius;
var area = PI * (radius * radius);

// Results
document.write("<h1> Radius of a Circle: " + radius + "</h1>")
document.write("<h1> Circumference: " + circumference + "</h1>");
document.write("<h1> Area: " + area + "</h1>");

// Life time supplier
var snack = ("OREO");
var Currentage = 21;
var estimatedage = 70;
var amountofsnacks = 5;
var neededsnacks = (estimatedage - Currentage) * amountofsnacks;

// Results
document.write ("<h1> Favourite Snack " + snack + "</h1>")
document.write ("<h1> Current Age: " + Currentage + "</h1>")
document.write ("<h1> Estimated Maximum Age:" + estimatedage + "</h1>")
document.write ("<h1> Amount of Snacks Per day" + amountofsnacks + "</h1>")
document.write("<h1> You will need " + neededsnacks + " to last you until the ripe old age of " + estimatedage + "</h1>")