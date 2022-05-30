/*
-: intro
Objects
Fundamentally, an object is a collection of associated key/value pairs.

const car = {
          color: 'red',
          year: 1992,
          isPreOwned: true
};

Let's break this down and see what's going on:

The variable that is assigned to the object is named car.
Curly brackets are used to define the car object.
Individual keys (e,g, color) are associated with a single 
value ('red' in this case). These key/value pairs are 
connected by a colon (:).

Each distinct key/value pair, known as a property of that 
object, is separated from other properties by a comma (,). 
The car object therefore contains three properties.

Object Property Syntax
You'll commonly find quotation marks omitted from property 
names. Certain situations require them to be included, 
especially if the property name:

Is a reserved word (e.g., for, if, let, true, etc.).
Contains spaces or special characters that cannot appear 
in a variable name (i.e., punctuation other than $, and _ 
-- most accented characters).

Q: Which of the following are features or characteristics 
of an object? Select all that apply:
key/value pairs
{curly braces}
unordered

Accessing Object Properties
There are two ways: dot notation and square bracket notation.

Consider this bicycle object:

const bicycle = {
          color: 'blue',
          type: 'mountain bike',
          wheels: {
                    diameter: 18,
                    width: 8
          }
};

Using dot notation, we can access bicycle's color property by writing:

bicycle.color;

Similarly, we can access the same property using square bracket 
notation by writing:

bicycle['color'];

What about nested objects? To retrieve the value of the width 
property of the object contained within bicycle's wheels property, 
you can do the following with dot notation:

bicycle.wheels.width;

And with square bracket notation:

bicycle['wheels']['width'];

Dot Notation Limitations
Note that while dot notation may be easier to read and write, 
it can't be used in every situation. For example, let's say there's 
a key in the above bicycle object that is a number. An expression 
like bicycle.1; will cause a error, while bicycle[1]; returns the 
intended value:

Another issue is when variables are assigned to property names. 
Let's say we declare myVariable, and assign it to the string 'color':

const myVariable = 'color';

bicycle[myVariable]; returns 'blue' because the variable 
myVariable gets substituted with its value (the string 'color') 
and bicycle['color']'s value is 'blue'. However, bicycle.myVariable; 
returns undefined:

It may seem odd, but recall that all property keys in a JavaScript 
object are STRINGS, even if the quotation marks are omitted. With 
dot notation, the JavaScript interpreter looks for a key within 
bicycle whose value is 'myVariable'. Since there isn't such a key 
defined in the object, the expression returns undefined

Summary
In JavaScript, an object is an unordered collection of properties. 
Each property consists of a key/value pair, and can reference either 
a primitive (e.g., strings, numbers, booleans, etc.) or another object. 
Unlike elements in an array, which are accessed by a numeric index, 
properties in objects are accessed by their key name using either 
square bracket notation or dot notation. 

https://www.udacity.com/course/intro-to-javascript--ud803

https://mathiasbynens.be/notes/javascript-properties

https://mathiasbynens.be/notes/javascript-identifiers

https://mathiasbynens.be/notes/javascript-identifiers-es6


-: create and modify ppties




-: invoking obj methods





-: beware of globals




-: Extracting ppties and values




-: Summary
*/ 