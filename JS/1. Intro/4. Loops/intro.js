/*
-: Intro to Loops
Loops Repeat Blocks of Code
Conditional statements are one way to control the flow of code -- if 
a certain condition is true, execute this block of code, otherwise, 
execute that other block of code.

Loops are another way to control the flow of code by allowing us 
to execute a block of code multiple times.

-: Parts of a while Loop
Three main pieces of information that any loop should have are:

When to start: The code that sets up the loop — defining the 
starting value of a variable for instance.

When to stop: The logical condition to test whether the loop 
should continue.

How to get to the next item: The incrementing or decrementing 
step — for example, x = x * 3 or x = x - 1

Here's a basic while loop example that includes all three parts.
let start = 0; // when to start

while (start < 10) { // when to stop
          console.log(start);
          start = start + 2; // how to get to the next item
}

Q: Here's a while loop that is supposed to print out the values 
of x from 0 to 5, but there's a bug. What is missing? Hint: there 
may be more than one correct response.

while (x < 6) {
          console.log('Printing out x = ' + x);
}

x never increments and x is never assigned a start value.

let num = 1;

while (num <= 20) {
          if (num % 3 === 0 && num % 5 === 0) {
                    console.log("JuliaJames");
          }

          else if (num % 3 === 0) {
                    console.log("Julia");
          }

          else if (num % 5 === 0) {
                    console.log("James");
          } else {
                    console.log(num);
          }

          num += 1;
}

let num = 99;

while(num <= 99 && num > 0) {
          let prefix1 = (num >= 2) ? "s" : ""

          let prefix2 = (num - 1 == 0) ? "s" : ""
 
          console.log(num + " bottle" + prefix1 + " of juice on the wall! " + num + " bottle" + prefix1 + "  of juice! Take one down, pass it around... " + (num -1) + " bottle" + prefix2 + "  of juice on the wall!")

          num -= 1;
}

anoda soln:

let num = 99;

while (num >=1) {
          // Last iteration. Note occurances of bottle, bottle, bottleS
          if (num === 1) {
                    console.log(num + " bottle of juice on the wall! "
                                        + num + " bottle of juice! Take one down, pass it around... "
                                        + (num-1) + " bottles of juice on the wall!");
          }
          // Second-last iteration. Note occurances of bottleS, bottleS, bottle
          else if (num === 2){
                    console.log(num + " bottles of juice on the wall! "
                                        + num + " bottles of juice! Take one down, pass it around... "
                                        + (num-1) + " bottle of juice on the wall!");
          }
          // All other iterations. Note occurances of bottleS, bottleS, bottleS
          else {
                    console.log(num + " bottles of juice on the wall! "
                                        + num + " bottles of juice! Take one down, pass it around... "
                                        + (num-1) + " bottles of juice on the wall!");
          }

          num = num - 1;
}

let T = 60;

let x = 0;

while (T >= 0) {
          if (T - x == 10) {
                    console.log("Orbiter transfers from ground to internal power")
          }else if (T - x == 29) {
                    console.log("Ground launch sequencer is go for auto sequence start")
          }else if ( T - x == 44) {
                    console.log("Activate launch pad sound suppression system")
          }else if (T - x == 50) {
                    console.log("Activate main engine hydrogen burnoff system")
          }else if (T - x == 54) {
                    console.log("Main engine start")
          } else if (T - x == 0) {
                    console.log("Solid rocket booster ignition and liftoff!")
          }else {
                    console.log("T- " + (T - x) +" seconds")
          }

          T -= 1;
}

// Let us take an iteration variable, that represent the remaining Time in seconds
let n = 60

// While loop with a stop condition
while (n >= 0) {
          if (n === 50) {
          console.log("Orbiter transfers from ground to internal power");
          }
          else if (n === 31) {
          console.log("Ground launch sequencer is go for auto sequence start");
          }
          else if (n === 16) {
          console.log("Activate launch pad sound suppression system");
          }
          else if (n === 10) {
          console.log("Activate main engine hydrogen burnoff system");
          }
          else if (n === 6) {
          console.log("Main engine start");
          }
          else if (n === 0) {
          console.log("Solid rocket booster ignition and liftoff!");
          }
          else{
          console.log("T-"+n+" seconds");
          }

          //Never forget to decrement/increment the iteration variable in a while loop
          // Otherwise, you loop will run infinite iterations
          n = n-1;
}

-: Loop Basics
A loop should always include:

Where to start
When to stop
How to get to the next item
It's easy to forget some of these pieces in a while loop and end up 
with an infinte loop that crashes your browser!

for loops give you more control over the looping process.

for Loops Require a Start, Stop and Step
The for loop explicitly forces you to define the start point, stop point,
 and each step of the loop. In fact, you'll get an Uncaught SyntaxError: 
 Unexpected token ) if you leave out any of the three required pieces.

for ( start; stop; step ) {
          // do this thing
}

-: Nested Loops Add Complexity
Nested loops are just loops inside of other loops. Take a look at 
our demo code:

for (let x = 0; x < 3; x = x + 1) {
          for (let y = 0; y < 2; y = y + 1) {
                    console.log(x + ", " + y);
          }
}

Notice the order that the output is being displayed.

For each value of x in the outer loop, the inner for loop 
executes completely. The outer loop starts with x = 0, 
and then the inner loop completes its cycle with all values of y:

x = 0 and y = 0, 1, 2 // corresponds to (0, 0), (0, 1), and (0, 2)
Once the inner loop is done iterating over y, then the outer 
loop continues to the next value, x = 1, and the whole process 
begins again.

-: Increment, Decrement and Assignment Operators
Increment Operator
The increment operator ++ adds one a to variable, returns a value 
and assigns the incremented value to the variable.

x++ is the postfix operator, which means that it returns the value 
before incrementing it:

let x = 2;
x++ //returns 2 then assigns 3 as the value of x
console.log(x); // logs out 3
++x is the prefix operator, which means that it returns the 
value after incrementing it:

let x = 2;
++x // assigns 31 as the value of x then returns 3
console.log(x); // logs out 3

Decrement Operator
a The decrement operator -- subtracts one from a variable, 
returns a value and assigns the decremented value to the variable.

Similiar to the increment operator, x-- is the postfix operator, 
which means that it returns the value before decrementing it:

let x = 2;
x-- //returns 2 then assigns 1 as the value of x
console.log(x); // logs out 1
--x is the prefix operator, which means that it returns the value 
after decrementing it:

let x = 2;
--x // assigns 1 as the value of x then returns 1
console.log(x); // logs out 1

Assignment Operators
An assignment operator is a shorthand way to peform a 
mathematical operation on a variable and assigns that 
value to the variable.

You can use assignment operators for addition, subtraction, 
multiplication, and division.

// Add y to x
x += y // x = x + y

// Subtract y from x
x -= y // x = x - y

// Multiply x by x
x *= y // x = x * y

// Divide x by y
x /= y // x = x / y








*/ 
