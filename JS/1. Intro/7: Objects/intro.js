/*
-: Intro to Objects
Objects are Powerful!
Objects allow us to wrap up pieces of related data and 
functionality into one single container.

Using typeof
typeof is handy operator that returns the name of the 
data type that follows it.

const umbrella = {
          color: "pink",
          isOpen: false,

          open: function() {
                    if(umbrella.isOpen === true) {
                              return "The umbrella is already opened!";
                    } else {
                              umbrella.isOpen = true;

                              return "Julia opens the umbrella!";
                    }
          }
};

Objects are JavaScript Object types that are assigned by 
reference, not by value.

const umbrella = {
          color: "pink",
          isOpen: false,

          open: function() {
                    if(umbrella.isOpen === true) {
                              return "The umbrella is already opened!";
                    } else {
                              umbrella.isOpen = true;

                              return "Julia opens the umbrella!";
                    }
          },

          close: () => {
                    if(umbrella.isOpen === true) {
                              umbrella.isOpen = false;

                              return "Julia closes the umbrella!";
                    } else {
                              return "The umbrella is already closed!";
                    }
          }


};

console.log(umbrella.open());
console.log(umbrella.close());

-: Objects
What Is An Object?
An object in JS is a data structure that let's you store data about 
a particular thing and helps you keep track of that data using 
a "key".

-: Object-literal notation
const sister = {
          name: "Sarah", 
          age: 23,
          parents: [ "Alice", "Andy" ],
          siblings: ["julia"],
          favoriteColor: "purple",
          pets: true
};

Using sister["parents"] is called bracket notation (because of the 
brackets!) and using sister.parents is called dot notation (because 
of the dot!).

What about methods?
The value in the key:value pair will be a function.

-: Naming Conventions
Using Quotes
Using quotes around property names is valid but not required 
-- but be careful! Sometimes quotes can mask naming problems 
with dot notation.

Problem 1: Using a number as the first character in a property name
const person = {
          "name": "John",
          "age": 55,
          "1stChild": "James",  // USes a number as the first character in a property name
          "2ndChild": "Jarrod",
          "3rdChild": "Alexis"
};

person["1stChild"]; // returns "James"
person.1stChild; // returns Uncaught SyntaxError: Invalid or unexpected token

It would be even better to store the children in an array:
const person = {
          name: "John",
          age: 55,
          children: ["James", "Jarrod","Alexis"]
};

Naming Best Practices
Don't use a number as the first character in a property name
Don't use quotes around key names unless absolutely necessary
Use camelCase when you need a multi-word variable name.

-: Summary of Objects
They have properties (information about the object) 
and methods (functions or capabilities the object has). 

Object literals, methods, and properties
You can define objects using object-literal notation:

const myObj = { 
          color: "orange",
          shape: "sphere",
          type: "food",
          eat: function() { return "yummy" }
};

myObj.eat(); // method
myObj.color; // propert

Naming conventions
Feel free to use upper and lowercase numbers and letters, 
but don't start your property name with a number. You don't 
need to wrap the string in quotes! If it's a multi-word property, 
use camel case. Don't use hyphens in your property names

var savingsAccount = {
          balance: 1000,
          interestRatePercent: 1,

          deposit: function addMoney(amount) {
                    if (amount > 0) {
                              savingsAccount.balance += amount;
                    }
          },

          withdraw: function removeMoney(amount) {
                    var verifyBalance = savingsAccount.balance - amount;

                    if (amount > 0 && verifyBalance >= 0) {
                              savingsAccount.balance -= amount;
                    }
          }
};

const facebookProfile = {
          name: "Babs",
          friends: 14,
          messages: ["Hello", "Hi", "Morning"],

          postMessage: (message) => {
                    return facebookProfile.messages.push(message)
          },

          deleteMessage: (index) => {
                    return facebookProfile.messages.splice(index, 1)
          },

          addFriend: () => {
                    return facebookProfile.friends += 1
          },

          removeFriend: () => {
                    return facebookProfile.friends -= 1
          }
};


// text code
console.log("Name: ", facebookProfile.name);
console.log("Messages: ", facebookProfile.messages);
facebookProfile.postMessage("New message!");
console.log("Messages: ",  facebookProfile.messages);
facebookProfile.deleteMessage(2);
console.log("Messages: ",  facebookProfile.messages);
console.log("Friends: ", facebookProfile.friends);
facebookProfile.addFriend();
console.log("Friends: ", facebookProfile.friends);
facebookProfile.removeFriend();
console.log("Friends: ", facebookProfile.friends);

const donuts = [
          { type: "Jelly", cost: 1.22 },
          { type: "Chocolate", cost: 2.45 },
          { type: "Cider", cost: 1.59 },
          { type: "Boston Cream", cost: 5.99 }
];

const result = donuts.forEach(function(donut) {
          console.log( donut.type + " donuts cost $" + donut.cost + " each")
})


console.log(result)



*/ 
