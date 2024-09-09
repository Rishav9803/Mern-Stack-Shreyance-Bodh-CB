//Question 1. Declare a variable to store your name and log it to the console.
var a = 'Rishav';
console.log(a)// console doesn't need semicolon

// Question 2. Swap the values of two variables without using a third variable.
var a = 5;
var b = 10;

a = a+b;//a=15
b = a-b;//b=5
a = a-b;//a=5  value swapped done

console.log("a =", a);
console.log("b =", b);

//Question 3.Write a function that takes two variables, adds them, and returns the result.
a = 3;
b = 7;

console.log("c =", a + b)

// Question 4. Declare a constant to store the value of Pi and write a function to calculate the area of a circle using this constant.
circle = 5;
areaofcircle = 22/7*circle*circle;
console.log("Area of circle", areaofcircle)