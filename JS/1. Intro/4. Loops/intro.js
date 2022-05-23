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







*/ 