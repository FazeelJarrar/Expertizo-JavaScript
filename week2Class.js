console.log("Question 1: Checking Number Even or Odd")
var num = prompt("Enter A Number: ")
if(num % 2 == 1)
{
    console.log(num + " Its an Odd Number Sir..")
}
else
{
    console.log(num + " Its an Even Number Sir..")
}
//======================================================================================
console.log("Question 2: Printing Days by taking respective Numbers")
var day = prompt("Please Enter a Number: ")
if(day == 1)
{
    console.log("Its Monday")
}
else if(day == 2)
{
    console.log("Its Tuesday")
}
else if(day == 3)
{
    console.log("Its Wednessday")
}
else if(day == 4)
{
    console.log("Its Thursday")
}
else if(day == 5)
{
    console.log("Its Friday")
}
else if(day == 6)
{
    console.log("Its Saturday")
}
else if(day == 7)
{
    console.log("Its Sunday")
}
else
{
    console.log(day + " is an Invalid No. Please Enter no with in range..")
}
//======================================================================================

console.log("Question 4: Printing Table of 9")
var tbl = 9;
for(i = 1; i <= 10; i = i + 1)
{
    console.log(tbl + " x " + i + " = " + tbl*i)
}

//======================================================================================
console.log("Question 5: Farenheit/Celcius Convertor")
alert("Welcome To Farenheit/Celcius Convertor")

var noPress = prompt("Press 1 to convert Fahrenheit to Celsius or Press 2 to convert Celsius to Fahrenheit.")
if(noPress == 1)
{
    tempF = prompt("Enter value in Fahrenheit: ")
    res = (tempF - 32) * (5/9)
    alert("Temperature in Celsius is: " + res)
    console.log("Temperature in Celsius is: " + res)
}
else if(noPress == 2)
{
    tempC = prompt("Enter value in Celcius: ")
    res2 = (tempC * (9/5)) + 32
    alert("Temperature in Fahrenheit is: " + res2)
    console.log("Temperature in Fahrenheit is: " + res2)
}
else
{
    alert(noPress + " is an Invalid Input. Please Select either 1 or 2")
    console.log(noPress + " is an Invalid Input. Please Select either 1 or 2")
}