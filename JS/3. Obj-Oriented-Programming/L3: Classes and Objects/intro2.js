/*
-: Setting Our Own `this`
Whether you're invoking a constructor function with 
the new operator, invoking a method on an object, or 
simply invoking a function normally -- each form of 
invocation sets the value of this a bit differently.

But what if we want to set the value of this ourselves? 
JavaScript offers a few methods that can do just that!

More Ways to Invoke Functions
We've seen various ways to invoke functions, each with 
their own implications regarding the value of this. There 
are yet two more ways to invoke a function: either using 
the call() or the apply() methods.

call()
call() is a method directly invoked onto a function. We first 
pass into it a single value to set as the value of this; then we 
pass in any of the receiving function's arguments one-by-one, 
separated by commas.

Consider the following function, multiply(), which simply \
returns the product of its two arguments:

function multiply(n1, n2) {
          return n1 * n2;
}

Let's invoke it in the console:

multiply(3, 4);

// 12
No surprises here! But now -- let's use the call() method to 
invoke the same function:

multiply.call(window, 3, 4);
// 12

We get the same result! How did this happen? We first invoke 
the call() method directly onto the multiply() function. Note 
that the multiply preceding .call(window, 3, 4) is not followed 
by any parentheses. call() will be handling the invocation and 
the multiply() function's arguments itself!

After writing that part, it's time to pass in the arguments! For 
the first argument of the call() method, we pass in the value to 
be set as this, which is window. We then finish up by passing in 
the multiply() function's arguments individually, separated by 
commas.

Once multiply.call(window, 3, 4); executes, the function will be 
invoked with the given value of this, and the result that we see is 12.

Along with invoking regular functions, how do we go upon 
invoking functions attached to objects (i.e., methods)? This 
is where the power of call() really shines. Using call() to invoke 
a method allows us to "borrow" a method from one object -- 
then use it for another object! 

const mockingbird = {
          title: 'To Kill a Mockingbird',

          describe: function () {
                    console.log(`${this.title} is a classic novel`);
          }
};

We can have mockingbird invoke its own describe() method:

mockingbird.describe();
// 'To Kill a Mockingbird is a classic novel'

Using call(), however, the following pride object can utilize 
mockingbird's describe() method:

const pride = {
          title: 'Pride and Prejudice'
};

mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'

Let's break down what happened when mockingbird.describe.
call(pride); is executed!

First, the call() method is invoked onto mockingbird.describe 
(which points to a function). Then, the value of this is passed 
into the call() method: pride.

Since mockingbird's describe() method references this.title, we 
need to access the title property of the object that this refers to. 
But since we've set our own value of this, the value of this.title 
will be accessed from the pride object! 

call() is very effective if you're looking to invoke a function 
in the scope of the first argument passed into it. Likewise, we
can leverage the apply() method to do the same, albeit with 
differences in how arguments are passed into it. 

apply()
Just like call(), the apply() method is called on a function to 
not only invoke that function, but also to associate with it a 
specific value of this. However, rather than passing arguments 
one-by-one, separated by commas -- apply() takes the function's 
arguments in an array. Recall the multiply() function from earlier:

function multiply(n1, n2) {
          return n1 * n2;
}

We used call() and passed in arguments individually:

multiply.call(window, 3, 4);
// 12

Using apply(), however, we collect all of the multiply() function's 
arguments in an array! Then, we pass that entire array into apply():

multiply.apply(window, [3,4])

Great! Note that the first argument in both call() and apply() is 
still window (i.e., the object to bind the value of this to).

Now what about invoking an object's method with apply()? 
Recall the previous mockingbird and pride objects:

const mockingbird = {
          title: 'To Kill a Mockingbird',

          describe: function () {
                    console.log(`${this.title} is a classic novel`);
          }
};


const pride = {
          title: 'Pride and Prejudice'
};

Previously, we used call() to allow the pride object to 
"borrow" mockingbird's describe() method:

mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'

We can achieve the same result using apply()!
mockingbird.describe.apply(pride);
// 'Pride and Prejudice is a classic novel'

Note that the first argument passed into both call() and 
apply() is the same: pride. Since the describe() method 
doesn't take any arguments, the only difference between 
mockingbird.describe.call(pride); and mockingbird.describe.
apply(pride); is just the method! Both approaches produce 
the same result.

-: Choosing One Method Over the Other
Both call() and apply() invoke a function in the scope of the 
first argument passed in them (i.e., the object to be the value 
of this). So when would you choose call() over apply(), or 
vice versa?


IMPT:
call() may be limited if you don't know ahead of time the 
number of arguments that the function needs. In this case, 
apply() would be a better option, since it simply takes an 
array of arguments, then unpacks them to pass along to the 
function. Keep in mind that the unpacking comes at a minor 
performance cost, but it shouldn't be much of an issue.

const cat = {
          name: "Bailey",
};

function sayHello(msg) {
          console.log(`${msg}, ${this.name}`)
}

sayHello.call(cat, "Nice to see you")

sayHello.apply(cat, ["Hello"])

Q: Consider the following Andrew and Richard objects:

const Andrew = {
          name: 'Andrew',

          introduce: function () {
                    console.log(`Hi, my name is ${this.name}!`);
          }
};

const Richard = {
          name: 'Richard',

          introduce: function () {
                    console.log(`Hello there! I'm ${this.name}.`);
          }
};

When Richard.introduce.call(Andrew); is executed, what is 
logged to the console?

First, we access the Richard object's introduce property with 
Richard.introduce (note the lack of parentheses). This returns 
a function. By invoking .call(Andrew) on that returned function, 
we are actually invoking the (returned) function's introduce() 
method -- but with this set to the Andrew object.

As a result, when this.name is called, the Andrew object's 
name is accessed; this outputs 'Hello there! I'm Andrew' 
to the console.

Q:
const andrew = {
          name: 'Andrew'
};
        
function introduce(language) {
          console.log(`I'm ${this.name} and my favorite programming language is ${language}.`);
}

introduce.call(andrew, "JavaScript")

-: Callbacks and this
The value of this has some potential scope issues when 
callback functions are involved, and things can get a 
bit tricky

function invokeTwice(cb) {
          cb();
          cb();
}

const dog = {
          age: 5,

          growOneYear: function () {
                    this.age += 1;
          }
};

dog.growOneYear();
// (this works as expected)

dog.age;
// 6

invokeTwice(dog.growOneYear);
// undefined

dog.age;
// 6
First, invoking growOneYear() works as expected, updating the 
value of the dog object's age property from 5 to 6:

dog.growOneYear();

dog.age; 
// 6
However, passing dog.growOneYear (a function) as an 
argument into invokeTwice() produces an odd result:

invokeTwice(dog.growOneYear);

dog.age;
// 6
You may have expected the value of the age property in dog 
to have increased to 8. Why did it remain 6?

As it turns out, invokeTwice() does indeed invoke growOneYear 
-- but it is invoked as a function rather than a method

If a constructor function is called with the new operator, the 
value of this is set to the newly-created object. If a method is 
invoked on an object, this is set to that object itself. And if a 
function is simply invoked, this is set to the global object: window.

Saving this with an Anonymous Closure
Recall that simply invoking a normal function will set the 
value of this to the global object (i.e., window). This is 
an issue, because we want this to be the dog object!

So how can we make sure that this is preserved?

One way to resolve this issue is to use an anonymous 
closure to close over the dog object:

invokeTwice(function () { 
          dog.growOneYear(); 
});

dog.age;
// 7

Using this approach, invoking invokeTwice() still sets the 
value of this to window. However, this has no effect on the 
closure; within the anonymous function, the growOneYear() 
method will still be directly called onto the dog object! As a 
result, the value of dog's age property increases from 5 to 7.

Since this is such a common pattern, JavaScript provides 
an alternate and less verbose approach: the bind() method.

Saving this with bind()
Similar to call() and apply(), the bind() method allows us 
to directly define a value for this. bind() is a method that 
is also called _on_ a function, but unlike call() or apply(), 
which both invoke the function right away -- bind() returns 
a new function that, when called, has this set to the value 
we give it.

function invokeTwice(callback) {
          callback();
          callback();
}

const dog = {
          age: 5,

          growOneYear: function() {
                    this.age += 1
          }
}

const myGrow = dog.growOneYear.bind(dog);

invokeTwice(myGrow)

console.log(dog.age)

Q: What is true about bind()? Select all that apply:
bind() is a method that is called on a fxn
bind() returns a new fxn dt, wh called, has this set to
d provided object

False: d obj passed into bind() must be d same as d obj
on wc d method was called e/g dob.growOneYear.bind(dog)

Under the hood, bind() returns a new function that can 
be called like a normal function (e.g., myFunction()), 
but inside of it, a method will be invoked method-style 
(e.g., myObject.myMethod()). This has helps us when 
we see potential scope issues with this when passing 
callback functions.

Q: Consider the following:

const driver = {
          name: 'Danica',

          displayName: function () {
                    console.log(`Name: ${this.name}`);
          }
};

const car = {
          name: 'Fusion'
};

Write an expression using bind() that allows us to 
"borrow" the displayName() method from driver 
for the car object to use. Note: The expression itself 
is sufficient (no need to save it to a variable).

const driver = {
          name: 'Danica',

          displayName: function () {
                    console.log(`Name: ${this.name}`);
          }
};

const car = {
          name: 'Fusion'
};

const whichCar = driver.displayName.bind(car)

function callback(cb) {
          return cb()
}

callback(whichCar)

Summary
JavaScript provides three methods that allow us to set 
the value of this for a given function:

call() invokes the function and has arguments passed in 
individually, separated by commas.

apply() is similar to call(); it invokes the function just the same, 
but arguments are passed in as an array.

bind() returns a new function with this bound to a specific 
object, allowing us to call it as a regular function.

Did you know that you can even base objects on other 
objects? This is the main idea behind prototypal 
inheritance, and by implementing it, objects can take 
on properties of other objects. 


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call


-: Prototypal Inheritance
Adding Methods to the Prototype
Recall that objects contain data (i.e., properties), as well as the means to manipulate that data (i.e., methods). Earlier in this Lesson, we simply added methods directly into the constructor function itself:

function Cat(name) {
 this.lives = 9;
 this.name = name;

 this.sayName = function () {
   console.log(`Meow! My name is ${this.name}`);
 };
}
This way, a sayName method gets added to all Cat objects by saving a function to the sayName attribute of newly-created Cat objects.

Finding Properties and Methods on the Prototype Chain
Whether you're accessing a property (e.g., bailey.lives;) or invoking a method (e.g., bailey.meow();), the JavaScript interpreter looks for them along the prototype chain in a very particular order:

First, the JavaScript engine will look at the object's own properties. This means that any properties and methods defined directly in the object itself will take precedence over any properties and methods elsewhere if their names are the same (similar to variable shadowing in the scope chain).
If it doesn't find the property in question, it will then search the object's constructor's prototype for a match.
If the property doesn't exist in the prototype, the JavaScript engine will continue looking up the chain.
At the very end of the chain is the Object() object, or the top-level parent. If the property still cannot be found, the property is undefined.
Previously, we simply defined methods directly in a constructor function itself. Let's see how things look if we defined methods in the constructor's prototype instead

function Dog(age, wgt, name) {
          this.age = age;
          this.wgt = wgt;
          this.name = name;
}

Dog.prototype.bark = function() {
          console.log(`${this.name} says woof!`)
}


dog1 = new Dog(2, 60, 'Java');

dog2 = new Dog(4, 55, 'Jodi');


dog1.bark();

dog2.bark();

Q: For the next quiz, consider the following two code snippets below (i.e., A and B):

// (A)

function Dalmatian (name) {
  this.name = name;

  this.bark = function() {
    console.log(`${this.name} barks!`);
  };
}
// (B)

function Dalmatian (name) {
  this.name = name;
}

Dalmatian.prototype.bark = function() {
  console.log(`${this.name} barks!`);
};

Let's say that we want to define a method that can be invoked on instances (objects) of the Dalmatian constructor function (we'll be instantiating at least 101 of them!).

Which of the preceding two approaches is optimal?

While both approaches work just fine (i.e., any instances created by the constructor function will be able to invoke a bark() method), the second approach is more ideal. By adding methods to the prototype, memory is saved as more Dalmatian objects are instantiated. Along with being more efficient, we also don't have to update all objects individually should be decide to change a method.

Replacing the prototype Object 
What happens if you completely replace a function's prototype object? How does this affect objects created by that function? Let's look at a simple Hamster constructor function and instantiate a few objects:

function Hamster() {
  this.hasFur = true;
}

let waffle = new Hamster();
let pancake = new Hamster();
First, note that even after we make the new objects, waffle and pancake, we can still add properties to Hamster's prototype and it will still be able to access those new properties.

Hamster.prototype.eat = function () {
  console.log('Chomp chomp chomp!');
};

waffle.eat();
// 'Chomp chomp chomp!'

pancake.eat();
// 'Chomp chomp chomp!'
Now, let's replace Hamster's prototype object with something else entirely:

Hamster.prototype = {
  isHungry: false,
  color: 'brown'
};
The previous objects don't have access to the updated prototype's properties; they just retain their secret link to the old prototype:

console.log(waffle.color);
// undefined

waffle.eat();
// 'Chomp chomp chomp!'

console.log(pancake.isHungry);
// undefined
As it turns out, any new Hamster objects created moving forward will use the updated prototype:

const muffin = new Hamster();

muffin.eat();
// TypeError: muffin.eat is not a function

console.log(muffin.isHungry);
// false

console.log(muffin.color);
// 'brown'

const myArray = [1, 2, 3];

myArray.join('');

console.dir(myArray); //TRY this

Checking an Object's Properties
As we've just seen, if an object doesn't have a particular property of its own, it can access one somewhere along the prototype chain (assuming it exists, of course). With so many options, it can sometimes get tricky to tell just where a particular property is coming from! Here are a few useful methods to help you along the way.

hasOwnProperty()
hasOwnProperty() allows you to find the origin of a particular property. Upon passing in a string of the property name you're looking for, the method will return a boolean indicating whether or not the property belongs to the object itself (i.e., that property was not inherited). Consider the Phone constructor with a single property defined directly in the function, and another property on its prototype object:

function Phone() {
  this.operatingSystem = 'Android';
}

Phone.prototype.screenSize = 6;
Let's now create a new object, myPhone, and check whether operatingSystem is its own property, meaning that it was not inherited from its prototype (or somewhere else along the prototype chain):

const myPhone = new Phone();

const own = myPhone.hasOwnProperty('operatingSystem');

console.log(own);
// true
Indeed it returns true! What about the screenSize property, which exists on Phone objects' prototype?

const inherited = myPhone.hasOwnProperty('screenSize');

console.log(inherited);
// false
Using hasOwnProperty(), we gain insight a certain property's origins.

isPrototypeOf()
Objects also have access to the isPrototypeOf() method, which checks 
whether or not an object exists in another object's prototype chain. 
Using this method, you can confirm if a particular object serves as 
the prototype of another object. Check out the following rodent object:

const rodent = {
  favoriteFood: 'cheese',
  hasTail: true
};
Let's now build a Mouse() constructor function, and assign its prototype to rodent:

function Mouse() {
  this.favoriteFood = 'cheese';
}

Mouse.prototype = rodent;

If we create a new Mouse object, its prototype should be the rodent object. Let's confirm:

const ralph = new Mouse();

const result = rodent.isPrototypeOf(ralph);

console.log(result);
// true
Great! isPrototypeOf() is a great way to confirm if an object exists in another object's prototype chain.

Object.getPrototypeOf()
isPrototypeOf() works well, but keep in mind that in order to use it, 
you must have that prototype object at hand in the first place! What 
if you're not sure what a certain object's prototype is? 
Object.getPrototypeOf() can help with just that!

Using the previous example, let's store the return value of Object.getPrototypeOf() in a variable, myPrototype, then check what it is:

const myPrototype = Object.getPrototypeOf(ralph);

console.log(myPrototype);
// { favoriteFood: 'cheese', hasTail: true }
Great! The prototype of ralph has the same properties as the result because they are the same object. Object.getPrototypeOf() is great for retrieving the prototype of a given object.

The constructor Property
Each time an object is created, a special property is assigned to it 
under the hood: constructor. Accessing an object's constructor 
property returns a reference to the constructor function that 
created that object in the first place! Here's a simple Longboard 
constructor function. We'll also go ahead and make a new object,
 then save it to a board variable:

function Longboard() {
          this.material = 'bamboo';
}

const board = new Longboard();

If we access board's constructor property, we should 
see the original constructor function itself:

console.log(board.constructor);

// function Longboard() {
          //   this.material = 'bamboo';
// }

Excellent! Keep in mind that if an object was created 
using literal notation, its constructor is the built-in 
Object() constructor function!

const rodent = {
          favoriteFood: 'cheese',
          hasTail: true
};

console.log(rodent.constructor);
// function Object() { [native code] }

Q:What is true about hasOwnProperty()>
hasOwnProperty() takes in a single argument (i.e. the 
property to be checked), and the method is invoked 
directly on an object.

Q: What is true about isPrototypeOf() or getPrototypeOf()
isPrototypeOf() checks weda or not an obj exists in anoda
obj's prototype chain
isPrototype() takes a single argumts: an obj whose prototype 
chains is to be searched

getPrototypeOf() returns d prototype of d obj passed into it


Q: What is true about constructor property? Select all that apply:
All objects have a constructor property. 
Accessing an obj's constructor ppty returns a reference to 
d constructor fxn dt created dt obj
objs created with literal notatin r constructed with d Object()
constructor fnx

Q: Let's say that we create the following object, capitals, using regular object literal notation:

const capitals = {
  California: 'Sacramento',
  Washington: 'Olympia',
  Oregon: 'Salem',
  Texas: 'Austin'
};
What is returned when Object.getPrototypeOf(capitals); is executed?

A reference to Object's prototype

This one may have been tricky! Keep in mind that since capitals was created with object literal notation, its constructor is the built-in Object() constructor function itself! As such, it maintains a reference to its constructor's prototype. That is,

Object.getPrototypeOf(capitals) === Object.prototype
// true

Summary
Inheritance in JavaScript is when an object is based on another object. Inheritance allows us to reuse existing code, having objects take on properties of other objects.

When a function is called as a constructor using the new operator, the function creates and returns a new object. This object is secretly linked to its constructor's prototype, which is just another object. Using this secret link allows an object to access the prototype's properties and methods as if it were its own. If JavaScript does not find a particular property within an object, it will keep looking up the prototype chain, eventually reaching Object() (top-level parent) if necessary.

We also looked at a few methods and properties that allow use to check the origins and references of objects and their prototypes, namely:

hasOwnProperty()
isPrototypeOf()
Object.getPrototypeOf()
.constructor
In the next section, we'll check out another part of prototypal inheritance in the form of subclassing. What if you want to inherit just a few properties from an object -- but want an object to also have other, specialized properties of their own?

http://www.objectplayground.com/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty


-: Prototypal Inheritance: Subclasses











*/




// console.log()
// console.log()


