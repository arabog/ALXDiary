/*
1
function Item(name, amountInStock, price) {
          this.name = name;
          this.amountInStock = amountInStock;
          this.price = price;

          this.purchase = function() {
                    this.amountInStock = this.amountInStock - 1;
          }
}

let biscuit = new Item("biscuit", 100, 1.99)

for(let i= 0; i< 10; i++) {
          biscuit.purchase()
}

console.log(biscuit.amountInStock) //90

2.
class Tree {
          constructor(leaves = 5, size) {
                    this.leaves = leaves;
                    this.size = size;
          }
}

class Maple extends Tree {
          constructor(leafColor, leaves, size) {
                    super(leaves, size);

                    this.leafColor = leafColor;
          }
}

let sage = new Maple("yellow", undefined, 10);

console.log(sage)
Maple { leaves: 5, size: 10, leafColor: 'yellow' }


3.
var donuts = [
          {type: "Jelly", cost: 1.27},
          {type: "Chocolate", cost: 2.45},
          {type: "Cider", cost: 1.59},
          {type: "Boston", cost: 5.99}
]

donuts.forEach(function(elem) {
          return elem.type;          undefined
          console.log(elem.type)        Jelly Chocolate Cider Boston
})

4.
function Train() {
          this.sound = "Cho Cho";
}


let Magnum = new Train();
let Sonic = new Train();

Train.prototype = {speed: 350}

function incrementSpeed(train) {
          return train.speed + 50;
}


let result = incrementSpeed(Magnum)
console.log(result) // NaN

5.
console.log("5" == 5)
// Type Coercion

6.
Which is not a valid data type in JavaScript? float 

7.
Which of the ffg is the correct way to create an obj in Js?
var details = {name: "ahmed", age: 25}

8.
var attempts =30;

while(attempts > 10) {
          console.log("Printing attempt. ");
          attempts--;
          break;
}

How many times will d print statement inside the while loop run? 1

9.
U r in communicatn with a website and ur connection is secured by
SSL/TLS. What info can ur ISP provider see abt ur communicatn
with this website?
Site's domain

10.
How can a Web Application Firewall(WAF) help mitigate a 
Distributed Denial of Service(DDoS) attack?
By filtering malformed packets

11.
What file can be replaced when a network has a DNS server?
Hosts

12.
Which of these following HTTP methods can be used to access
metadata for a resource?
HEAD
*/ 
