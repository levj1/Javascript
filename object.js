

var coffee = {
    flavor: "espresso",
    temperature: "piping hot",
    ounce: 100,
    milk: true,
    reheat: function(){
        if(coffee.temperature === "cold"){
            coffee.temperature = "piping hot";
            alert("your cofee has been reheated");
        }
    }
};

alert(coffee.ounce);
coffee.temperature = "cold";
coffee.reheat();




var person = {
    name: "James",
    age: 33,
    race: "black", 
    talking: function(){
        alert(person.name + " is talking");
    }
};

console.log(person.talking());