/*
-: First-Class Functions
Functions are First-Class Functions
In JavaScript, functions are first-class functions. This means 
that you can do with a function just about anything that you 
can do with other elements, such as numbers, strings, objects, 
arrays, etc. JavaScript functions can:

Be stored in variables
Be returned from a function.
Be passed as arguments into another function.
Note that while we can, say, treat a function as an object, a key 
difference between a function and an object is that functions can 
be called (i.e., invoked with ()), while regular objects cannot.

const myFunction = function (n1, n2) {
          return n1 * n2;
};

// const myFunction = function howdy(n1, n2) {
//   return n1 * n2;
// };

myFunction(2, 4);
// 8

function average(n1, n2, n3) {
          return (n1 + n2 + n3) / 3;
}

average.length;
// 3

average.name;
// average

We can length, name etc on function wc confirm it being an object

Q: How are JavaScript functions first-class functions? 
Select all that apply:
In many ways, a function in JavaScript can be treated as a value. 
Returning it from a function, storing it in a variable, and even 
passing it in as an argument into another function is perfectly 
allowed!

Functions Can Return Functions
Since we know that functions are first-class functions, we can 
treat a function as a value and just as easily return a function 
from another function! A function that returns another function 
is known as higher-order function. Consider this example:

function alertThenReturn() {
          alert('Message 1!');

          return function () {
                    alert('Message 2!');
          };
}

If alertThenReturn() is invoked in a browser, we'll first see 
an alert message that says 'Message 1!', followed by the 
alertThenReturn() function returning an anonymous function. 
However, we don't actually see an alert that says 'Message 2!', 
since none of the code from the inner function is executed. How 
do we go about executing the returned function?

Since alertThenReturn() returns that inner function, we can 
assign a variable to that return value:

const innerFunction = alertThenReturn();

We can then use the innerFunction variable like any other function!

innerFunction();
// alerts 'Message 2!'

Likewise, this function can be invoked immediately without being 
stored in a variable. We'll still get the same outcome if we simply 
add another set of parentheses to the expression alertThenReturn();:

alertThenReturn()();
// alerts 'Message 1!' then alerts 'Message 2!'

Notice the double set of parentheses (i.e. ()()) in that function call! 
The first pair of parentheses executes the alertThenReturn() function. 
The return value of this invocation is a function, which then gets 
invoked by the second pair of parentheses!

const returnsAFunction = function () {
          return function () {
                    console.log('Hello from inside a function');
          };
};

const newFunction = returnsAFunction();

newFunction();

returnsAFunction()();








*/ 