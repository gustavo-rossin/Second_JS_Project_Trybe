/* eslint-disable complexity */
// Desafio 11
function generatePhoneNumber(telefone) {
  if (telefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (Math.max(...telefone) > 9 || Math.min(...telefone) < 0) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let i = 0; i < 10; i += 1) {
    let repetido = 0;
    for (let j = 0; j <= 10; j += 1) {
      if (telefone[i] === telefone[j]) {
        repetido += 1;
        if (repetido >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  return `(${telefone[0]}${telefone[1]})` + ` ${telefone[2]}${telefone[3]}${telefone[4]}${telefone[5]}${telefone[6]}-${telefone[7]}${telefone[8]}${telefone[9]}${telefone[10]}`;
}
console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  } return false;
} 
console.log(triangleCheck(10, 1, 8));
// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};