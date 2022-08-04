'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // opcion 1
  let str = num.toString().split('').reverse().join('');
  let suma = 0;
  for(let i=0; i<str.length; i++){
    suma += parseInt(str[i]) * Math.pow(2, i);
  }
  return suma;
  // opcion 2
  // return parseInt(num, 2)
}

function DecimalABinario(num) {
  // tu codigo aca
  // opcion 1
  let resultado = '';
  while(num >= 1){
    resultado += Math.floor(num)%2;
    num = num/2;
  }
  return resultado.split('').reverse().join('');

  // opcion2
  // return num.toString(2)
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}