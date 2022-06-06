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




*/ 