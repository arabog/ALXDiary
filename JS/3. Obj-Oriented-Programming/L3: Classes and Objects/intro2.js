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






*/


// console.log()


