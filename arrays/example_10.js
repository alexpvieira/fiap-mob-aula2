// ES5
var itens = ["🍌", "🐟", "🍰"];
for(var i = 0; i < itens.length; i++) {
    console.log(itens[i]);
}

// ES6
const itens = ["🍌", "🐟", "🍰"];
for (let item of itens) {
    console.log(item);
}