

//alert("hello world");
var a = 2;
var b = 3;

console.log(grades(12));
FizzBuzz();

// Swich statement
function grades(b){
    switch(b){
        case 1:
            return "Kendal";
            break;
        case 2:
            return  "Wood";
            break;
        default:
            return "other";
            break;
    }
}

// For loop
for(var i = 0; i < 5; i++){
    console.log(i);
}

// array 
var friends = ["Jenny", "Paul", "Junior"];

// function
function SayHello(name){
    console.log("Hello " + name);
}

var x = 0;
while(x < friends.length){
    console.log(SayHello(friends[x]));
    x++;
}



function FizzBuzz(){
    for(var i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0)
        {
            console.log("FizzBuzz");
        }else if(i % 5 === 0)
        {
            console.log("Buzz");
        }else if(i % 3 === 0)
        {
            console.log("Fizz");
        }
    }   
}