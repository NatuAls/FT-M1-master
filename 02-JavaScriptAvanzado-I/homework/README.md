
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); //8
  var f = function(a, b, c) {
    b = a; //b = 8;
    console.log(b); //8
    b = c; //b = 10;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); //9
}
c(8,9,10);
console.log(b); //10
console.log(x); //1
```

```javascript
console.log(bar); //undefined
console.log(baz); //error - baz is not defined
foo(); //No muestra nada por el error anterior pero deberia mostar 'Hola!'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //"Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor); //"Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //"Franco"
   }
})();
console.log(instructor); //"Tony"
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //"The Flash"
    console.log(pm); //"Reverse Flash"
}
console.log(instructor); //"The Flash"
console.log(pm); //"Franco"
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //"9px"
"$" + 4 + 5 //"$45"
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //Infinity
{}[0] //undefined
parseInt("09") //9
5 && 2 //2
2 && 5 //5
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] //23
3>2>1 //false
[] == ![] //true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefined - Devuelve ese resultado porque en la primera parte del hoisting, guarda en la memoria solamente la declaracion de la variable sin el contenido (a = undefined) y en la segunda etapa (ejecucion) no se encuentra el contenido porque fue inicializada despues del console.log.
   console.log(foo()); //2 - Devuelve ese resultado porque en la primera parte del hoisting, guarda en la memoria la declaracion de la funcion con todo su contenido dentro.

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); //undefined - En la primera parte del hoisting guarda en la memoria la declaracion de la variable que esta dentro del contexto de la funcion (snack = undefined), luego en la segunda parte (ejecucion) lee el codigo paso por paso, pero al no cumplirse la condicion del if no puede inicializar la variable con el contenido ('Friskies'). Y al tener la variable declarada dentro de la funcion (var snack), no necesita pedirla en el contexto de afuera y el resultado queda como (snack = undefined).
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //'Aurelio De Rosa' - La referencia del this depende de la manera en la cual se invoca. En este caso hace referencia al objeto (prop) porque invoca la funcion de esta manera (obj.prop.getFullname()), la cual esta declarada dentro del contexto del objeto y tiene la propiedad (fullname: 'Aurelio De Rosa').
var test = obj.prop.getFullname; //A la variable test le asignamos la formula o el contenido de la funcion, pero no el resultado.

console.log(test()); //undefined - En este caso el this hace referencia al objeto (global) porque la funcion fue invocada desde (test()), el cual no tiene ninguna propiedad (.fullname), lo que si tiene es una variable declarada como fullname con el contenido 'Juan Perez' pero no es una propiedad de global.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); //1   Se muestra primero el console.log(1).
   setTimeout(function() { console.log(2); }, 1000); //4  Cuarto el console.log(2) porque al ser una linea de codigo "setTimeout" JS la manda a un Web Apis para que la resuelva por el, cuando termine lo pase al Callback Queue y luego lo ejetcute al terminar el call stack. Al tener 1000 de tiempo tarda mas que el console.log(3).
   setTimeout(function() { console.log(3); }, 0); //3  Tercero porque al tener 0 de tiempo termina mas rapido que el console.log(2).
   console.log(4); //2  Se muestra segundo el console.log(4).
}

printing();
```
