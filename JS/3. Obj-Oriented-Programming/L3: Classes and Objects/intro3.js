/*
-: Prototypal Inheritance: Subclasses
Subclasses
One of the benefits of implementing inheritance is that it 
allows you to reuse existing code. By establishing inheritance, 
we can subclass, that is, have a "child" object take on most or 
all of a "parent" object's properties while retaining unique 
properties of its own.

Again, inheritance in JavaScript is all about setting up this chain!

The Secret Link
As you know, an object's constructor function's prototype is first 
place searched when the JavaScript engine tries to access a property 
that doesn't exist in the object itself. Consider the following bear 
object with two properties, claws and diet:

const bear = {
          claws: true,
          diet: 'carnivore'
};

We'll assign the following PolarBear() constructor function's 
prototype property to bear:

function PolarBear() { 
          // ...
}

PolarBear.prototype = bear;

Let's now call the PolarBear() constructor to create a new 
object, then give it two properties:

const snowball = new PolarBear();

snowball.color = 'white';
snowball.favoriteDrink = 'cola';

This is how the snowball object looks at this point:

{
          color: 'white',
          favoriteDrink: 'cola'
}

Note that snowball has just two properties of its own: 
color and favoriteDrink. However, snowball also has 
access to properties that don't exist inside it: claws and diet:

console.log(snowball.claws);
// true

console.log(snowball.diet);
// 'carnivore'

As it turns out, the secret link is snowball's __proto__ property 
(note the two underscores on each end). __proto__ is a property 
of all objects (i.e., instances) made by a constructor function, 
and points directly to that constructor's prototype object. Let's 
check out what it looks like!

console.log(snowball.__proto__);

// { claws: true, diet: 'carnivore' }
Since the __proto__ property refers to the same object as 
PolarBear's prototype, bear, comparing them returns true:

console.log(snowball.__proto__ === bear);
// true

It is highly discouraged to reassign the __proto__ property, 
or even use it in any code you write. First, there are 
compatibility issues across browsers. What's more: since the 
JavaScript engine searches and accesses properties along the 
prototype chain, mutating an object's prototype can lead to 
performance issues. 

f you ever just need to review an object's prototype, you can 
still use Object.getPrototypeOf().

What About Just Inheriting the Prototype? 
Let's say we want a Child object to inherit from a Parent object. 
Why shouldn't we just set Child.prototype = Parent.prototype?

First, recall that objects are passed by reference. This means 
that since the Child.prototype object and the Parent.prototype 
object refer to the same object -- any changes you make to 
Child's prototype will also be made to Parent's prototype! We 
don't want children being able to modify properties of their 
parents!

On top of all this, no prototype chain will be set up. What if 
we want an object to inherit from any object we want, not 
just its prototype?

Q: Consider the following:

function GuineaPig (name) {
          this.name = name;
          this.isCute = true;
}

const waffle = new GuineaPig('Waffle');

What does waffle.__proto__ refer to?
GuineaPig.prototype

When the new instance of GuineaPig is created, the special 
property waffle.__proto__ is set to GuineaPig.prototype. 
This secret link allows instances(objs) of the GuineaPig constructor 
to access properties of GuineaPig.prototype. Keep in mind 
that you should never use the __proto__ in any code you write.

Q: Consider the following:
function Car (color, year) {
          this.color = color;
          this.year = year;
}

Car.prototype.drive = function () {
          console.log('Vroom vroom!');
};

const car = new Car('silver', 1988);

What happens when car.drive(); is executed? List the 
following events in the order that they occur:

1. d JS engine searches inside d car obj for a ppty named
drive

2. d JS engine doesn't find drive within d car obje

3. d JS engine dn access d car.__proto__ ppty

4. since d car.__proto__ ppty points to Car.prototype, d
JS engine searches for drive in d prototype

5. bcos Car.prototype.drive is  def ppty, it's returned

6. Finally since drive is invoked as a method on car, d 
value of this is car

Object.create()
There's actually a way for us to set up the prototype of an 
object ourselves: using Object.create(). And best of all, 
this approach lets us manage inheritance without altering 
the prototype!

Object.create() takes in a single object as an argument, 
and returns a new object with its __proto__ property set 
to what argument is passed into it. From that point, you 
simply set the returned object to be the prototype of the 
child object's constructor function. 

First, let's say we have a mammal object with two properties: 
vertebrate and earBones:

const mammal = {
          vertebrate: true,
          earBones: 3
};

Recall that Object.create() takes in a single object as an 
argument, and returns a new object. That new object's 
__proto__ property is set to whatever was originally 
passed into Object.create(). Let's save that returned 
value to a variable, rabbit:

const rabbit = Object.create(mammal);

We expect the new rabbit object to be blank, with no 
properties of its own:

console.log(rabbit);
// {}

However, rabbit should now be secretly linked to mammal. 
That is, its __proto__ property should point to mammal:

console.log(rabbit.__proto__ === mammal);
// true

Great! This means that now, rabbit extends mammal (i.e., rabbit 
inherits from mammal). As a result, rabbit can access mammal's 
properties as if it were its own!

console.log(rabbit.vertebrate);
// true

console.log(rabbit.earBones);
// 3
Object.create() gives us a clean method of establishing 
prototypal inheritance in JavaScript. We can easily extend 
the prototype chain this way, and we can have objects 
inherit from just about any object we want!

function Animal(name) {
          this.name = name
}


Animal.prototype.walk = function() {
          console.log(`${this.name} walks`)
}


function Cat(name) {
          // console.log(this)
          Animal.call(this, name)

          this.lives = 9
}

Cat.prototype = Object.create(Animal.prototype)


Cat.prototype.constructor = Cat;


Cat.prototype.meow = function() {
          console.log("Meow!")
}

const bambi = new Cat("Bambi")

bambi.meow()

bambi.walk()

console.log(bambi.name)

Q: Consider the following:

function Parent() {
          // ...
}

function Child() {
          // ...
}

Child.prototype = Object.create(Parent.prototype);
const child = new Child();

The following is then executed:
child instanceof Parent;

What is printed to the console?
True

Object.create() takes in a single object as an argument, and 
returns a new object. That new object's __proto__ property 
is set to whatever was originally passed into Object.create().

In this quiz, Parent.prototype was the argument passed into 
Object.create(). The return value of the expression 
Object.create(Parent.prototype);was then set to the value 
of theChildconstructor'sprototypeproperty. After that, we 
instantiate a new object:child`.

The expression child instanceof Parent; returns a boolean 
indicating whether the Parent constructor exists in the child 
object's prototype chain. Since we know this is true after 
executing the first expression (i.e., 
Child.prototype = Object.create(Parent.prototype);), 
the console outputs true.

Q: What is true about Object.create()? 
It return a new obj whose __proto__ ppty is set to d 
obj passed into Object.create()

Using Object.create() we can av objs inherit from just
abt any obj we want(i.e not only d prototype)

Object.create() allows us to implemt prototypal inherittance
without mutating d prototype

Summary
Inheritance in JavaScript is all about setting up the prototype 
chain. This allows us to subclass, that is, create a "child" 
object that inherits most or all of a "parent" object's properties 
and methods. We can then implement any of the child object's 
unique properties and methods separately, while still retaining 
data and functionality from its parent.

An object (instance) is secretly linked to its constructor function's 
prototype object through that instance's __proto__ property

To efficiently manage inheritance in JavaScript, an effective 
approach is to avoid mutating the prototype completely. 
Object.create() allows us to do just that, taking in a parent 
object and returning a new object with its __proto__ property 
set to that parent object.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create


-: The Module Pattern
let developer = {
          name: 'Veronika',

          getName: function () {
                    return this.name;
          }
};

We can access the string value 'Veronika' with the getName 
method, as well as directly by accessing the developer object's 
name property:

developer.getName();
// 'Veronika'

developer.name;
// 'Veronika'

However, what happens when we reassign the object's name property?

developer.name = 'Not Veronika';

developer.getName();
// 'Not Veronika'

developer.name;
// 'Not Veronika'

This sort of open access makes developers uncomfortable. 
Since we can directly access and mutate an object's properties, 
we would like a way to implement private properties.

Private Properties: Function
Let's look into another option: using a function. What if 
we create a basic function that just returns an object? 
Does this give the object an adequate level of protection?

function instantiateDeveloper() {
          return {
                    name: 'Veronika',

                    getName: function () {
                              return this.name;
                    }
          };
}

Nothing too surprising -- just a basic function that returns an 
object with two properties: name and getName. Let's go ahead 
and invoke the function and get the returned object. We'll assign 
the returned object to a variable, developer:

let developer = instantiateDeveloper();

As it turns out, the string 'Veronika' is still accessible, because 
the two aforementioned properties still exist in the object being 
returned from instantiateDeveloper():

developer.getName;
// 'Veronika'

developer.name;
// 'Veronika'

Along with direct access, we can mutate and reassign the value 
of the name property as well:

developer.name = 'Not Veronika';

developer.name;
// 'Not Veronika'

Wrapping an object within a function doesn't seem too effective 
either. So, how can we go about making an object's properties 
private?

Recall from earlier lessons that we can use scope and 
closures to create a private state. Let's look at a quick 
refresher:

function myCounter() {
          let count = 0;

          return function () {
                    count += 1;
                    return count;
          };
}

let counter = myCounter();

Note that the myCounter() function closes over the count 
variable. The value of count increments as the function is 
called:

counter();
// 1

counter();
// 2

However, there is no way that any method outside the 
closure itself can access count:

counter.count; 
// undefined

count; 
// undefined

So, closure provides a way to create private data. How can 
we leverage these same techniques -- with scope and closures 
-- to create private properties and methods in an object?

Q: const myName = 'Richard';

function introduceMyself() {
          const you = 'student';

          function introduce(message) {
          // Which variables can be used here?
          }

          return introduce('Hello');
}

Which variables does the nested introduce() function have access to? 
Select all that apply:

introduce() takes in a single parameter, message, as well the 
global variable myname and the you variable contained in 
the parent function, introducemyself().

Q: 
let sodiumChloride = (function(){
          let chemicalFormula = 'NaCl';
          let molarMass = 58.44;

          return {
                    getProperties: function(){
                              console.log(`Formula: ${chemicalFormula}`);
                              console.log(`Molar Mass: ${molarMass} g/mol`);
                    }
          };
})();

When sodiumChloride.getProperties(); is executed, what is 
logged to the console?

by wrapping chemicalformula and molarmass in an immediately
-invoked function expression, those variables are inaccessible 
from the outside world.

The Module Pattern leverages many of the powerful features 
of JavaScript, such as scope, closures, and immediately-invoked 
function expressions (IIFE). 

let person = (function () {
          let name = 'Veronika';

          return  {
                    getName: function () {
                              return name;
                    },

                    setName: function (myName){
                              name = myName;
                    }
          };
})();

person.name;
// undefined
person.getName;
// 'Veronika'

person.setName('Not Veronika');
person.getName;
// 'Not Veronika'

-: The Module Pattern: Recap
let diana = (function () {
          let secretIdentity = 'Diana Prince';

          return {
                    introduce: function () {
                              console.log(`Hi! I am ${secretIdentity}`);
                    }
          };
})();

Recall that one of the key ingredients here is the IIFE! Not only 
does it prevent pollution of the global scope (which hinders the 
chance of variable name collisions) -- the IIFE helps prevent 
access to the secretIdentity variable.

console.log(diana.secretIdentity);
// undefined

And because the returned object's introduce() method retains 
access to its parent function's scope, we are given a public 
interface to interact with secretIdentity:

diana.introduce();
// 'Hi! I am Diana Prince'

Keep in mind, however, that you generally use the Module 
Pattern when you just want one "version" of an object. If 
you're looking to instantiate unique objects that follow a 
certain blueprint, you can always still write and invoke a 
constructor function!

Q: What is true about the Module Pattern? Select all that apply:
The module patter uses closures to create private ppties
The Module Pattern requires the use of IIEF's
Unlike calling a constructor fxn, implemting d Module Pattern
returns just one version of an obj

Summary
Since JavaScript doesn't have private variables, properties, 
or methods built-in, we can leverage the Module Pattern to 
enforce such privacy. At its core, the Module Pattern 
leverages scope, closures, and (commonly) IIFE's to not 
only hide data from external access, but to also provide a 
public interface for such data.


-: The Revealing Module Pattern

let myModule = (function (){
          function privateMethod (message) {
                    console.log(message);
          }

          function publicMethod (message) {
                    privateMethod(message);
          }

          return {
                    publicMethod: publicMethod
          };
})();

let myModule2 = (function () {
          function privateMethod (message) {
                    console.log(message);
          }

          return {
                    publicMethod: function (message) {
                              privateMethod(message);
                    }
          };
})();

The Revealing Module Pattern
The underlying philosophy of the Revealing Module Pattern 
is that, while we still maintain encapsulation (as in the Module 
Pattern), we also reveal certain properties (and methods). 
The key ingredients to the Revealing Module Pattern are:

An IIFE (wrapper)
The module content (variables, methods, objects, etc.)
A returned object literal

Another Example
To bring it all home, let's check out a more complex example:

let person = (function () {
          let privateAge = 0;
          let privateName = 'Andrew';

          function privateAgeOneYear() {
                    privateAge += 1;
                    console.log(`One year has passed! Current age is ${privateAge}`);
          }

          function displayName() {
                    console.log(`Name: ${privateName}`);
          }

          function ageOneYear() {
                    privateAgeOneYear();
          }

          return {
                    name: displayName,
                    age: ageOneYear
          };
})();

In the above snippet, the IIFE has some private data: privateAge, 
privateName, and privateAgeOneYear(). The returned object is 
stored in person and provides a public interface through which 
we can access this data!

Let's first check out what the returned person looks like:

{
          name: displayName,
          age: ageOneYear
};

Note that the name() method reveals the otherwise private 
displayName() function:

console.log(person.name());
// 'My name is Andrew'

However, what happens if we try to access and mutate privateName?

person.privateName = 'Richard';

console.log(person.name());
// 'My name is Andrew'

person.name() still produces the string My name is Andrew! 
Why don't we see the string 'Richard' in the returned string?

Pay close attention to what the first line of code is actually doing: 
it simply adds a privateName property to the person object. It has 
no effect on the privateName variable that exists inside the IIFE 
itself! If we look at the person.name() function, it is using the 
privateName variable that exists inside the IIFE. So even if we 
add a person.privateName property, the person.name() method 
doesn't ever try to access it.

Note that accessing displayName() directly won't be effective, either! 

console.log(person.displayName());
// undefined

Likewise, the Revealing Module Pattern also gives us access to 
the captured privateAge variable, via the returned object literal's 
age() method:

console.log(person.age());
// 'One year has passed! Current age is 1'

console.log(person.age());
// ''One year has passed! Current age is 2'

Q: Which concepts make up the Revealing Module Pattern?

IIFE's, local variables/functions, and a returned object literal
with revealed data make up the structure and syntax of the 
Revealing Module Pattern.

Benefits of the Revealing Module Pattern
When writing your modules, there are a few key advantages 
of using the Revealing Module Pattern. For one, there is 
clarity at the end of the module (i.e., the return statement) as 
to which variables or methods may be accessed publicly. 
Modules may grow large, and this eases readability for other 
developers who read your code.

Along with clear intent of public or private data, the Revealing 
Module Pattern lends itself to consistent syntax as well. In 
contrast, the normal Module Pattern may contain variables 
and functions spread throughout the entire function body.

While it still maintains encapsulation of data, certain variables 
and functions are returned in an object literal.

*/ 

arabog

Babs