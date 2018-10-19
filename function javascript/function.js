
//parameters --formal parameters
var greetings = function (name) {
    console.log ("Hello " + name);
};

//actual parameter
greetings("Fred");
greetings("Barney");
greetings ("Betty");
greetings ();

//another example--addition

var sum = function (a,b) {
    var total = a + b;
    return (total);
}


var result = sum (3,4);
console.log ("3 + 4= ", result);


//another example--division

var div = function (a,b) {
    return (a / b);
}

var moreResult = div 
    ( sum (3.4),    
    sum (6,7)
);

console.log ('(3 + 4)/(6 + 7) = ', moreResult);


