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

-: Global and Function Scope
The Three Types of Scope in JavaScript
global scope
function scope
block scope

The first two are pretty simple:
Variables declared in the global scope are accessible to any other 
part of the program.

Variables declared inside a function are in the function scope 
which means they are only accessible inside that function.

Block scope is more complicated. 

Translating the Library Example to Code
Let's translate James's requests for a book into JavaScript code so 
we can take a closer look at the scope:

const bookSeeker = "James";
const book = "Great Expectations";

function library() {
          const librarian = "Julia"; 
          console.log(bookSeeker + " asked " + librarian + " for " + book);

          function classicLiterature() {
                    const shelf = "Dickens"; 

                    console.log( bookSeeker + " found " + book + " on the " + shelf + " shelf!");
          }

          classicLiterature();
}

Global Scope
bookSeeker and book are in the global scope so as expected, we 
can use access them anywhere in the code.

For example, this code runs without an error:

console.log(bookSeeker + " is looking for " + book);
Prints James is looking for Great Expectations

We can also run the library function without an error:

library();
Prints
James asked Julia for Great Expectations
James found Great Expectations on the Dickens shelf!

Function Scope
What happens when we try to access the librarian variable 
declared inside the library function from the console? We get 
an error, because librarian can only be accessed inside the 
scope of the library function.

console.log(librarian);
Returns Uncaught ReferenceError: librarian is not defined

We get a similar error when we try to access shelf in the console 
because the shelf variable is declared inside the classicLiterature 
function.

console.log(shelf);
Returns Uncaught ReferenceError: shelf is not defined

Q: Which of these variables a, b, c, and d, are defined in the scope of function x?
const a = 1;

function x() {
          const b = 2;

          function y() {
                    const c = 3;

                    function z() {
                              const d = 4;
                    }

                    z();
          }

          y();
}

x();

a and b are available in the x function scope.

Q: Which of these variables a, b, c, and d, are defined in the scope of function y?
a, b, and c, are all available in the y function scope.

Which of these variables a, b, c, and d, are defined in the scope of function z?
All of these variables are available inside the scope of function z.

-: The Scope Chain
How Does Javascript Find a Variable? It Uses the Scope Chain
When the JavaScript engine is looking for a variable, it starts 
from the current scope and moves outward:

The JavaScript engine will start looking in the scope where the variable is requested.
If it can't find it in the current scope, it moves out one level and checks again.
It keeps moving to the outer scope until it has reached the global scope.
If the JavaScript engine checks all of the outer functions and global scope, and 
it still can't find the identifier then it will return a Reference error.

// <-- 4. JavaScript engine looks here last
const globalVar = "I am in the global scope";

function outerOuterFunction() {
          // <-- 3. JavaScript engine looks here third
          const outerOuterVar = 'I am in the outerOuterFunction scope';

          function outerFunction() {
          // <-- 2. JavaScript engine looks here second
                    const outerVar = 'I am in the outerFunction scope';

                    function innerFunction() {
                              // <-- 1. JavaScript engine looks here first
                              const innerVar = 'I am in the innerFunction scope';
                              console.log(globarVar);
                    }
          }
}

Q: Where can you print out the value of variable c without resulting in an error?

const a = 1;

function x() {
          const b = 2;

          function y() {
                    const c = 3;

                    function z() {
                              const d = 4;
                    }
                    z();
          }
          y();
}

x();

The variable c is defined inside function y(), so it's accessible only 
inside function y(). This means it can be printed anywhere inside 
function y(), as well as inside any functions declared inside 
function y() -- like the function z().

-: Block Scope
What is a Block?
A block is a group of statements in between curly braces. 
You've seen blocks in conditional statements:

const x = 5;

if (x < 6) {
          const double = x * 2;
          console.log(double);
} else {
          const half = x / 2;
          console.log(half);
}

and in loops:

for (let i = 0; i < 5; i++) {
          let triple = x * 3;
          console.log(triple);
}

In the examples above, the variables double, half and 
triple are only available inside the block where they are declared.

Q: What will print out to the console when this code is run?

let fruit = "apple"; 

if (fruit !== "banana") {
          let fruit = "banana";
          console.log(fruit);   
}

console.log(fruit);

A new fruit variable is declared inside the curly braces with a 
value of "banana". The first fruit variable declared in the global 
scope has the value "apple"

Block Scope Only Works with let And const
Unlike with function scope, if you declare a variable inside a 
block using var the variable will be accessible both inside the 
block and in the block's outer scope.

Q: What will print out to the console when this code is run?

var fruit = "apple"; 

if (fruit !== "banana") {
          var fruit = "banana";
          console.log(fruit);   
}

console.log(fruit); 

The var inside the if block reassigns the value of the global 
variable fruit to "banana` resulting in "banana`"banana`

.Q: What will print out when you run this code?

if (true) {
          var x = "x is accessible";
          let y = 'y is accessible'; 
          const z = 'z is accessible'; 

          console.log("Inside the if block scope:");
          console.log(x);
          console.log(y);
          console.log(z);
}

console.log("Outside the if block scope:")
console.log(x);
console.log(y);
console.log(z);

You can access x in both the global scope and the block 
scope. y can only be accessed in the block scope.

When JavaScript encounters a reference error it stops so 
the console.log(z) statement isn't run.

Q: What will print out when you run this code?

function whereAmIAssessible(a) {
          if (a) {
                    var x = "x is accessible";
                    let y = 'y is accessible';
                    const z = 'z is accessible';

                    console.log("Inside the if block scope:");
                    console.log(x);
                    console.log(y);
                    console.log(z);
          }
}

whereAmIAssessible(true);

console.log("Outside the function scope:")
console.log(x);
console.log(y);
console.log(z);

When a variable is declared inside a function it is only 
be accessible in that function -- even if you use var. x is 
not accessible in the global scope.

You can only access variables declared in the function scope 
inside the function, even when you declare them with var. 
That is the big difference between how block scope and 
function scope work.


*/ 


