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





*/ 
