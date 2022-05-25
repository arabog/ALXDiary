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

-: Scope Gotcha I: Shadowing
Scope Can Be Tricky!
Scope can be a tricky subject, especially when you're working in 
both global and function scope.

Shadowing occurs when variables in different scopes have the 
same name. When this happens the variable in the inner scope 
overrides the variable in the outer scope.

Example: scope shadowing

let bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
          bookTitle = 'The Little Prince';
          console.log(bookTitle);
}

displayBookEnglish()
console.log(bookTitle);    

Prints
Le Petit Prince
The Little Prince
The Little Prince

Best Practice: Declare a New Variable
To avoid scope override, always declare a new variable inside 
your function. This prevents JavaScript from reassigning the 
value of the variable in the outer scope.

Example: no shadowing

let bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
          let bookTitle = 'The Little Prince';
          console.log(bookTitle);
}

displayBookEnglish()
console.log(bookTitle);     

Prints
Le Petit Prince
The Little Prince
Le Petit Prince

Q: Without pasting into your console, what do you think this code will print out?
let x = 1;

function addTwo() {
          x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);     //4

The global variable x is assigned the value of 1.
Then, the function addTwo() increments the variable by 2.
Next, the variable is incremented by 1.
Finally, it's printed out using console.log, wc is 4

Q: Without pasting into your console, what do you think this code will print out?

var x = 1;

function addTwo() {
          var x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);               //2

The global variable x is incremented by 1. Since the global variable's 
original value was 1, and it was incremented by 1, console.log will 
print out 2.

The variable assignment inside the function addTwo() only has function 
scope, so its affect is not reflected outside the function.

You may be wondering... Why are we using var in the second quiz?
Great question! There are some interesting implications of block scoping 
that we will cover later in the lesson. If you want a preview, try replacing 
var with let and see what happens when you run the code. We'll explore 
this more when we look into hoisting.

var x = 1;

function addTwo() {
          let x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);  

What You’ve Learned So Far:
If an identifier is declared in global scope, it's available everywhere.

If an identifier is declared in function scope, it's available in the function 
it was declared in (even in functions declared inside the function).

If an identifier is declared in block scope with var, it is available in the 
block and in the outer scope of the block it was declared in.

If an identifier is declared in block scope with let or const, it is only 
available in the block it was declared in.

When trying to access an identifier, the JavaScript Engine will first 
look in the current function. If it doesn't find anything, it will continue 
to the next outer function to see if it can find the identifier there. It will 
keep doing this until it reaches the global scope.

Global identifiers are a bad idea. They can lead to bad variable names, 
conflicting variable names, and messy code.

-: Function Expressions
Remember how you can store anything you want in a variable? Well, 
in JavaScript, you can also store functions in variables. When a 
function is stored inside a variable it's called a function expression.

const catSays = function(max) {
          let catMessage = "";

          for (let i = 0; i < max; i++) {
                    catMessage += "meow ";
          }

          return catMessage;
};

Notice how the function keyword no longer has a name.

It's an anonymous function, a function with no name, and you've 
stored it in a variable called catSays.

And, if you try accessing the value of the variable catSays, 
you'll even see the function returned back to you.

catSays;

Returns:
function(max) {
          let catMessage = "";

          for (let i = 0; i < max; i++) {
                    catMessage += "meow ";
          }

          return catMessage;
}

-: Hoisting
Hoisting is a result of how JavaScript is interpreted by your 
browser. Essentially, before any JavaScript code is executed, 
all function declarations and variables declared with var are 
hoisted, which means they're raised to the top of the function 
scope.

Intuitively, you might think "This code shouldn't work!" because 
we're trying to call findAverage before it is declared:

findAverage(5, 9);

function findAverage(x, y) {
          var answer = (x + y) / 2;
          return answer;
}

But, surprisingly it does work!
Returns 7

in JavaScript we can call a function before we declare it due to 
hoisting. Before any JavaScript code is executed, all function 
declarations and variables declared with var are hoisted to the 
top of their current scope.

So even though the code you write doesn't change, the JavaScript 
engine interprets it as if you wrote it this way:

function findAverage(x, y) {
          var answer = (x + y) / 2;
          return answer;
}

findAverage(5, 9);

Demo Code
Hosting can lead to odd results.
As expected, this code returns a reference error because we 
haven't defined greeting anywhere:

function sayGreeting() {
          console.log(greeting);
}

sayGreeting()
Returns Uncaught ReferenceError: greeting is not defined

To get rid of the error, we can define greeting anywhere 
inside the sayGreeting function, even after we call it:

function sayGreeting() {
          console.log(greeting);
          var greeting;
}

sayGreeting()
Returns undefined

We don't get an error, but we do get undefined. Can we fix this 
by assigning a value to greeting when we declare it? No. This 
code still returns undefined:

function sayGreeting() {
          console.log(greeting);
          var greeting = "hello";
}

sayGreeting()
Returns undefined

This is because with hoisting, the variable declaration is being 
hoisted to the top of the function, but the value of greeting isn't 
assigned until after the console.log statement is run. 
JavaScript is interpreting the code as if it were written like this:

function sayGreeting() {
          var greeting;
          console.log(greeting);
          greeting = "hello";
}

sayGreeting()
Returns undefined

To avoid bugs like this, declare your functions at the top of your 
scripts and declare and assign your variables at the top of your 
functions.

function sayGreeting() {
          var greeting = "hello";
          console.log(greeting);
          greeting 
}

sayGreeting()
Prints Hello

Q: What value will be printed to the console?

sayHi("Julia");     //undefined Julia

function sayHi(name) {
          console.log(greeting + " " + name);
          var greeting;
}

The function declaration is hoisted to the top of its current scope, 
and inside the function, the greeting variable declaration is also 
hoisted to the top of its function scope.

Q: What value will be printed to the console?

sayHi("Julia");     //undefined Julia

function sayHi(name) {
          console.log(greeting + " " + name);
          var greeting = "Hello";
}

The variable declaration is hoisted to the top of current scope 
(the top of the function). Remember that the declaration is 
hoisted, not the assignment. The code inside sayHi is equivalent to:

          var greeting;
          console.log(greeting + " " + name);
          greeting = "Hello";

Q: What value will be printed to the console?

function sayHi(name) {
          var greeting = "Hello";
          console.log(greeting + " " + name);
}

sayHi("Julia");

The variable declaration and assignment are both already at 
the top of the function scope, so the function will print out: 
"Hello Julia"

What About Function Expressions?
Function expressions are not hoisted, since they involve variable 
assignment, and only variable declarations are hoisted. The function 
expression will not be loaded until the interpreter reaches it in the script.

Example: Function Expressions vs Function Declarations
The function expression meow is not hoisted so this code throws an error:

function cat() {
          console.log(meow(2));

          const meow = function (max) {
                    let catMessage = '';

                    for (let i = 0; i < max; i++) {
                              catMessage = 'meow ';
                    }

                    return catMessage;
          };

          function purr() {
                    return 'purrrr!';
          }
}

cat();

Returns Uncaught ReferenceError: Cannot access 'meow' before initialization

The function declaration purr is hoisted so this code runs without error:

function cat() {
          console.log(purr());

          const meow = function (max) {
                    let catMessage = '';

                    for (let i = 0; i < max; i++) {
                              catMessage = 'meow ';
                    }

                    return catMessage;
          };

          function purr() {
                    return 'purrrr!';
          }
}

cat();
Prints purrrr!

Hoisting Is Another Reason to Use let and const Instead of var!
Variables declared with let and const eliminate the issue of variable 
hoisting because they’re scoped to the block, not to the function.

When a variable is declared using let or const inside a block of 
code (denoted by curly braces { }), the variable is stuck in the 
temporal dead zone until the variable’s declaration is processed. 
This sounds scary, but it basically means that the code cannot 
access the variable before it has been declared. If you try, you'll 
get a Reference Error.

Q: What will happen when you run this code?

function getClothing(isCold) {
          if (isCold) {
                    var freezing = 'Grab a jacket!';
          } else {
                    var hot = 'It’s a shorts kind of day.';
                    console.log(freezing);
          }
}

getClothing(false)  //undefined

You realized that while freezing is available because it has been hoisted, 
but its value isn't set unless the JavaScript runs the if part of this code 
block.

Q: What will happen when you run this code?

function getClothing(isCold) {
          if (isCold) {
                    const freezing = 'Grab a jacket!';
          } else {
                    const hot = 'It’s a shorts kind of day.';
                    console.log(freezing);
          }
}

getClothing(false)  //  Uncaught Reference Error

You will get a Reference Error here because freezing is not defined in 
the block that it was called in.

Q: What will be returned when you run this code?

let x = 1;

function addTwo() {
          let x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);

Uncaught Reference Error: Cannont access 'x' bf initialization

This is a demonstration of one of the reasons why it is a 
best practice to declare variables with let or const rather 
than var. JavaScript won't allow you to inadvertently access 
the x in the global scope like it does when you use var.


*/ 


