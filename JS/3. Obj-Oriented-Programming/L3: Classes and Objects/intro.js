/*
-: Properties and Methods
classes (i.e., categories) of objects!

-: Constructor Functions
Previously, we have created objects using the object literal notation. 
Likewise, we can even write functions that return objects. There is 
yet another way for us to create objects, and it is the foundation of 
object-oriented JavaScript: the constructor function. 

To instantiate (i.e., create) a new object, we use the new operator 
to invoke the function:
new SoftwareDeveloper();

The first thing to note above is the use of the new keyword. Second, 
note that the name of the constructor function, SoftwareDeveloper(), 
is written with the first letter capitalized to visually distinguish it 
from a regular function.

Constructor Functions: Structure and Syntax
This is what the internals of a constructor function looks like:

function SoftwareDeveloper() {
          this.favoriteLanguage = 'JavaScript';
}

First, rather than declaring local variables, constructor functions 
persist data with the this keyword. The above function will add a 
favoriteLanguage property to any object that it creates, and assigns 
it a default value of 'JavaScript'. Don't worry too much about this 
in a constructor function for now; just know that this refers to the 
new object that was created by using the new keyword in front of 
the constructor function.

One last thing that might seem unusual is that this function 
doesn't seem to return anything! Constructor functions in 
JavaScript should not have an explicit return value (i.e., 
there should not be return statement).

Creating a New Object
As we've seen above, let's use the new operator to create a new object:

let developer = new SoftwareDeveloper();
We've saved the return value of this invocation to the variable developer. 
Let's execute console.log(developer);

function SoftwareDeveloper() {
          this.favoriteLanguage = 'JavaScript';
}

let developer = new SoftwareDeveloper();

console.log(developer)        // SoftwareDeveloper {favoriteLanguage: 'JavaScript'}

Creating Multiple Objects
What's more: we can even use the same constructor function to 
create as many objects as we'd like!

Let's invoke the same SoftwareDeveloper() constructor two more 
times to instantiate two additional objects: engineer and programmer.

let engineer = new SoftwareDeveloper();
let programmer = new SoftwareDeveloper();

console.log(engineer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }

console.log(programmer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' 

Constructor Functions Can Have Parameters
Just like regular functions, one benefit of using constructor 
functions is that they can also accept arguments. Let's update 
the constructor above to accept a single argument, and assign 
the name property to it:

function SoftwareDeveloper(name) {
          this.favoriteLanguage = 'JavaScript';
          this.name = name;
}

In the updated SoftwareDeveloper() function, whatever value is 
passed into the function will be the value of the object's name 
property. Let's check it out:

let instructor = new SoftwareDeveloper('Andrew');

console.log(instructor);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Andrew' }

Great! And as we've seen above, we can create different objects 
using the same constructor. Let's call the same constructor 
function but pass a different argument this time:

let teacher = new SoftwareDeveloper('Richard');

console.log(teacher);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Richard' }

Let's check out another example!
function Hero(name, role) {
          this.name = name;
          this.role = role;

          this.introduce = function () {
                    console.log(`My name is ${this.name} and I am a ${this.role}.`);
          };
}

let taylor = new Hero('Taylor', 'mother');

let riley = new Hero('Riley', 'coach');

taylor.name;
riley.role;

taylor.introduce();
riley.introduce();

Q: Which of the following about constructor functions are true? 
Constructor functions
must be invoked with new
are used to instantiate a new object

A constructor function doesn't directly return anything (i.e., there's 
no explicit return statement), but invoking them with the new operator 
constructs a new object.

Q: Now it's your turn to create a constructor function. Declare a
`Sandwich` constructor function that takes three parameters:

1. `bread` (string) - the type of bread for the sandwich (e.g. "Wheat")
2. `meat` (array) - the meats to put on the sandwich (e.g. `[]` for a vegetarian sandwich!)
3. `vegetables` (array) - the vegetables to include in the sandwich

function Sandwich(bread, meat, vegetables){
          this.bread = bread;
          this.meat = meat;
          this.vegetables = vegetables;
}

const food = new Sandwich("Wheat", ["turkey", "goat meat", "cow meat"], ["efo", "ewedu", "wuro"]);

console.log(food)

Omitting the new Operator 
What happens if you inadvertently invoke a constructor function 
without using the new operator?

function SoftwareDeveloper(name) {
          this.favoriteLanguage = 'JavaScript';
          this.name = name;
}

let coder = SoftwareDeveloper('David');

console.log(coder);
// undefined

What's going on? Without using the new operator, no object was 
created. The function was invoked just like any other regular 
function. Since the function doesn't return anything (except 
undefined, which all functions return by default), the coder 
variable ended up being assigned to undefined.

One more thing to note: since this function was invoked as a 
regular function, the value of this is also drastically different.

Seeing the Object's Constructor (instanceof)
What if we want to see if an object was created with a constructor 
function in the first place? We can use the instanceof (which returns 
a boolean) to give us some insight.

function Developer(name) {
          this.name = name;
}

let dev = new Developer('Veronika');

typeof dev
// "object"

dev instanceof Developer;
// true

Q: Consider the following constructors:

function Finch(name) {
          this.kingdom = 'Animalia';
          this.name = name;
}

function Sparrow(name) {
          this.kingdom = 'Animalia';
          his.name = name;
}

Let's create an instance of each constructor:

const atticus = new Finch('Atticus');
const jack = new Sparrow('Jack');

What is the result when atticus instanceof Sparrow; is executed?
False

false is returned. Not only is Sparrow not the atticus object's 
constructor function -- the Sparrow object is nowhere to be 
found in atticus's prototype chain.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof


-: The `this` Keyword
this in Constructor Functions
In the previous section, we saw this right inside a constructor function. 
Here's another example:

function Cat(name) {
          this.name = name;

          this.sayName = function () {
                    console.log(`Meow! My name is ${this.name}`);
          };
}

const bailey = new Cat('Bailey');

In the above Cat() constructor, the function sayName references 
this.name. Back in Lesson 1, we saw this used in methods. But in 
Cat()'s case, what exactly does this refer to?

As it turns out, when invoking a constructor function with the new operator, 
this gets set to the newly-created object! Let's check out what the new bailey 
object looks like:

{
          name: 'Bailey',

          sayName: function () {
                    console.log(`Meow! My name is ${this.name}`);
          }
}

In the snippet above, notice that this is outside a constructor function 
(i.e., in a method). As we saw in Lesson 1, when you say this in a 
method, what you're really saying is "this object" or "the object at 
hand." As a result, the sayName() method can use this to access the 
name property of that object! This makes the following method call 
possible:

bailey.sayName();
// 'Meow! My name is Bailey'


When is this Assigned?
A common misconception is that this refers to the object where 
it is defined. This is not the case!

The value of this is actually not assigned to anything until an 
object calls the method where this is used. In other words, the 
value assigned to this is based on the object that invokes the 
method where this is defined. Let's look at an example:

const dog = {
          bark: function () {
                    console.log('Woof!');
          },

          barkTwice: function () {
                    this.bark();
                    this.bark();
          }
};

Let's go ahead and invoke both of dog's methods:

dog.bark();
// Woof!

dog.barkTwice();
// Woof!
// Woof!

We know that when we call dog.bark(); (or dog.barkTwice();) 
a variable this gets set. Since this can access the object it was 
called on, barkTwice can use this to access the dog object, 
which contains the bark method.

But what if we just wrote bark(); instead of this.bark(); in barkTwice? 
The function would have first looked for a local variable named bark 
in the scope of barkTwice. If bark isn't found, it would have looked 
further up the scope chain.

To tie things all together: this.bark(); tells barkTwice to look at dog 
-- the object that the method was called on -- to find bark.

Q: What is true about this?
Using this, methods can access and manipulate an object's ppties
this is a reserved word in JS

A value for this is set when a method is invoked on an object, and 
that value refers to that object. Since it is a reserved word, it 
should not be used as any variable name, function name, etc.

Q: Consider the following constructor function, City:

function City(name, population) {
          this.name = name;
          this.population = population;

          this.identify = function () {
                    console.log(`${this.name}'s population is ${this.population}.`);
          };
}

The following is executed:

const sanFrancisco = new City('San Francisco', 870000);

What is the value of this?
The newly-created object, referenced by sanFrancisco

Depending on how a function is invoked, the value of this is set to 
a different value. 

What Does this Get Set To?
At this point, we've seen this in many different contexts, such as 
within a method, or referenced by a constructor function. Let's 
now organize our thoughts and bring it all together!

There are four ways to call functions, and each way sets this differently.

First, calling a constructor function with the new keyword sets this 
to a newly-created object. 

On the other hand, calling a function that belongs to an object 
(i.e., a method) sets this to the object itself. Recall that earlier, 
the dog object's barkTwice() method was able to access properties 
of dog itself.

Third, calling a function on its own (i.e., simply invoking a 
regular function) will set this to window, which is the global 
object if the host environment is the browser

function funFunction() {
          return this;
}

funFunction();
// (returns the global object, `window`)

The fourth way to call functions allows us to set this ourselves! 

Q: Consider the following object, building:
const building = {
          floors: 5,

          addFloor: function () {
                    this.floors += 1;
          }
};

building.addFloor();
// ???

What is the value of this when building.addFloor(); is executed?
building

Recall that a method can directly access the object on which 
it was called. In this case, it modifies building's floors property 
by incrementing its value by 1.

Q: Consider the following:
function myFunction() {
          console.log("What is the value of 'this'?");
}

myFunction();
// ???
When myFunction(); is executed, what is the value of the this keyword?
window

When a function is invoked (i.e., as a function, rather than as a 
method or with the new operator), this gets set to the global 
object: window. 

Summary:
If a constructor function is called with the new operator, the value 
of this is set to the newly-created object. If a method is invoked on 
an object, this is set to that object itself. And if a function is simply 
invoked, this is set to the global object: window.

Along with all this, there is yet one more set of ways to invoke 
functions: with apply(), and with call(). Both methods share quite 
a few similarities, and they each allow us to specify how we want 
to set this

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this


-: Setting Our Own `this`


*/ 