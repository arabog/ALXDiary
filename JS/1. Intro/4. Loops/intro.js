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





*/ 
