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








*/ 