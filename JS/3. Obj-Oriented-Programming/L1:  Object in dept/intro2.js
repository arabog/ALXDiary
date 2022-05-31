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






*/ 