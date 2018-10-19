//images

var mkBottle = function () {
    var imgElem = document.createElement ("img");
    imgElem.src="../images/beer.jpg";
    return (imgElem);
}



//put title in body
var mkTitle = function (text) {
    var h1Elem = document.createElement ("h1");
    h1Elem.textContent = text;
    return (h1Elem);
}

//var title= mkTitle ("99 Bottles of Beer")
//document.body.appendChild(title);



// put image in div
var mkBottles = function (num) {
   var divElem = document.createElement ("div");
   while (num>0) {
       num -=1;
       var beerImg=mkBottle();
       divElem.appendChild (beerImg);
   }
   return (divElem);
}

//var bottles = mkBottles (100);
//document.body.appendChild(bottles);

var beer=99;


/*
while (beer >=1) {
    var bottles = mkBottles (beer);
    document.body.appendChild(bottles);
    beer -=1;
}
*/




//add an event listener to button (anotherline")

var btn = document.querySelector ("#anotherLine")

btn.addEventListener (
    'click',
    function() {
        document.body.appendChild(mkBottles(beer))
        beer -=1
    }
        )











/*
//lyrics

var beer = 99;

while (beer >= 1) {
    console.log (`${beer} bottles of beer on the wall, ${beer} bottles of beer.`)
    console.log (`Take one down and pass it around, ${beer - 1} bottles of beer on the wall`)
    beer -=1; 
} 


//function way
var line1=function(bottles) {
    return (`${bottles} bottles of beer on the wall, ${bottles} bottles of beer`)
}
var line 2=function(bottles) {
    return (`Take one down and pass it around, ${bottles - 1}bottles of beer on the wall`)  
}

while (beer >=1) {
    console.log (line 1(beer))
    console.log (line2(beer))
    console.long(\n)
    beer -=1;
}
*/

