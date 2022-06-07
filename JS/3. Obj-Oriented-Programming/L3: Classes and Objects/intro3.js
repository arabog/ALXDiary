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





*/ 