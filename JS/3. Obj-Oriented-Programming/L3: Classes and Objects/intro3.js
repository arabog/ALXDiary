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



*/ 

