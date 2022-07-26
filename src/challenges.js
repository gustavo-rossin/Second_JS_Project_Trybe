// Desafio 1

function compareTrue(parametro1, parametro2) {
  if (parametro1 && parametro2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let divisao;
  divisao = string.split(' ');
  return divisao;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(string4) {
  let lastFirst;
  for (let index = 0; index < string4.length; index += 1) {
    lastFirst = string4[index] + ', ' + string4[0];
    // lastFirst = console.log("'" + string4[index] + ', ' + string4[0] + "'");
  }
  return lastFirst;
  // lastFirst = string4.join(' ');
  // return lastFirst;
}
console.log(concatName(['Gustavo', 'Ferreira', 'Andrade', 'Rossin']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
console.log(footballPoints(14,8))
// Desafio 6
function highestCount() {
  // seu código
}

// Desafio 7
function catAndMouse() {
  // seu código
}

// Desafio 8
function fizzBuzz() {
  // seu código
}

// Desafio 9
function encode() {
  // seu código
}
function decode() {
  // seu código
}

// Desafio 10
function techList() {
  // seu código
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
