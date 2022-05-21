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

*/ 


