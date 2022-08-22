"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  size(){
    if(!this.left && !this.right) return 1;
    if(!this.left) return 1 + this.right.size();
    if(!this.right) return 1 + this.left.size();
    return 1 + this.left.size() + this.right.size();
  }

  insert(value){ 
	if(value < this.value){
		if(!this.left){
			this.left = new BinarySearchTree(value);
		}else{
			this.left.insert(value);
		}	
	} else if(value > this.value){
		if(!this.right){
			this.right = new BinarySearchTree(value);
		}else{
			this.right.insert(value);
		}	
  }
  }

  contains(value){
    if(value === this.value){
      return true;
    }
    if(value < this.value && this.left){
      return this.left.contains(value);
    } else if(value > this.value && this.right){
      return this.right.contains(value);
    }
    return false;
  }

  depthFirstForEach(cb, order){
    if(order === 'post-order'){
      if(this.left) this.left.depthFirstForEach(cb, order);
      if(this.right) this.right.depthFirstForEach(cb, order);
      cb(this.value);
    } else if(order === 'pre-order'){
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb, order);
      if(this.right) this.right.depthFirstForEach(cb, order);
    } else {
     if(this.left) this.left.depthFirstForEach(cb, order);
     cb(this.value);
     if(this.right) this.right.depthFirstForEach(cb, order);
    }
  }

  breadthFirstForEach(cb, queue = []){
    //con if reducido:
    cb(this.value);
    if(this.left) queue.push(this.left);
    if(this.right) queue.push(this.right);
    if(queue.length) queue.shift().breadthFirstForEach(cb, queue);

    //con operador ternario:
    //cb(this.value);
    //this.left ? arr.push(this.left) : 1;
    //this.right ? arr.push(this.right) : 1;
    //arr.length ? arr.shift().breadthFirstForEach(cb, arr) : 1;
  }
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
