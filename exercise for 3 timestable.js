var count = 0;
var base = parseInt(prompt("Enter your multiplication base"));


//string concatenation
while (count <12) {
    count +=1;
    var result = base*count;
    console.log(base + "x" + count + "=" + result);
}

//or string interpolation
console.log (`${base} x ${count} = ${result}`)


//string concatenation
var msg ="Your multiplication base is" + base;

//or string interpolation
var msg = `Your multiplication base is ${base} `;

console.log(msg);




