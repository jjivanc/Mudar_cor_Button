var fundo = document.getElementsByClassName('container');
var vermelho = document.getElementById('vermelho');
var amarelo = document.getElementById('amarelo');
var azul = document.getElementById('azul');

vermelho.addEventListener('click', (event) => {
  vermelho.style.backgroundColor = 'red';
  amarelo.style.backgroundColor  = 'red';
  azul.style.backgroundColor = 'red';
  console.log('vermelho');
})
amarelo.addEventListener('click', (event) => {
  amarelo.style.backgroundColor = 'yellow';
  vermelho.style.backgroundColor = 'yellow';
  azul.style.backgroundColor = 'yellow';
  console.log('amarelo');
})
azul.addEventListener('click', (event) => {
  amarelo.style.backgroundColor = 'blue';
  azul.style.backgroundColor = 'blue';
  vermelho.style.backgroundColor = 'blue';
  console.log('azul');
})
