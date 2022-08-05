'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // opcion 1
  num = num.split('').reverse();
  let suma = 0;
  for(let i=0; i<num.length; i++){
    suma += Math.pow(2, i) * parseInt(num[i]); 
  }
  return suma;
  // opcion 2
  // return parseInt(num, 2)
}

function DecimalABinario(num) {
  // tu codigo aca
  // opcion 1
  let resultado = [];
  while(num > 0){
    resultado.push(num%2);
    num = Math.floor(num/2);
  }
  return resultado.reverse().join('');

  // opcion2
  // return num.toString(2)
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}