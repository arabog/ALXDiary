/*
Beware of Globals:
What is this?
Now, let's check out a different example. What do you think will 
be the value of this inside the following code?

function whoThis () {
          this.trickyish = true
}

whoThis();

this and Function Invocation
Let's compare the code from the chameleon object with the whoThis() code.

const chameleon = {
          eyes: 2,

          lookAround: function () {
                    console.log(`I see you with my ${this.eyes} eyes!`);
          }
};

chameleon.lookAround();

function whoThis () {
          this.trickyish = true
}

whoThis();

this and Invocation
How the function is invoked determines the value of this inside the function.

Because .lookAround() is invoked as a method, the value of this inside 
of .lookAround() is whatever is left of the dot at invocation. Since the 
invocation looks like:

chameleon.lookAround();
The chameleon object is left of the dot. Therefore, inside the .lookAround() 
method, this will refer to the chameleon object!

Now let's compare that with the whoThis() function. Since it is called as 
a regular function (i.e., not called as an method on an object), its 
invocation looks like:

whoThis();

When a regular function is invoked, the value of this is the global window object.








*/ 