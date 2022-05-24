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

-: Return Values
Output from a Function
There are two ways to get output from a function:

console.log is used to print a value to the JavaScript console.
The return keyword is used to stop execution of a function and 
return the value back to the caller.
Points to Remember About Returning and Printing
Returning is different from printing
Printing a value to the JavaScript console only displays the value 
but the value can't be used anwywhere else.

Printing is great for debugging code
Using console.log to test your code in the JavaScript console 
or to print out values as your code runs can be extremely helpful 
in pinpointing where something has gone wrong in your code.

All function calls return something
If a return value is not specified, the function will return undefined.

The return keyword will stop the execution of a function
Any code after a return statement will be ignored.

function isPrime(integer) {
          for (let x = 2; x < integer; x++ ) {
          if(integer % x === 0) {
                    console.log(integer + " is divisible by " + x);
                    return false
          }
          }

          return true
}

What does this function "return"?

function sleep() {
          console.log("I'm sleepy!");
          return "zzz";
          return "snore";
}

sleep()             //zzz

The function will return "zzz" and print "I'm sleepy!" to the console. 
"snore" will not be returned because the first return statement will 
exit the function.

Q: What do you think will happen with the following code?
function test() {
          return 1;
          return 2;
}

test();             // 1 will be returned


1 will be returned! Once the code evaluates the first return statement, 
the function finishes. The second return statement will never be reached.

However, it is possible to have multiple return statements in a function.

For instance, you could use a conditional to specify when each of the 
return statements is evaluated. You could, for example, only return the 
value of 1 if the string "one" was passed into the test() function. Else, 
you could return the value of 2.

-: Using Return Values
A function's return value can be stored in a variable or reused 
throughout your program as a function argument.

// returns the sum of two numbers
function add(x, y) {
          return x + y;
}

// returns the value of a number divided by 2
function divideByTwo(num) {
          return num / 2;
}

// call the "add" function and store the returned value in the "sum" variable
const sum = add(5, 7); 

// call the "divideByTwo" function and store the returned value in the "average" variable
const average = divideByTwo(sum); 

-: Scope
Understanding Scope
Scope is the part of the program where a particular identifier, 
such as a variable or a function name, is visible or accessible.



*/ 
