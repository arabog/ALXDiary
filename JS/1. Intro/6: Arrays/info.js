/*
The numbering of the array order starts at 0 -- not at 1

You can even store an array in an array to create a nested array!

// creates a `arraysInArrays` array with three arrays
const arraysInArrays = [
          [1, 2, 3], 
          ["Julia", "James"], 
          [true, false, true, false]
];

-: Accessing Array Elements
Elements and Indexes
An element is an individual piece of data in an array.
Each element in the array is numbered, starting with 0. 
This number is called the index.
The index allows us to access the element's position in the array.

Primitive vs. Object Types in JavaScript
String, Number, Boolean, undefined and null are considered 
Primitive Types in JavaScript. These relatively simple data 
types represent just one value which makes it easy for JavaScript 
to store that value. So when you assign a primitive value to a 
variable, JavaScript actually assigns that value.

Arrays are more complicated because they consist of a list of 
values which makes storage much more complicated. Arrays 
are actually Object types which means that instead of assigning 
all of the values of the list to the array, JavaScript simply 
assigns a reference to where to find the values in the array. 
Even if the values inside the object change, the reference 
address doesn't.

Here's an analogy that might help. Think of a JavaScript array 
as if it were a house. The house has a group of people who live 
inside it. If those people move out, and a new group of people 
moves in, the names of the people inside the house changes, 
but the house's postal address won't.

We use const to declare arrays because JavaScript is assigning 
a reference that points to that array. We can change whatever 
we want inside the array, but we cannot change which array 
the variable points to.

-: Array Properties and Methods
TIP: You can type []. into the JavaScript console for a list of all 
the available Array methods.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



*/ 

