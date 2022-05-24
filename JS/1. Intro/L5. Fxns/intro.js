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






*/ 