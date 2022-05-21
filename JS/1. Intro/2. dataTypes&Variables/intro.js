
/*
The primitive data types of JavaScript.
Numbers
Strings
Booleans,
undefined
null

It's good practice to include code comments to improve code readability.

Strings can be any combination of characters -- letters, numbers 
and even emojis

The JavaScript Udacity style guide for labs and projects suggests 
using single quotes to define string literals

What do you think will happen when you type "Hello" + 5*10 
into the console?
"Hello50"

It’s called implicit type coercion and it's a feature of JavaScript. JavaScript multiplies the 5*10 to become 50 and then changes the number 50 into the string "50", so you're adding together the same data type. This then gets combined with the string "Hello". 

let and const avoid this issue because they are only available in the scope where they are declared.

You can use the String’s charAt() method to access individual characters. For example, quote.charAt(6) 

Escaping characters
In JavaScript, you use the backslash to escape other characters.

"The man whispered, \"please speak to me.\""

Select the string that returns the following output:
"The file located at "C:\\Desktop\My Documents\Roster\names.txt" contains the names on the roster."

"The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster."

 If you want to know the ASCII value of a particular character, you can try running the code below:

// Pick a string. Your string can have any number of characters.
const my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
const ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);


Build a single string that resembles the following joke.

Why couldn't the shoes go out and play?
They were all "tied" up!

const joke = "Why couldn't the shoes go out and play? \n They were all \"tied\" up!"
console.log(joke);

Booleans:
A boolean variable is mainly essential in evaluating the outcome of 
conditionals (comparisons). The result of a comparison is always a 
boolean variable. 

In general cases (regular equality check), a true corresponds to 
number 1, whereas false represents a number 0. 

if (1) {
          console.log("This statement will always execute because conditional is set to 1 i.e., true");
}

if (0) {
          console.log("This statement will NEVER execute because conditional is set to 0 i.e., false");
}

Null, Undefined, and NaN
var x = null;

var x;
console.log(x);     undefined

What is the Difference Between null and undefined?
null refers to the "value of nothing", while undefined refers to the "absence of value".

What is NaN?
NaN stands for "Not-A-Number" and it's often returned indicating an error 
with number operations. For instance, if you wrote some code that performed 
a math calculation, and the calculation failed to produce a valid number, 
NaN might be returned.

// calculating the square root of a negative number will return NaN
Math.sqrt(-10)

// trying to divide a string by 5 will return NaN
"hello"/5

Equality
So far, you’ve seen how you can use == and != to compare numbers 
and strings for equality. However, if you use == and != in situations 
where the values that you're comparing have different data-types, it 
can lead to some interesting results. For example,

"1" == 1            Returns: true

and

0 == false          Returns: true.

The == operator is unable to differentiate 0 from false.

' ' == false
Returns: true. Both the operands on either side of the == operator are
first converted to zero, before comparison.

All of the above three evaluate to true. The reason for such interesting 
outcomes is Type Conversion. In the case of regular comparison, the 
operands on either side of the == operator are first converted to 
numbers, before comparison. Therefore, a ' ', false, and 0 are all 
considered equal. Similarly, a '1' and 1 are also considered equal. 
If we don't want to convert the operands, before comparison, we 
have to use a strict comparison ===

Implicit Type Coercion
JavaScript is known as a loosely typed language.

Basically, this means that when you’re writing JavaScript code, you 
do not need to specify data types. Instead, when your code is 
interpreted by the JavaScript engine it will automatically be 
converted into the "appropriate" data type. This is called implicit 
type coercion and you’ve already seen examples like this before 
when you tried to concatenate strings with numbers.

"julia" + 1

Strongly Typed vs Loosely Typed
A strongly typed language is a programming language that is more 
likely to generate errors if data does not closely match an expected type.

Example of strongly typed programming language code

int count = 1;
string name = "Julia";
double num = 1.2932;
float price = 2.99;

it’s actually considered bad practice to use the == and != 
operators when comparing values for equality

When testing for equality both Type Conversion and 
Strict Equality can influence the result of the expression.






*/