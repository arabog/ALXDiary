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








*/ 