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










*/
const mockingbird = {
          title: "To Kill a Mockingbird",

          describe: function() {
                    console.log(`${this.title} is a classic novel`)
          }
}


const pride = {
          title: "Pride and Prejudice",
}

mockingbird.describe.call(pride)

// console.log()