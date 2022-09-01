'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
  let pivot = array[0];
  let max = [];
  let min = [];

  for (let i = 1; i < array.length; i++) {
    if(array[i] > pivot){
      max.push(array[i]);
    } else {
      min.push(array[i]);
    }
  }
  return quickSort(min).concat(pivot, quickSort(max));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  function merge(left, right){
    let arr = [];
    while(left.length && right.length){
      if(left[0] < right[0]){
        arr.push(left.shift())
      } else {
        arr.push(right.shift())
      }
    }
    return arr.concat(left, right)
  }

  if(array.length === 1) return array;

  let middle = Math.round(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
