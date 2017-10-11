'use strict';


var cat = {name: "Fluffy", color: 'White'};
cat.age = 3
cat.speak = function() {alert("Meeooow")}

// alert(cat.name);
// cat.speak();


// the new keyword
function Cat(name, color){
    this.name = name
    this.color = color
}

var cat = new Cat('Fluffy', 'Blue');

console.log(cat);