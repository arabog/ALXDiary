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


*/ 