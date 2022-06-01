/*
-: Scope:
If you took Intro to Javascript, you learned about block scope vs. 
function scope. These determine where a variable can be seen in 
some code. Computer scientists call this lexical scope.

However, there also exists another kind of scope called runtime 
scope. When a function is run, it creates a new runtime scope. 
This scope represents the context of the function, or more 
specifically, the set of variables available for the function to use.

So what exactly does a function have access to?

Scope
A function's runtime scope describes the variables available for 
use inside a given function. The code inside a function has 
access to:

The function's arguments.
Local variables declared within the function.
Variables from its parent function's scope.
Global variables.

const myName = 'Andrew';

function introduceMyself() {
          const you = 'student';

          function introduce() {
                    console.log(`Hello, ${you}, I'm ${myName}!`);
          }

          return introduce();
}

introduceMyself();
// 'Hello, student, I'm Andrew!'

Or:

const myName = 'Andrew';

function introduceMyself() {
          const you = 'student';

          return function () {
                    console.log(`Hello, ${you}, I'm ${myName}!`);
          }

}

introduceMyself()();
// 'Hello, student, I'm Andrew!'

Q: Consider the following:

const num1 = 5;

function functionOne() {
          const num2 = 10;

          function functionTwo(num3) {
                    const num4 = 35;

                    return num1 + num2 + num3 + num4;
          }

          return functionTwo(0);
}

Which variables does functionTwo() have access to? 
Select all that apply:

All four variables are available for functionTwo() to use. 
Let's break this one down:

num1 is a global variable, accessible anywhere in the 
application code.

num2 is a local variable in functionOne(), the parent function 
in which functionTwo() is defined.

num3 is an argument passed directly to functionTwo().

num4 is a local variable in functionTwo().

JavaScript is Function-Scoped
Any variables defined inside a function are not available 
outside of that function. On the other hand, if there are any 
variables defined inside a block (e.g., within an if statement), 
those variables are available outside of that block.

Let's see an example of how function-scoping in JavaScript works:
var globalNumber = 5;

function globalIncrementer() {
          const localNumber = 10;

          globalNumber += 1;
          return globalNumber;
}

In the example above, globalNumber is outside the function; it is 
a global variable that the globalIncrementer() function has access 
to. globalIncrementer() simply has a local variable (localNumber) 
declared within it, then increments globalNumber by 1 before 
returning the updated value of globalNumber itself.

After calling the function a few times, we see that the value of 
globalNumber has indeed increased each time:

console.log(globalIncrementer());
// 6
console.log(globalIncrementer());
// 7
console.log(globalIncrementer());
// 8

However, when attempting to access localNumber outside of 
the function, we see a error:

console.log(localNumber);

// ReferenceError: localNumber is not defined

Because JavaScript is function-scoped, functions have access 
to all its own variables as well as all the global variables outside 
of it. 

Block-Scoping 
ES6 syntax allows for additional scope while declaring variables 
with the let and const keywords. These keywords are used to declare 
block-scoped variables in JavaScript, and largely replace the need for var.

https://www.udacity.com/course/es6-javascript-improved--ud356


Scope Chain
Whenever your code attempts to access a variable during a function 
call, the JavaScript interpreter will always start off by looking within 
its own local variables. If the variable isn't found, the search will 
continue looking up what is called the scope chain. Let's take a look 
at an example:

function one() {
          two();

          function two() {
                    three();

                    function three() {
                              // function three's code here
                    }
          }
}

one();

In the above example, when one() is called, all the other nested 
functions will be called as well (all the way to three()).

You can visualize the scope chain moving outwards starting at 
the innermost level: from three(), to two(), to one(), and finally 
to window (i.e., the global/window object). This way, the function 
three() will not only have access to the variables and functions 
"above" it (i.e., those of two() and one()) -- three() will also have 
access to any global variables defined outside one()

Variable Shadowing
What happens when you create a variable with the same name as 
another variable somewhere in the scope chain?

JavaScript won't throw an error or otherwise prevent you from 
creating that extra variable. In fact, the variable with local scope 
will just temporarily "shadow" the variable in the outer scope. 
This is called variable shadowing. Consider the following example:

const symbol = '¥';

function displayPrice(price) {
          const symbol = '$';
          console.log(symbol + price);
}

displayPrice('80');
// '$80'

In the above snippet, note that symbol is declared in two places:

Outside the displayPrice() function, as a global variable.
Inside the displayPrice() function, as a local variable.
After invoking displayPrice() and passing it an argument of '80', the 
function outputs '$80' to the console.

How does the JavaScript interpreter know which value of symbol to 
use? Well, since the variable pointing to '$' is declared inside a 
function (i.e., the "inner" scope), it will override any variables of the 
same name that belong in an outer scope -- such as the global variable 
pointing to '¥'. As a result, '$80' is displayed rather than '¥80'.

When the following code runs, what is the output of the first, 
second, and third logs to the console (respectively)?

let n = 8;

function functionOne() {
          let n = 9;

          function functionTwo() {
                    let n = 10;
                    console.log(n);  // First log
          }

          functionTwo();

          console.log(n);  // Second log
}

functionOne();

console.log(n);  // Third log


Summary



*/ 