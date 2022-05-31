/*
-: First-Class Functions
Functions are First-Class Functions
In JavaScript, functions are first-class functions. This means 
that you can do with a function just about anything that you 
can do with other elements, such as numbers, strings, objects, 
arrays, etc. JavaScript functions can:

Be stored in variables
Be returned from a function.
Be passed as arguments into another function.
Note that while we can, say, treat a function as an object, a key 
difference between a function and an object is that functions can 
be called (i.e., invoked with ()), while regular objects cannot.

const myFunction = function (n1, n2) {
          return n1 * n2;
};

// const myFunction = function howdy(n1, n2) {
//   return n1 * n2;
// };

myFunction(2, 4);
// 8

function average(n1, n2, n3) {
          return (n1 + n2 + n3) / 3;
}

average.length;
// 3

average.name;
// average

We can length, name etc on function wc confirm it being an object

Q: How are JavaScript functions first-class functions? 
Select all that apply:
In many ways, a function in JavaScript can be treated as a value. 
Returning it from a function, storing it in a variable, and even 
passing it in as an argument into another function is perfectly 
allowed!

Functions Can Return Functions
Since we know that functions are first-class functions, we can 
treat a function as a value and just as easily return a function 
from another function! A function that returns another function 
is known as higher-order function. Consider this example:

function alertThenReturn() {
          alert('Message 1!');

          return function () {
                    alert('Message 2!');
          };
}

If alertThenReturn() is invoked in a browser, we'll first see 
an alert message that says 'Message 1!', followed by the 
alertThenReturn() function returning an anonymous function. 
However, we don't actually see an alert that says 'Message 2!', 
since none of the code from the inner function is executed. How 
do we go about executing the returned function?

Since alertThenReturn() returns that inner function, we can 
assign a variable to that return value:

const innerFunction = alertThenReturn();

We can then use the innerFunction variable like any other function!

innerFunction();
// alerts 'Message 2!'

Likewise, this function can be invoked immediately without being 
stored in a variable. We'll still get the same outcome if we simply 
add another set of parentheses to the expression alertThenReturn();:

alertThenReturn()();
// alerts 'Message 1!' then alerts 'Message 2!'

Notice the double set of parentheses (i.e. ()()) in that function call! 
The first pair of parentheses executes the alertThenReturn() function. 
The return value of this invocation is a function, which then gets 
invoked by the second pair of parentheses!

const returnsAFunction = function () {
          return function () {
                    console.log('Hello from inside a function');
          };
};

const newFunction = returnsAFunction();

newFunction();

returnsAFunction()();


-: Callbacks
A function that is passed as an argument into another function is 
called a callback function.

function callAndAdd(n, callbackFunction) {
          return n + callbackFunction();
}

function returnsThree() {
          return 3;
}

let result = callAndAdd(2, returnsThree);

console.log(result);
// 5

Q: Consider the following two functions:

function each(array, callback) {
          for (let i = 0; i < array.length; i++) {
                    if (callback(array[i])) {
                              console.log(array[i]);
                    }
          }
}

function isPositive(n) {
          return n > 0;
};

The following is then executed:

each([-2, 7, 11, -4, -10], isPositive);
What is outputted to the console?

The each() function takes in two arguments: an array, and callback function. 
The code within comprises of a for loop and a conditional: it first iterates 
through all the values of a supplied array argument, then prints out that 
values only _if_ its callback function returns true.

The isPositive() function returns a boolean depending on the argument 
passed in (i.e., true if the number passed in is positive, and false if not).

As such, when each([-2, 7, 11, -4, -10], isPositive); is executed, the 
each() function iterates through the entire array and only prints out 
values to the console that return true when tested against the callback 
function: 7 and 11.

Array Methods
Where have you probably seen callback functions used? In array methods! 
Functions are commonly passed into array methods and called on elements 
within an array (i.e., the array on which the method was called).

Let's check out a couple in detail:

forEach()
map()
filter()
forEach()

Array's forEach() method takes in a callback function and invokes that 
function for each element in the array. In other words, forEach() allows 
you to iterate (i.e., loop) through an array, similar to using a for loop. 
Check out its signature:

array.forEach(function callback(currentValue, index, array) {
    // function code here
});

The callback function itself receives the arguments: the current 
array element, its index, and the entire array itself.

Let's say we have a simple function, logIfOdd(), that takes in a single 
number and logs it to the console if that number is an odd number:

function logIfOdd(n) {
          if (n % 2 !== 0) {
                    console.log(n);
          }
}

logIfOdd(2);
// (nothing is logged)

logIfOdd(3);
// 3

[1, 5, 2, 4, 6, 3]
We can iterate through the above array with forEach() and simply 
pass it the logIfOdd() function!

[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
          if (n % 2 !== 0) {
                    console.log(n);
          }
});

// 1
// 5
// 3

Let's recap what happened: logIfOdd() is a function and is passed in 
as an argument to forEach(). forEach() then invokes logIfOdd() for 
each element in the array (i.e., [1, 5, 2, 4, 6, 3]), which outputs 1, 5, and 3.

Keep in mind that it's quite common to pass an anonymous function 
as an argument in forEach() as well:

[1, 5, 2, 4, 6, 3].forEach(function (n) {
          if (n % 2 !== 0) {
                    console.log(n);
          }
});

Alternatively, it's possible to simply pass in just the name of the function 
as well (i.e., assuming the function was already defined, of course).

[1, 5, 2, 4, 6, 3].forEach(logIfOdd);

// 1
// 5
// 3
The three different ways shown each produce the same output (i.e., logging 
1, 5, and 3 to the console).

map()
Array's map() method is similar to forEach() in that it invokes a 
callback function for each element in an array. However, map() 
returns a new array based on what's returned from the callback 
function.

const names = ['David', 'Richard', 'Veronika'];

const nameLengths = names.map(function(name) {
          return name.length;
});

Let's go over what's happening here. The map() method works on arrays, 
so we have to have an array to start with:

const names = ['David', 'Richard', 'Veronika'];

We call map() on the names array and pass it an anonymous function 
as an argument:

names.map(function(name) {
          return name.length;
});

The function that's passed to map() gets called for each item in the 
names array! The function receives the first name in the array, stores 
it in the name variable and returns its length. Then it does that again 
for the remaining two names.

Remember that the key difference between forEach() and map() is that 
forEach() doesn't return anything, while map() returns a new array with 
the values that are returned from the function:

const nameLengths = names.map(function(name) {
          return name.length;
});

So nameLengths will be a new array: [5, 7, 8]. Again, it is 
important to understand that the map() method returns a new 
array; it does not modify the original array.

 *
 * Using the musicData array and map():
 *   - Return a string for each item in the array in the following format:
 *     <album-name> by <artist> sold <sales> copies
 *   - Store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits

const musicData = [
          { artist: 'Adele', name: '25', sales: 1731000 },
          { artist: 'Drake', name: 'Views', sales: 1608000 },
          { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
          { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
          { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
          { artist: 'Original Broadway Cast Recording', name: 'Hamilton: An American Musical', sales: 820000 },
          { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
          { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
          { artist: 'Rihanna', name: 'Anti', sales: 603000 },
          { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(function(data) {
          return data.name + "by " + data.artist + " sold " + data.sales + " copies"
});

console.log(albumSalesStrings);


filter()
Array's filter() method is similar to the map() method:

It is called on an array
It takes a function as an argument
It returns a new array
The difference is that the function passed to filter() is used as a test, 
and only items in the array that pass the test are included in the new 
array. Consider the following example:

const names = ['David', 'Richard', 'Veronika'];

const shortNames = names.filter(function(name) {
          return name.length < 6;
});

Again, just like with map(), the function that's passed to filter() gets 
called for each item in the names array. The first item (i.e., 'David') 
is stored in the name variable. Then the test is performed -- and this 
is what's doing the actual filtering. First, it checks the length of the 
name. If it's 6 or greater, then it's skipped (and not included in the new 
array!). But, if the length of the name is less than 6, then 
name.length < 6 returns true and the name _is_ included in the new array!

And lastly, just like with map(), the filter() method returns a new array 
instead of modifying the original array:

const shortNames = names.filter(function(name) {
          return name.length < 6;
});

console.log(shortNames);
// ['David']

 * Using the musicData array and filter():
 *   - Return only album objects where the album's name is
 *     10 characters long, 25 characters long, or anywhere in between
 *   - Store the returned data in a new `results` variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content


const musicData = [
          { artist: 'Adele', name: '25', sales: 1731000 },
          { artist: 'Drake', name: 'Views', sales: 1608000 },
          { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
          { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
          { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
          { artist: 'Original Broadway Cast Recording', name: 'Hamilton: An American Musical', sales: 820000 }, 
          { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
          { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
          { artist: 'Rihanna', name: 'Anti', sales: 603000 },
          { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const results = musicData.filter((albumLength) => {
          if(albumLength["name"].length >= 10 && albumLength["name"].length <= 25) {
                    return albumLength
          }
});

console.log(results);

Summary
JavaScript functions can take in a variety of different arguments, 
including strings, numbers, arrays, and objects. Since functions 
are first-class functions, functions can also be passed as arguments 
to a given function. Functions that take in other functions as arguments 
are called higher-order functions. Functions that are passed as arguments 
to other functions are called callback functions.




*/ 