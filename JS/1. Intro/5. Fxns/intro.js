/*
What Are Functions?
Functions are reusable chunks of code.

-: Functions Are Awesome!
The ability to generalize code for a variety of possible inputs is 
a powerful tool when creating easy to understand, non-repetitive code.

function reverseString(reverseMe) {
          let reversed = "";

          for (let i = reverseMe.length - 1; i >= 0; i--) {
                    reversed += reverseMe[i];
          }

          return reversed;
}

console.log(reverseString("Julia"));

Let's break it down:

The function has one parameter -- a variable named reverseMe.
reverseMewill store the argument -- the value of the string that we 
want the function to operate on.

The variable reversed is intialized as an empty string. It will be 
used to store the reversed string as as it is being constructed.

The function loops through each character the reverseMe string 
using string indexes, from the end to the beginning and adds each 
character to reversed.

When the loop is complete, reversed is returned.

Annotated Function

// Set one parameter to hold the value of the input string
function reverseString(reverseMe) {
          // Declare a variable with an empty string to store the reversed string
          let reversed = "";
          // Loop through the `reverseMe` string from back to front
          for (let i = reverseMe.length - 1; i >= 0; i--) {
                    // Add each character to the end of `reversed`
                    reversed += reverseMe[i];
          }

          // Return the completed string when the loop is complete
          return reversed;
}

console.log(reverseString("Julia"));

Q: Why does the loop start with reverseMe.length - 1?
Because reverseMe.length starts from 1 while index starts from 0.

-: How to Declare a Function
undefined is the default return value on the console when nothing 
is explicitly returned using the special return keyword

Return Statements
You can write a return statement by using the return keyword 
followed by the expression or value that you want to return.

// declares the sayHello function
function sayHello() {
          const message = "Hello!"
          return message; // returns value instead of printing it
}

How to Run a function
Now, to get your function to do something, you have to invoke 
or call the function using the function name, followed by 
parentheses with any arguments that are passed into it. 

Parameters vs. Arguments
At first, it can be a bit tricky to know when something is either 
a parameter or an argument. The key difference is in where 
they show up in the code. A parameter is always going to be 
a variable name and appears in the function declaration. On 
the other hand, an argument is always going to be a value 
(i.e. any of the JavaScript data types - a number, a string, a 
boolean, etc.) and will always appear in the code when the 
function is called or invoked.

-: Function Recap
What You’ve Learned So Far:
Functions package up code so you can easily use (and reuse) 
a block of code.
Parameters are variables that are used to store the data that's 
passed into a function for the function to use.
Arguments are the actual data that's passed into a function when 
it is invoked:

// x and y are parameters in this function declaration
function add(x, y) {
          // function body
          // Here, `sum` variable has a scope within the function. 
          // Such variables defined within a function are called Local variables
          // You can try giving it another name
          const sum = x + y;
          return sum; // return statement
}

// 1 and 2 are passed into the function as arguments, 
// and the result returned by the function is stored in a new variable `sum`
// Here, `sum` is another variable, different from the one used inside the function
const sum = add(1, 2);

Write a function called laugh() that takes one parameter, num.
The function should return a string with num number of "ha"s.
The string should end with an exclamation point "!".

function laugh(num) {
          let ha = '';

          for(i = 0; i < num; i++) {
                    ha += "ha";
          }

          return ha + "!";
}

// test your code by logging out the returned value
console.log(laugh(10));



*/ 
