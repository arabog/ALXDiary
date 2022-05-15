
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




*/
