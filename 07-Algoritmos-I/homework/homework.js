'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factor = 2;
  let arr = [1];
  while(num > 1){
    if(num % factor === 0){
      arr.push(factor);
      num = num / factor;
    } else {
      factor++;
    }
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // MI OPCION:
  /*let current;
  for (let i = array.length-1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if(array[j] > array[j+1]){
        current = array[j];
        array[j] = array[j+1];
        array[j+1] = current;
      }
    }
  }
  return array;*/

  //OPCION OPTIMIZADA:
  let swap = true; //creo la variable swap que es mi bandera, la cual me dice si hizo un cambio al array y la inicializo en true para que pase en el while.
  while(swap){
    swap = false;//la cambio a false, y si sigue en false por todo el recorrido sale del while.
    for (let i = 0; i < array.length-1; i++) {
      if(array[i] > array[i+1]){
        let aux = array[i+1];
        array[i+1] = array[i];
        array[i] = aux;
        swap = true;//si entro en el if quiere decir que hizo un cambio al array entonces puede continuar en el while.
      }
      
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let aux = array[i];
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
