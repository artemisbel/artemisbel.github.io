//teacher answer 

var cart = [];
var item = "";
while (item !="done") {
    item = prompt("Add an item");
    if ((item != null) && (item != "")) {
           cart.push(item);
    }
}
cart.pop();
console.log ("Your cart: " , cart)


//my question

var MAXITEMS = 3; or const MAXITEMS = 3; 
var cart =[];
var item = "";

while ((cart.length < MAXITEMS) && (item != "done")) {
    item = prompt ("Add an item")
    if ((item !=null) && (item !="") && (item != "done")) {
        cart.push (item)
    }
}

if (item =="done") {cart.pop()}


// How to 'print' the contents of your cart at the end of the day

console.log ("The contents of your cart are: ")
var counter = 0
while (counter < cart.length) {
    console.info (`${counter + 1}. ${cart[counter]}`);
    counter += 1;
}
      







