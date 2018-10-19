var cust0 = [2, "barney", "barney@gmail.com", "34567"]
var cust1 = [1, "fred", "fred@gmail.com", "12345"]

var fred = {        //object or dictionary
    name: "fred",
    email: "fred@gmail.com",
    phone: 12345,
    age: 50,
    greetings: function () {
        console.log ("Hello, my name is ", this.name) //this is used for reference to keys inside the obj 
    }
}

console.log (fred);
console.log (fred ["name"])
console.log(fred.email)
console.log(fred.name)

//array of the keys
var props = Object.keys(fred);
console.log (props);

var n = 0;
while (n<props.length) {
    console.log ("prop = ", props [n])
    n+=1;
}

//array of the values
var vals = Object.values (fred)
n = 0;
while (n<vals.length) {
    console.log ("vals = ", vals [n])
    n+=1;
}




Object.keys(console)

console.log 






