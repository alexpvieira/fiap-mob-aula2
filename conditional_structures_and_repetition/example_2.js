var num = parseInt(prompt('Digite um número', '0'));

if (num < 10){
  alert('Você digitou um número pequeno');
}
else if (num < 100){
  alert('Você digitou um número médio');
}
else {
  alert('Você digitou um número grande');
}