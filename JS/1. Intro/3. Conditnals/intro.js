/*
We Write Code to Solve Problems
When you write code, you break down problems into steps that are 
executed by a computer. These steps are known as an algorithm.

Example: Purchase Algorithm

Think about the steps you need to take to decide whether to 
purchase an item.

Do I want the item?
Do I have enough money to purchase the item?
If the answer to both questions is yes, you will purchase the item. 
The process you went through to solve that problem, and the steps 
you took in order to do so, is at the heart of writing code.


Solving the Problem: Do I purchase the hammer?
To answer that question we need to know:

How much money do I have?
How much does the hammer cost?


if (/* this expression is true ) {
          // run this code
} else {
          // run this code
}

The value inside the if statement is always converted to true 
or false. Depending on the value, the code inside the if 
statement is run or the code inside the else statement is run, 
but not both. The code inside the if and else statements are 
surrounded by curly braces {...} to separate the conditions 
and indicate which code should be run.

Curly braces are not necessary if you have only one line of 
code to execute following an if or else statement. They are 
necessary if you have more than one line of code to execute.

Problems Aren't Always Simple
With most problem there's more things to consider before you 
can actually solve the problem.

Example: Deciding what to do this weekend
Julia's plan is to hang out with her friend Colt at the park.

For Julia's plans to work:
Colt must be available
The weather must be nice

In JavaScript we can represent complex problems by combining 
logical expressions with special operators called logical operators.

Logical operators
Logical operators can be used in conjunction with boolean values 
(true and false) to create complex logical expressions.

By combining two boolean values together with a logical operator, 
you create a logical expression that returns another boolean value.

||	Logical OR	value1 || value2	Returns true if either 
                                        value1 or value2 (or even both!) evaluates 
                                        to true
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
const balance = 320;
const checkBal = true;
const isActive = true;

// your code goes here

if (checkBal) {
          if(isActive && balance > 0) {
                    console.log("Your bal is $" + balance.toFixed(2)) 
          } else if (!isActive) {
                    console.log("Your account is no longer active")
          } else if (isActive && balance ===  0) {
                    console.log("Your account is empty")
          } else {
                    console.log("Your bal is negative. Pls contact bank")
          }

}else {
          console.log("Thank you. Have a nice day!")
}


// change the values of `flavor`, `topping`, and `vessel` to test your code
const flavor = "strawberry";
const topping = "sprinkles";
const vessel = "wafer cone";

// your code goes here
if(flavor === "vanilla" || flavor === "chocolate" 
          && topping === "sprinkles" || topping === "peanuts"
          && vessel === "wafer cone" || vessel === "sugar cone"
) {
          console.log("Great choice! Your ice cream is at the next window.")
} else {
          console.log("Please check our menu and try again.")
}


Let's focus on some more advanced aspects of working with 
conditional statements:

Truthy and falsey values
The ternary operator
The switch statement

Truthy and Falsy
Every value in JavaScript has an inherent boolean value. When 
that value is evaluated in the context of a boolean expression, 
the value will be transformed into that inherent boolean value.

Falsy values
A value is falsy if it converts to false when evaluated in a 
boolean context. For example, an empty String "" is falsy 
because, "" evaluates to false. You already know if...else 
statements, so let's use them to test the truthy-ness of "".

if ("") {
          console.log("the value is truthy");
} else {
          console.log("the value is falsy");
}

Returns: "the value is falsy"

Here’s the list of all of the falsy values:
the Boolean value false
the null type
the undefined type
the number 0
the empty string ""
the odd value NaN (stands for "not a number")

That's right, there are only six falsy values in all of JavaScript!

Truthy values
A value is truthy if it converts to true when evaluated in a boolean 
context. For example, the number 1 is truthy because, 1 evaluates 
to true. Let's use an if...else statement again to test this out:

if (1) {
          console.log("the value is truthy");
} else {
          console.log("the value is falsy");
}

Returns: "the value is truthy"

Here are some other examples of truthy values:

true
42
"pizza"
"0"
"null"
"undefined"
{}
[]

Essentially, if it's not in the list of falsy values, then it's truthy!

-: Ternary Operator
Sometimes, you might find yourself with the following type of conditional.

const isGoing = true;
const color;

if (isGoing) {
          color = "green";
} else {
          color = "red";
}

console.log(color);
Prints: "green"

TIP: Using if(isGoing) is the same as using if(isGoing === true). 
Alternatively, using if(!isGoing) is the same as using if(isGoing === false).

The ternary operator provides you with a shortcut alternative 
for writing lengthy if...else statements.

conditional ? (if condition is true) : (if condition is false)

For example, you can rewrite the example code above as:
const isGoing = true;
const color = isGoing ? "green" : "red";
console.log(color);




*/ 



 


