/*
-: Mixins / Extending Object Functionality with Mixins
An Object is Prototype-linked to a Single Object
Recall that an object's .prototype property points to just one object. 
This is because JavaScript only supports single inheritance. If there 
is an object A and an object B, object C can only be prototype-linked 
to either A _or_ B.

The cat object is prototype-linked to a single object: animal

Q: What is true about the following? Select all that apply:

const aircraft = {
          flies: true
};

const helicopter = Object.create(aircraft);

console.log(helicopter.flies);
// true

Q: What is true about the following? Select all that apply:

const aircraft = {
          flies: true
};

const helicopter = Object.create(aircraft);

console.log(helicopter.flies);
// true

The helicopter obj has no ppty of its own
Helicopter is prototype linked to Aircraft

The given code is just a basic example that reflects prototypal 
inheritance. although the helicopter object is "blank" (i.e., with 
no properties of its own), it is prototype-linked to the aircraft 
object. This allows helicopter to access aircraft's properties as 
if it were its own.

however, it is important to note that the helicopter object's 
__proto__ property can only point to a single object: aircraft. 
so since inheritance in javascript is based on prototype -- 
how do we go about extending properties to an object from 
many different sources? we'll find out shortly!

Mixins
If a JavaScript object can only be prototype-linked to a single 
object, how can we go about extending properties and methods 
from multiple different sources? A mixin allows us to just that!

A mixin is a technique that takes the properties and methods 
from one object and copies them over to another object. In 
other words: a mixin is an technique that provides some 
useful functionality, but is not meant to be added to the 
prototype chain.

All Good Comes from Ice Cream 
Did you know that the term mixin is actually inspired by ice 
cream? The concept of a basic flavor being mixed in with 
several different extra items (e.g. nuts, fudge, cookies, 
sprinkles, etc.) was later adopted by computer scientists in 
object-oriented programming. What a tasty revelation!

Object.assign()
The simplest way to implement the mixin pattern is to use 
Object.assign(). Object.assign() is a method that copies 
an object's own (non-inherited) properties from one or 
more source objects into a target object, then returns the 
updated target object. In other words, Object.assign() adds 
to the target object by merging in the source object(s).

let target = {}
let source = { number: 7}
Object.assign(target, source)
console.log(target)

he first argument passed in, target, is the destination that 
receives the properties copied from the source object, source. 
Note that Object.assign() does not create and return a new 
object; it directly modifies then returns the same target object 
that was passed in! As such, values of existing properties will 
be overwritten, while properties that don't exist in the source 
object will remain intact:

let target = { letter: 'a', number: 11 };
let source = { number: 7 };
Object.assign(target, source);
console.log(target);
// { letter: 'a', number: 7 }

In the above example, the value of target's number property 
was overwritten, while its letter property was ignored.

Multiple Source Objects
Object.assign() can even take in multiple different source objects. 
Let's create a platypus object by mixing in properties from other 
animals:

const duck = {
          hasBill: true
};
const beaver = {
          hasTail: true
};
const otter = {
          hasFur: true,
          feet: 'webbed'
};

const platypus = Object.assign({}, duck, beaver, otter);

console.log(platypus);
// { hasBill: true, hasTail: true, hasFur: true, feet: 'webbed' }

Great! After merging an empty target object (i.e., an object 
without properties of its own) with the properties from duck, 
beaver, and otter, the target object is returned with all four 
properties. It is important to note that the platypus object is 
not prototype-linked to the three other objects! That is, 
platypus doesn't exist in any of the three source objects' 
prototype chains, and vice versa:

platypus.constructor;
// Object()

platypus.isPrototypeOf(duck);
// false

duck.isPrototypeOf(platypus);
// false

platypus.isPrototypeOf(beaver);
// false

beaver.isPrototypeOf(duck);
// false

platypus.isPrototypeOf(otter);
// false

otter.isPrototypeOf(platypus);
// false
const duck = {
          hasBill: true,
          feet: 'orange'
};

const beaver = {
          hasTail: true
};

const otter = {
          hasFur: true,
          feet: 'webbed'
};

const platypus = Object.assign({}, duck, beaver, otter);

wc feet will be printed?

console.log(platypus);
{hasBill: true, feet: 'webbed', hasTail: true, hasFur: true}

Object.assign() Compatibility 
Object.assign() is a great way to copy properties into a given object. 
Keep in mind that since it was introduced to the official specification 
in ES2015 (ES6), you may need to review browser compatibility to 
make sure it'll work in your environment.

Q: Let's modify the above code a bit. What is true after the following?
const duck = {
          hasBill: true
};
const beaver = {
          hasTail: true
};
const otter = {
          hasFur: true,
          feet: 'webbed'
};

const platypus = Object.assign(duck, beaver, otter);
Select all that apply:
platypus is an obj with 4 ppties
duck bcoms an obj with 4 ppties
platypus === duck

The first argument passed into Object.assign() is the target object. 
as such, duck is directly mutated: properties and methods of the 
source objects are mixed into duck entirely. And since objects are 
passed by reference, platypus and duck now point to the same object!

Q: What is true about multiple inheritance or mixins? 
A misin supplies ppties and/ or methods dt can be shared
We can leverage Object.assign() to "mix in" ppties and mthods
4rm a number of objs into a composite obj

Though mixins don't set up the prototype chain, they are an 
ideal way to extend data and functionality from multiple 
source objects.

Summary
A mixin is a technique that copies data and functionality from 
a source object (or source objects) to a target object. We can 
use ES6's Object.assign() to return a target object with 
properties from one or more source objects "mixed into" 
that target object.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


-:  Functional Mixins
Remember Constructor Functions?
We previously used a constructor function to create a new object:

function City(name, population) {
          this.name = name;
          this.population = population;

          this.identify = function () {
                    console.log(`${this.name}'s population is ${this.population}.`);
          };
}

To instantiate, we invoke the function with the new operator:

const sanFrancisco = new City('San Francisco', 870000);
console.log(sanFrancisco);

We can use the same constructor to create multiple objects:
const mountainView = new City('Mountain View', 78000);
console.log(mountainView);

Again, note that we used the new keyword each time to create a 
new object. Let's now shift gears a bit to factory functions which 
produce object instances without the use of the new operator!

Factory Functions
A factory function is a function that returns an object, but 
isn't itself a class or constructor. As such, we invoke a 
factory function as a normal function without using the 
new operator. Using a factory function, we can easily 
create object instances without the complexity of classes 
and constructors!

function Basketball(color) {
          return {
                    color: color,
                    numDots: 3500
          }
}

What's important to note here is that Basketball() returns an object 
directly. This is different from a constructor function which returns 
its object automatically.

Let's invoke Basketball() and check out its output:

const orangeBall = Basketball("orange")
console.log(orangeBall)

A factory function has its name because, just like a chair factory can 
produce chair after chair after chair, a factory function can be used 
over and over to create any number of objects:

const myBB = Basketball('blue and green');
const yourBB = Basketball('purple');
const bouncy = Basketball('neon pink');

Great! Invoking the factory function allows us to compose a single 
object -- all without the use of the new operator. 

function Radio(mode) {
          let on = false;

          return {
                    mode: mode,

                    turnOn: function() {
                              on = true;
                    }

                    isOn: function() {
                              return on;
                    }
          }
}

let fmRadio = Radio("fm")

fmRadio.on()
// undefined

fmRadio.isOn()
// false

fmRadio.turnOn()

Functional Mixins
A functional mixin is a composable factory function that 
receives a _mixin_as an argument, copies properties and 
methods from that mixin, and returns a new object. 

function CoffeeMaker(object) {
          let needsRefill = false;

          return Object.assign({}, object, {
                    pourAll: function () {
                              needsRefill = true;
                    },

                    isEmpty: function () {
                              return needsRefill;
                    }
          });
}

Note that unlike a standard factory function, which takes in 
individual property values as arguments -- the functional 
mixin actually takes in an object itself! Whichever object 
is passed in to the function, is merged with other objects 
passed into Object.assign().

Let's pass the following percolator object into CoffeeMaker() 
and view the results:

const mixedCoffeeMaker = CoffeeMaker({ style: 'percolator' });
The returned mixedCoffeeMaker object now looks like:

{
          style: 'percolator',
          
          pourAll: function () {
                    needsRefill = true;
          },

          isEmpty: function () {
                    return needsRefill;
          }
}

function IceCreamFactory(obj) {
          let isCold = true;

          return Object.assign({}, obj, {
                    melt: function() {
                              isCold = false
                    },

                    isCold: function() {
                              return isCold
                    }
          })
}

let iceCream = IceCreamFactory({})


function ConeFactory(obj) {
          let isDry = true;

          return Object.assign({}, obj, {
                    soggy: function() {
                              isDry = false;
                    },

                    isDry: function() {
                              return isDry;
                    }
          })
}


let iceCreamCone = IceCreamFactory(ConeFactory({}))

console.log(iceCreamCone)

{
          soggy: [Function: soggy],
          isDry: [Function: isDry],
          melt: [Function: melt],
          isCold: [Function: isCold]
}


Q: What is true about factory functions or mixins? 
Just like a constructor fxn, a factory fxn can be called multiple
times to create an obj

functions can copy properties from a mixin, and return a new object.


Summary
A factory function creates objects. It is invoked as normal function,
not with the new operator. Functional mixins take things a bit 
further by accepting a mixin as an argument, copies properties 
and methods from the mixin, and returns a new object.

https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e

https://medium.com/@pyrolistical/factory-functions-pattern-in-depth-356d14801c91


*/ 

