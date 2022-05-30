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
To create a new, blank (i.e., “empty”) object, you can use 
object literal notation, or the Object() constructor function.

// Using literal notation:
const myObject = {};

// Using the Object() constructor function:
const myObject = new Object();

Adding Properties
const printer = {};

printer.on = true;
printer.mode = 'black and white';

printer['remainingSheets'] = 168;

Likewise, we can add a method to the printer object in a 
similar manner. This time, the value of the property is an 
anonymous (i.e., unnamed) function:

printer.print = function () {
          console.log('The printer is printing!');
};

Great! The complete printer object now looks like the following:

{
          on: true,
          mode: 'black and white',
          remainingSheets: 168,

          print: function () {
                    console.log('The printer is printing!');
          }
}

Removing Properties
Recall that since objects are mutable, not only can we 
modify existing properties (or even add new ones) -- 
we can also delete properties from objects

delete printer.mode;
//  true

this will delete d mode key (along with its value, black and white) 

Passing Arguments
Passing a Primitive
In JavaScript, a primitive (e.g., a string, number, boolean, etc.) 
is immutable. In other words, any changes made to an argument 
inside a function effectively creates a copy local to that function, 
and does not affect the primitive outside of that function.

Check out the following example:

function changeToEight(n) {
          n = 8; // whatever n was, it is now 8... but only in this function!
}

let n = 7;

changeToEight(n);

console.log(n);
// 7
changeToEight() takes in a single argument, n, and changes 
it to 8. However, this change only exists inside the function 
itself. We then pass the global variable n (which is assigned 
the value 7) into the function. After invoking it, n is still equal to 7.

Passing an Object
On the other hand, objects in JavaScript are mutable. 
If you pass an object into a function, Javascript passes 
a reference to that object. Let's see what happens if we 
pass an object into a function and then modify a property:

let originalObject = {
          favoriteColor: 'red'
};

function setToBlue(object) {
          object.favoriteColor = 'blue';
}

setToBlue(originalObject);

originalObject.favoriteColor;
// 'blue'

In the above example, originalObject contains a single property, 
favoriteColor, which has a value of 'red'. We pass originalObject
into the setToBlue() function and invoke it. After accessing 
originalObject's favoriteColor property, we see that the value is 
now 'blue'!

How did this happen? Well, since objects in JavaScript are 
passed by reference, if we make changes to that reference, 
we're actually directly modifying the original object itself!

What's more: the same rule applies when re-assigning an 
object to a new variable, and then changing that copy. 
Again, since objects are passed by reference, the original 
object is changed as well. 

Consider this iceCreamOriginal object, which shows the 
amount of ice cream cones each instructor has eaten:

const iceCreamOriginal = {
          Andrew: 3,
          Richard: 15
};

Let's go ahead and make assign a new variable to iceCreamOriginal. 
We'll then check the value of its Richard property:

const iceCreamCopy = iceCreamOriginal;

iceCreamCopy.Richard;
// 15
As expected, the expression iceCreamCopy.Richard; returns 
15 (i.e., it is the same value as the Richard property in 
iceCreamOriginal). Now, let's change the value in the copy, 
then check the results:

iceCreamCopy.Richard = 99;

iceCreamCopy.Richard;
// 99

iceCreamOriginal.Richard;
// 99
Since objects are passed by reference, making changes to the 
copy (iceCreamCopy) has a direct effect on the original object 
(iceCreamOriginal) as well. In both objects, the value of the 
Richard property is now 99.

Comparing an Object with Another Object
On the topic of references, let's see what happens when 
we compare one object with another object. The 
following objects, parrot and pigeon, have the same 
methods and properties:

const parrot = {
          group: 'bird',
          feathers: true,

          chirp: function () {
                    console.log('Chirp chirp!');
          }
};

const pigeon = {
          group: 'bird',
          feathers: true,

          chirp: function () {
                    console.log('Chirp chirp!');
          }
};

Naturally, one might expect the parrot object and pigeon 
object to be equal. After all, both objects look exactly the 
same! Let's compare parrot and pigeon to find out:

parrot === pigeon;

// false
What's going on here? As it turns out, the expression will 
only return true when comparing two references to exactly 
the same object. Using what we now know about passing 
objects, let's confirm this. To start off, let's create a new 
variable, myBird, and assign it to one of the objects above:

const myBird = parrot;
As we've just learned, myBird not only refers to the same 
object as parrot -- they are the same object! If we make 
any updates to myBird's properties, parrot's properties 
will be updated with exactly the same changes as well. 
Now, the comparison will return true:

myBird === parrot;

// true
So since pigeon is not the same object as myBird or parrot, 
any comparisons between myBird and pigeon will return false:

myBird === pigeon;
// false

Q: Consider the following:

let string = 'orange';

function changeToApple(string) {
          string = 'apple';
}

changeToApple(string);

console.log(string);
// ???
What is logged to the console?


Within changeToApple(), string is assigned to 'apple'. However, 
this change is only relevant within the function; outside, the 
value of string remains 'orange'.

Summary
Objects are commonly created with literal notation, and 
can include properties that point to functions called methods. 
Methods are accessed the same way as other properties of 
objects, and can be invoked the same way as regular 
functions, except they automatically have access to the 
other properties of their parent object.

By default, objects are mutable (with a few exceptions), so 
data within them can be altered. New properties can be 
added, and existing properties can be modified by simply 
specifying the property name and assigning (or re-assigning) 
a value. Additionally, properties and methods of an object 
can be deleted as well with the delete operator, which directly 
mutates the object.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete


-: invoking obj methods
Say that we have a function, sayHello(), which simply logs a 
message to the console:

function sayHello () {
          console.log('Hi there!');
}

Now, say that we also have a developer object with a single property, name:

const developer = {
          name: 'Andrew'
};

If we want to add the sayHello() function into the developer object, we 
can add the same way as we add other new properties: by providing 
property name, then giving it a value. This time, the value of the property 
is a function!

developer.sayHello = function () {
          console.log('Hi there!');
};

This is how the updated developer object looks:

{

          name: 'Andrew',

          sayHello: function () {
                    console.log('Hi there!');
          }
}

Calling Methods
developer.sayHello();
// 'Hi there!'

developer["sayHello"]();
// 'Hi there!'

Passing Arguments Into Methods
If the method takes arguments, you can proceed the same way, too:

const developer = {
          name: 'Andrew',

          sayHello: function () {
                    console.log('Hi there!');
          },

          favoriteLanguage: function (language) {
                    console.log(`My favorite programming language is ${language}`);
          }
};


developer.favoriteLanguage('JavaScript');
// My favorite programming language is JavaScript'

developer["favoriteLanguage"]('JavaScript');


Q: What is true about object methods?
A method is a property of an object whose value is a function. 
Methods are called on objects in the following format: 
object.method().

Q: Write an expression that invokes the alerter() function in 
the following array, myArray:

const myArray = [ function alerter() { alert('Hello!'); } ];
myArray[0]()

Consider writing an expression to first access the single 
element in myArray. Then, you can simply append 
parentheses to invoke the internal function!

Call Methods by Property Name 
We've been using anonymous functions (i.e., functions 
without a name) for object methods. However, naming 
those functions is still valid JavaScript syntax. Consider 
the following object, greeter:

const greeter = {
          greet: function sayHello() {
                    console.log('Hello!');
          }
};

Note that the greet property points to a function with a 
name: sayHello. Whether this function is named or not, 
greet is invoked the same way:

greeter.greet();

// 'Hello!'

A Method Can Access the Object it was Called On
Using this, methods can directly access the object that it 
is called on. Consider the following object, triangle:

const triangle = {
          type: 'scalene',

          identify: function () {
                    console.log(`This is a ${this.type} triangle.`);
          }
};

Note that inside the identify() method, the value this is used. 
When you say this, what you're really saying is "this object" 
or "the object at hand." this is what gives the identify() 
method direct access to the triangle object's properties:

triangle.identify();

When the identify() method is called, the value of this is 
set to the object it was called on: triangle. As a result, 
the identify() method can access and use triangle's type 
property, as seen in the above console.log() expression.

const dog = {
          name: 'Jodi',
          age: 7,

          ageOneYear: function () {
                    this.age += 1;
                    console.log('Current age: ' + this.age);
          },

          woof: function () {
                    console.log(this.name + " says 'woof!'");
          },

          whatIsThis: function () {
                    console.log(this);
          }
};

dog.whatIsThis();

Q:What is true about this?

A value for this is set when a method is invoked on an object, 
and that value refers to that object. Since it is a reserved word, 
it should not be used as any variable name, function name, etc.

Q: Create an object called `chameleon` with two properties:

1. `color`, whose value is initially set to 'green' or 'pink'
2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
if it is 'green', or to 'green' if it is 'pink'

const chameleon = {
          // "color": "green",
          "color": "pink",

          "changeColor": function colorChange() {
                    if(this.color === 'green') {
                              return this.color = 'pink'
                    }else if(this.color === 'pink') {
                              return this.color = 'green'
                    }
          }
}

console.log(chameleon["changeColor"]())

 The value of this
Depending on how a function is called, this can be set to different 
values! Later in this course, we'll take a deep dive into different 
ways that functions can be invoked, and how each approach 
influences the value of this.

Summary
The value of this is determined when a method is invoked, and 
its value is the object on which the method was called

Do you know that the value of this can have different meanings 
outside an object? In the next section, we'll take a close look at 
globals, their relationship with this, and the implications of 
using them.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_methods

https://javascript.info/object-methods#this-in-methods


-: beware of globals




-: Extracting ppties and values




-: Summary
*/ 

Reference and assignment / copy in primitive and non-primitive values?
