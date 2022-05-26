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

Q: What is the length of the following inventory array?

const inventory = [
          ["gold pieces", 25],
          ["belt", 4],
          ["ring", 1],
          ["shoes", 2]
];

Arrays inside an array count as one, unique element in the array.

-: Push
You can use the push() method to add elements to the end of an array.

Notice that the push() method returns the length of the array after an 
element has been added.

-: Pop
Alternatively, you can use the pop() method to remove elements from 
the end of an array.
With the pop() method you don’t need to pass a value; instead, pop() 
will always remove the last element from the end of the array.

Notice that pop() returns the element that has been removed. This 
can be handy if you want to do something with the element that you 
removed from the array.

-: Splice
splice() is another handy method that allows you to add and remove 
elements from anywhere within an array.

While push() and pop() limit you to adding and removing elements
from the end of an array, splice() lets you specify the index location 
to add new elements, as well as the number of elements you'd like to 
delete (if any).

const donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];

// removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); 

Returns: ["chocolate frosted"]
donuts array after calling the splice() method: ["glazed", "chocolate cruller", "creme de leche", "Boston creme", "glazed cruller"]

Following is the syntax of **splice()** method: arrayName.splice(arg1, arg2, item1, ....., itemX); where,

arg1 = Mandatory argument. Specifies the starting index position to 
add/remove items. You can use a negative value to specify the position 
from the end of the array e.g., -1 specifies the last element.

arg2 = Optional argument. Specifies the count of elements to be removed. 
If set to 0, no items will be removed.

item1, ....., itemX are the items to be added at index position arg1
splice() method returns the item(s) that were removed.

We’ve decided to replace some of the donuts in the donuts array.

const donuts = ["cookies", "cinnamon sugar", "creme de leche"];

donuts.splice(-2, 0, "chocolate frosted", "glazed");
What does the donuts array look like after the following changes?

const donuts = ["cookies", "chocolate frosted", "glazed", "cinnamon sugar", "creme de leche"];


-: Rainbow
The standard rainbow colors are usually listed in this order:
const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

const rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here

rainbow.splice(2, 1,  "Yellow", "Green");
rainbow.splice(-1, 0,  "Purple");
console.log(rainbow);

Q: Consider the following array, removeFirstElement:
const removeFirstElement = ["a", "b", "c"];

Let's say that you want to modify (i.e., mutate) removeFirstElement 
by removing the first element within it. Which method(s) could you use?
shift() and splice()

shift() will remove the first element from an array.
splice() can be used if you specify the index of the first element, and 
indicate that you want to delete 1 element.

Keep in mind that the slice() method allows you to create a copy 
of the array between two indices. Though you could just exclude 
the index of the first element, this approach does not directly 
modify a given array.

Q: What method would be best for changing this array into a string?
const turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
join()

You can combine the elements in an array to form a string using the join() method.

-: Array Methods for Looping
Arrays have a set of special methods to help you iterate over and 
perform operations on collections of data. 

The forEach Method
The forEach() method gives you an alternative way to iterate over an 
array, and manipulate each element in the array with an inline function 
expression.

const donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
          donut += " hole";
          donut = donut.toUpperCase();
          console.log(donut);
});

const test = [
          12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
          19, 300, 3775, 299, 36, 209, 148, 169, 299,
          6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
//const miniTest = [12, 29, 11, 3];

test.forEach(function(item) {
          if(item % 3 === 0) {
                    item += 100;
          }

          console.log(item);
})



*/ 
