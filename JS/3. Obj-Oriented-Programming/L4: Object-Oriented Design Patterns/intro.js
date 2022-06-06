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







*/ 
