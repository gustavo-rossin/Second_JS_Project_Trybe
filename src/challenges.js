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
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let contagemHighest = 0;
  for (let index = 0; index < array.length; index += 1) {
    // let verificaNumero = array[index];
    // for (let index2 in array) {
    if (array[index] >= maiorNumero) {
      maiorNumero = array[index];
      contagemHighest += 1;
    } else contagemHighest = 0;
  }
  // }
  return contagemHighest;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 0, 2));
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
