// ES5
var itens = ["🍌", "🐟", "🍰"];
for(var i = 0; i < itens.length; i++) {
    console.log(i);
    console.log(itens[i]);
}

// ES6
const itens = ["🍌", "🐟", "🍰"];
for (let i in itens) {
    console.log(i);
    console.log(itens[i]);
}