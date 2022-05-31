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


-: Callbacks
A function that is passed as an argument into another function is 
called a callback function.

function callAndAdd(n, callbackFunction) {
          return n + callbackFunction();
}

function returnsThree() {
          return 3;
}

let result = callAndAdd(2, returnsThree);

console.log(result);
// 5

Q: Consider the following two functions:

function each(array, callback) {
          for (let i = 0; i < array.length; i++) {
                    if (callback(array[i])) {
                              console.log(array[i]);
                    }
          }
}

function isPositive(n) {
          return n > 0;
};

The following is then executed:

each([-2, 7, 11, -4, -10], isPositive);
What is outputted to the console?

The each() function takes in two arguments: an array, and callback function. 
The code within comprises of a for loop and a conditional: it first iterates 
through all the values of a supplied array argument, then prints out that 
values only _if_ its callback function returns true.

The isPositive() function returns a boolean depending on the argument 
passed in (i.e., true if the number passed in is positive, and false if not).

As such, when each([-2, 7, 11, -4, -10], isPositive); is executed, the 
each() function iterates through the entire array and only prints out 
values to the console that return true when tested against the callback 
function: 7 and 11.

Array Methods
Where have you probably seen callback functions used? In array methods! 
Functions are commonly passed into array methods and called on elements 
within an array (i.e., the array on which the method was called).

Let's check out a couple in detail:

forEach()
map()
filter()
forEach()

Array's forEach() method takes in a callback function and invokes that 
function for each element in the array. In other words, forEach() allows 
you to iterate (i.e., loop) through an array, similar to using a for loop. 
Check out its signature:

array.forEach(function callback(currentValue, index, array) {
    // function code here
});

The callback function itself receives the arguments: the current 
array element, its index, and the entire array itself.

Let's say we have a simple function, logIfOdd(), that takes in a single 
number and logs it to the console if that number is an odd number:

function logIfOdd(n) {
          if (n % 2 !== 0) {
                    console.log(n);
          }
}

logIfOdd(2);
// (nothing is logged)

logIfOdd(3);
// 3

[1, 5, 2, 4, 6, 3]
We can iterate through the above array with forEach() and simply 
pass it the logIfOdd() function!

[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
          if (n % 2 !== 0) {
                    console.log(n);
          }
});

// 1
// 5
// 3

Let's recap what happened: logIfOdd() is a function and is passed in 
as an argument to forEach(). forEach() then invokes logIfOdd() for 
each element in the array (i.e., [1, 5, 2, 4, 6, 3]), which outputs 1, 5, and 3.

Keep in mind that it's quite common to pass an anonymous function 
as an argument in forEach() as well:

[1, 5, 2, 4, 6, 3].forEach(function (n) {
          if (n % 2 !== 0) {
                    console.log(n);
          }
});

Alternatively, it's possible to simply pass in just the name of the function 
as well (i.e., assuming the function was already defined, of course).

[1, 5, 2, 4, 6, 3].forEach(logIfOdd);

// 1
// 5
// 3
The three different ways shown each produce the same output (i.e., logging 
1, 5, and 3 to the console).





*/ 