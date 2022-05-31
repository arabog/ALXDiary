/*
Beware of Globals:
What is this?
Now, let's check out a different example. What do you think will 
be the value of this inside the following code?

function whoThis () {
          this.trickyish = true
}

whoThis();

this and Function Invocation
Let's compare the code from the chameleon object with the whoThis() code.

const chameleon = {
          eyes: 2,

          lookAround: function () {
                    debugger
                    console.log(`I see you with my ${this.eyes} eyes!`);
          }
};

chameleon.lookAround();

function whoThis () {
          debugger
          this.trickyish = true
}

whoThis();

this and Invocation
How the function is invoked determines the value of this inside the function.

Because .lookAround() is invoked as a method, the value of this inside 
of .lookAround() is whatever is left of the dot at invocation. Since the 
invocation looks like:

chameleon.lookAround();
The chameleon object is left of the dot. Therefore, inside the .lookAround() 
method, this will refer to the chameleon object!

Now let's compare that with the whoThis() function. Since it is called as 
a regular function (i.e., not called as an method on an object), its 
invocation looks like:

whoThis();

When a regular function is invoked, the value of this is the global window object.

The window Object
If you haven't worked with the window object yet, this object is provided 
by the browser environment and is globally accessible to your JavaScript 
code using the identifier, window. This object is not part of the JavaScript 
specification (i.e., ECMAScript); instead, it is developed by the W3C.

This window object has access to a ton of information about the page itself, 
including:

The page's URL (window.location;)
The vertical scroll position of the page (window.scrollY')
Scrolling to a new location (window.scroll(0, window.scrollY + 200); 
to scroll 200 pixels down from the current location)
Opening a new web page (window.open("https://www.udacity.com/");)

Q: You've seen what this refers to in chameleon.lookAround(); and in whoThis(). 
Carefully review this code:

const car = {
          numberOfDoors: 4,

          drive: function () {
                    console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
          }
};

const letsRoll = car.drive;             pay attention to how ds code is written

letsRoll();

What does you think this refers to in the code above?

Ans: The window object

Even though car.drive is a method, we're storing the function itself in 
the a variable letsRoll. Because letsRoll() is invoked as a regular 
function, this will refer to the window object inside of it.

Remember that the value of this is determined by how the function is invoked.

Global Variables are Properties on window
Since the window object is at the highest (i.e., global) level, an interesting 
thing happens with global variable declarations. Every variable declaration 
that is made at the global level (outside of a function) automatically becomes 
a property on the window object!

Here we can see that the currentlyEating variable is set to 'ice cream'. 
Then, we immediately see that the window now has a currentlyEating 
property! Checking this property against the currentlyEating variable 
shows us that they are identical.

var currentlyEating = 'ice cream';

window.currentlyEating === currentlyEating
// true

Globals and var, let, and const
The keywords var, let, and const are used to declare variables in 
JavaScript. var has been around since the beginning of the language, 
while let and const are significantly newer additions (added in ES6).

Only declaring variables with the var keyword will add them to the 
window object. If you declare a variable outside of a function with 
either let or const, it will not be added as a property to the window 
object.

Global Functions are Methods on window
Similarly to how global variables are accessible as properties on the 
window object, any global function declarations are accessible on the 
window object as methods:

function learnSomethingNew() {
          window.open('https://www.udacity.com/');
}

window.learnSomethingNew === learnSomethingNew
// true

Declaring the learnSomethingNew() function as a global function 
declaration (i.e., it's globally accessible and not written inside 
another function) makes it accessible to your code as either 
learnSomethingNew() or window.learnSomethingNew().

Q: Which of the following variables and functions will be available 
on the window object?

var iceCreamEaten = 1;

function consume (numberOfGallons) {
          var result = iceCreamEaten + numberOfGallons;

          function updateTotals (newTotal) {
                    iceCreamEaten = result;
          }

          updateTotals();
}

consume(3);

Only consume() and iceCreamEaten are declared globally, so only 
these two identifiers are accessible as properties on window.


Avoid Globals
Counterintuitively, though, global variables and functions are not 
ideal. There are actually a number of reasons why, but the two we'll 
look at are:
Tight coupling
Name collisions

Tight Coupling
Tight coupling is a phrase that developers use to indicate code that is 
too dependent on the details of each other. The word "coupling" means 
the "pairing of two items together." In tight coupling, pieces of code 
are joined together in a way where changing one unintentionally alters 
the functioning of some other code:

var instructor = 'Richard';

function richardSaysHi() {
          console.log(`${instructor} says 'hi!'`);
}

In the code above, note that the instructor variable is declared globally. 
The richardSaysHi() function does not have a local variable that it uses 
to store the instructor's name. Instead, it reaches out to the global variable 
and uses that. If we refactored this code by changing the variable from 
instructor to teacher, this would break the richardSaysHi() function (or 
we'd have to update it there, too!). This is a (simple) example of 
tightly-coupled code.

Name Collisions
A name collision occurs when two (or more) functions depend on a variable 
with the same name. A major problem with this is that both functions will 
try to update the variable and or set the variable, but these changes are 
overridden by each other!

Let's look at an example of name collision with this DOM manipulation code:

let counter = 1;

function addDivToHeader () {
          const newDiv = document.createElement('div');
          newDiv.textContent = 'div number ' + counter;

          counter = counter + 1;

          const headerSection = document.querySelector('header');
          headerSection.appendChild(newDiv)
}

function addDivToFooter() {
          const newDiv = document.createElement('div');
          newDiv.textContent = 'div number ' + counter;

          counter = counter + 1;

          const headerSection = document.querySelector('footer');
          headerSection.appendChild(newDiv)
}

In this code, we have an addDivToHeader() function and a 
addDivToFooter() function. Both of these functions create a 
<div> element and increment a counter variable.

This code looks fine, but if you try running this code and adding 
a few <div>s to the <header> and <footer> elements, you'll find 
that the numbering will get off! Both addDivToHeader() and 
addDivToFooter() expect a global counter variable to be accessible 
to them -- not change out from under them!

Since both functions increment the counter variable, if the code 
alternates between calling addDivToHeader() and addDivToFooter(), 
then their respective <div>s will not have numerically ascending 
numbers. For example, if we had the following calls:

addDivToHeader();
addDivToHeader();

addDivToFooter();

addDivToHeader();

The developer probably wanted the <header> to have three <div> 
elements with the numbers 1, 2, and 3 and the <footer> element to 
have a single <div> with the number 1. However, what this code 
will produce is a <header> element with three <div> but with the 
numbers 1, 2, and 4 (not 3) and a <footer> element with the number 
3...these are very different results. But it's happening because both 
functions depend on the counter variable and both update it.

So what should you do instead? You should write as few global 
variables as possible. Write your variables inside of the functions 
that need them, keeping them as close to where they are needed as 
possible. Now, there are times when you'll need to write global 
variables, but you should only write them as a last resort.

Summary
The window object is provided by the browser and is not part of 
the JavaScript language or specification. Any global variable 
declarations (i.e., those that use var) or global function declarations 
are added as properties to this window object. Excessive use of global 
variables is not a good practice, and can cause unexpected problems 
to accurately-written code.

https://developer.mozilla.org/en-US/docs/Web/API/Window

https://html.spec.whatwg.org/multipage/window-object.html#the-window-object

http://wiki.c2.com/?GlobalVariablesAreBad

https://en.wikipedia.org/wiki/Coupling_(computer_programming)

https://en.wikipedia.org/wiki/Name_collision



-: Extracting Properties and Values
Object Methods
Do you remember earlier when we used the Object() constructor 
function to create (i.e., instantiate) new objects with the new keyword?

const myNewFancyObject = new Object();

The Object() function actually includes a few methods of its own 
to aid in the development of your applications. These methods are:

Object.keys()
Object.values()

Whether you're building logic in your code, or just writing a utility 
"helper" function, feel free to use these methods as necessary. 

Object.keys() and Object.values()
At its core, an object is just a collection of key/value pairs. What if we 
want to extract only the keys from an object? Say we have this object 
representing a real-life dictionary:

const dictionary = {
          car: 'automobile',
          apple: 'healthy snack',
          cat: 'cute furry animal',
          dog: 'best friend'
};

When Object.keys() is given an object, it extracts just the keys of that 
object, then returns those keys in an array:

Object.keys(dictionary);

// ['car', 'apple', 'cat', 'dog']

ikewise, if we want a list of the values of an object, we can use Object.values():

Object.values(dictionary);
// ['automobile', 'healthy snack', 'cute furry animal', 'best friend']




















*/ 