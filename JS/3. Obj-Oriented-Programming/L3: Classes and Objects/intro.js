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






*/ 