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
The scope of a function includes:
The function's arguments.
Local variables declared within the function.
Variables from its parent function's scope.
Global variables.

Variables in JavaScript are also function-scoped. This means that 
any variables defined inside a function are not available for use 
outside the function, though any variables defined within blocks 
(e.g. if or for) are available outside that block.

Scope can be local scope (either in the function or block). If it's not 
found locally, then it might exist in an outer scope(global).

Closures
Consider the remember() function below:

function remember(number) {
          return function() {
                    return number;
          }
}

const returnedFunction = remember(5);

console.log( returnedFunction() );
// 5

When the Javascript engine enters remember(), it creates a new 
execution scope that points back to the prior execution scope. 
This new scope includes a reference to the number parameter 
(an immutable Number with the value 5). When the engine reaches 
the inner function (a function expression), it attaches a link to the 
current execution scope.

This process of a function retaining access to its scope is called a 
closure. In this example, the inner function "closes over" number. 

As such, a closure is:
The function itself, and
The code (but more importantly, the scope chain of) where the function is declared

Creating a Closure
Every time a function is defined, closure is created for that function. 
Strictly speaking, then, every function has closure! 

Recall that a nested function has access to variables outside of it. 
From what we have learned about the scope chain, this includes 
the variables from the outer, enclosing function itself (i.e., the parent 
function)! These nested functions close over (i.e., capture) variables 
that aren't passed in as arguments nor defined locally, otherwise 
known as free variables.

Closures and Scope
Closures and scope are so closely related that you may even be 
surprised you had been working with them all along! Let's revisit 
an example from the previous section:

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

To recap: myName is a variable defined outside a function, hence 
it's a global variable in the global scope. In other words, myName 
is available for all functions to use.

But let's look closely at the other variable: you. you is referenced 
by introduce(), even though it wasn't declared within introduce()! 
This is possible because a nested function's scope includes variables 
declared in the scope where the function is nested

As it turns out, the introduce() function and its lexical environment 
form a closure. This way, introduce() has access to not only the 
global variable myName, but also the variable you, which was 
declared in the scope of its parent function, introduceMyself().

const number = 3;

function myFunction () {
          const otherNumber = 1;

          function logger() {
                    console.log(otherNumber);
          }

          return logger;
}

const result = myFunction();

result();


Q: What is true about closures? 
A function maintains a reference to its parent's scope
If d reference to a parent function is still accessible, d scope persists

Q: What is the output when result(10); is executed?

function outerFunction() {
          let num1 = 5;

          return function(num2) {
                    console.log(num1 + num2);
          };
}

let result = outerFunction();

result(10);         15

After outerFunction() is returned, it may seem that all of its local 
variables would be allocated back to available memory. As it turns 
out, however, the nested innerFunction() still has access to the 
num1 variable!

Let's take a closer look: outerFunction() returns a reference to 
the inner, nested function. The return value of this invocation is 
saved in result. When this function is called, it maintains access 
to its scope; that is, all the variables it was able to access back 
when it was originally defined. This includes the num1 variable 
in its parent scope. The nested function closes over these variables, 
and those variables persist as long as the reference to the function 
itself exists.

When result(10); is executed, then, the function is still able to 
access num1's value of 5. As a result, 15 is logged to the console

Applications of Closures
To recap, we've seen two common and powerful applications of closures:

Passing arguments implicitly.
At function declaration, storing a snapshot of scope.

Q: Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

function expandArray() {
          let myArray = [1, 1, 1];
          
          return function() {
                    myArray.push(1);
                    return myArray
          }
          
}

const arr = expandArray();
console.log(arr())

Garbage Collection
Let's look at garbage collection in the context of closures. We 
know that the variables of a parent function are accessible to 
the nested, inner function. If the nested function captures and 
uses its parent's variables (or variables along the scope chain, 
such as its parent's parent's variables), those variables will stay 
in memory as long as the functions that utilize them can still be 
referenced.

As such, referenceable variables in JavaScript are not garbage collected!
















*/ 

