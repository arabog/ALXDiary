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




*/ 