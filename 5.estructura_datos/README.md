# Estructuras de datos
## INDICE
-[Estructuras de datos](#estructuras-de-datos)
 -[Lista o Array](#lista-o-array)
 -[creacion](#creacion)
 -[acceder a un elemento del array](#acceder-a-un-elemento-del-array)
 -[metodos](#metodos)
[Objetos](#objetos)
 -[creacion de ob.](#creacion-de-ob)

# Estructuras de datos
A parte de los tipos de datos primitivos, javascript  nos proporciona los tipos de datos complejos conocidos tambien como datos estructurados o estructura de datos.
para poder trabajar con estos tipos de datos debemos conocer la forma de  representarlos en la memoria de nuestra maquina .
javascript trabaja con dos tipos de datos estructurados que trabajan de manera independiente o en conjunto.
son los siguientes:
## Lista o Array
las lista en javascript son un tipo de dato estructurado que nos permite almacenar distintos tipos de datos primitivos separados por comas, cada tipo de dato que se almacena en una lista se le conoce como elemento.
Asi cada elemento estara separados por una coma.
### creacion 
primero debemos crear un enlace(una variable) y luego le asignamos la lista  que se cree con `corchetes []`, los elememtos estaran dentro de los corchetes separdos por comas.
```js
// estoy creando una lista vacia
let miLista=[]
// creando una lista de numeros
let numeros=[2,3,4,5]
// creando una lista de nombre
let nombre=["manzana","limon","piña"]
// creando una lista mixto
let mixto=[2,"hola",true,[]]
```
### acceder a un elemento del array
Para poder acceder a un elemento del array debemos entender que javascript asignara por cada elemento un indice que nos permitira acceder a un elemento en especifico este indice es incremental y comenzaa de cero con el primer elemento, el ultimo elemento sera la cantidad de elementos menos uno.
```js
let numeros=[3,5,7,23,67,8]
console.log(numeros[2])
```
existe otra manera acceder a los elementos de una lista , esta se logra recorriendo cada elemento de una lista esto se logra con un bucle`for`.
```js
let nombres=["edwin","cristian","jory"]
for(let i=0;i<nombres,length;i++){
    console.log(nombres[i])
}
```
### metodos
Los metodos son funciones que nos permiten crear,actualizar y eleminar los elementos de una lista, todas las variables que almacenan una lista nos permiten acceder a susu metodos poniendo un punto despues del nombre de la variable.
- metodo `length` para recuperar el longitud de elemento que tiene una lista.
```js
let numeros=[2,4,5,6,7]
numeros,length
```
- metodo `push` para agregar un elemento al final de la lista 
```js
let vocales=["a"]
vocales.push("e")
```
- metodo `pop` para eliminar el ultimo elemento de la lista.
```js
let vocales=["a","e"]
vocales.pop()
```
### TAREA AVERIGUAR QUE OTROS METODOS MAS USADOS QUE  EXISTEN PARA EL TRATAMIENTO DE LISTAS EN JAVASCRIPT
- el método `forEach()` en un array en JavaScript para recorrer cada elemento del array y realizar una acción específica, en este caso, imprimir cada fruta en la consola.
```js
let frutas = ["manzana", "banana", "pera"];

// Recorrer cada elemento del array e imprimirlo
frutas.forEach(function(fruta) {
  console.log(fruta);
});

// Añadir un elemento al arreglo
frutas.push("naranja");

// Eliminar el último elemento del arreglo
frutas.pop();
```
- El método `map()` en JavaScript se utiliza para aplicar una función a cada elemento del array numeros. Se duplica cada número del array original, resultando en la impresión del nuevo array [2, 4, 6].
```js
let numeros = [1, 2, 3];
// Aplicar una función a cada elemento del arreglo
let duplicados = numeros.map(numero => numero * 2);
console.log(duplicados);
// Imprime: [2, 4, 6]
```
- método `filter()` en JavaScript se utiliza para filtrar los elementos de un array según una condición.
```js
let numeros = [1, 2, 3, 4, 5];
// Filtrar elementos de un arreglo
let impares = numeros.filter(numero => numero % 2 !== 0);
console.log(impares);
// Imprime: [1, 3, 5]
```
- método `reduce()` en JavaScript se utiliza para reducir un array a un único valor. En este caso, se suman todos los números del array numeros utilizando la función de reducción.
```js
let numeros = [1, 2, 3, 4, 5];
// Reducir el arreglo a un único valor
let suma = numeros.reduce((total, numero) => total + numero, 0);
console.log(suma);
// Imprime: 15
```
- método `some()` se utiliza en JavaScript para verificar si al menos un elemento de un array cumple con cierta condición especificada en una función de retorno.
```js
const numeros = [1, 2, 3, 4, 5];

// Verificar si al menos un número es mayor que 3
const resultado = numeros.some(numero => numero > 3);

console.log(resultado);
// Resultado: true, ya que 4 y 5 son mayores que 3
```
- método `every()` se utiliza en JavaScript para verificar si todos los elementos de un array cumplen con cierta condición especificada en una función de retorno.
```js
const numeros = [1, 2, 3, 4, 5];

// Verificar si todos los números son mayores que 0
const todosMayoresQueCero = numeros.every(numero => numero > 0);

console.log(todosMayoresQueCero); 
// Resultado: true, ya que todos los números son mayores que 0
```
- método `find()` se utiliza en JavaScript para encontrar el primer elemento en un array que cumple con cierta condición especificada en una función de retorno.
```js
const numeros = [1, 2, 3, 4, 5];

// Encontrar el primer número mayor que 3
const encontrado = numeros.find(numero => numero > 3);

console.log(encontrado); 
// Resultado: 4, ya que es el primer número mayor que 3
```
- método `findIndex()` en JavaScript se usa para encontrar el índice del primer elemento en un array que cumple con una condición específica.
```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Encontrar el índice del primer número par
const indice = numeros.findIndex(numero => numero % 2 === 0);

console.log(indice);
// Salida: 1

// Otro ejemplo del Método findIndex()
const indice2 = numeros.findIndex(numero => numero > 5);

console.log(indice2);
// Salida: 5
```
- método `indexOf()` en JavaScript para encontrar la posición de una palabra específica dentro de una cadena de texto.
```js
let frase = "El perro come comida";
// Encontrar la posición de una palabra en la frase
console.log(frase.indexOf("perro")); 
// Imprime: 3
```
- método `slice()` en JavaScript permite extraer una parte específica de una cadena de texto.
```js
let frase = "JavaScript es divertido";
// Extraer una parte de la cadena
console.log(frase.slice(0, 10));
// Imprime: JavaScript
```
- método `concat()` se utiliza para concatenar dos o más arrays en uno nuevo.
```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

// Concatenar los tres arrays en uno nuevo
const newArray = array1.concat(array2, array3);

console.log(newArray);
// Resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
- método `shift()` en JavaScript se utiliza para eliminar el primer elemento de un array.
```js
let numeros = [1, 2, 3];
// Eliminar el primer elemento del arreglo
numeros.shift();
console.log(numeros);
// Imprime: [2, 3]
```
- método `unshift()` en JavaScript se utiliza para añadir un elemento al inicio de un array.
```js
let numeros = [2, 3];
// Añadir un elemento al inicio del arreglo
numeros.unshift(1);
console.log(numeros);
// Imprime: [1, 2, 3]
```
- método `splice()` modifica el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.
```js
let array = [1, 2, 3, 4, 5];
const indiceAEliminar = 2; 
// Índice del elemento a eliminar

// Eliminar el elemento en el índice especificado
array.splice(indiceAEliminar, 1);

console.log(array); 
// Resultado: [1, 2, 4, 5]
```
- método `reverse()` en JavaScript se utiliza para invertir el orden de los elementos en un array.
```js
let numeros = [1, 2, 3];
// Invertir el orden de los elementos en el arreglo
numeros.reverse();
console.log(numeros);
// Imprime: [3, 2, 1]
```
- método `sort()` en JavaScript se utiliza para ordenar los elementos de un array alfabéticamente.
```js
let frutas = ["naranja", "manzana", "uva"];
// Ordenar elementos de un arreglo
frutas.sort();
console.log(frutas);
// Imprime: ["manzana", "naranja", "uva"]
```
- método `includes()` en JavaScript se utiliza para verificar si un elemento está presente en un array.
```js
let numeros = [1, 2, 3];
// Verificar si un elemento está en el arreglo
console.log(numeros.includes(2)); // Imprime: true
console.log(numeros.includes(4)); // Imprime: false
```
- método `join()` en JavaScript permite combinar los elementos de un array en una cadena de texto.
```js
let frutas = ["manzana", "naranja", "uva"];
// Unir elementos de un arreglo en una cadena
let lista = frutas.join(", ");
console.log(lista);
// Imprime: manzana, naranja, uva
```
- método `replace()` en JavaScript permite reemplazar una parte específica de una cadena de texto.
```js
let frase = "Aprender es divertido";
// Reemplazar parte de la cadena
console.log(frase.replace("divertido", "genial"));
// Imprime: Aprender es genial
```
- método `split()` en JavaScript permite dividir una cadena de texto en un array. 
```js
let lista = "manzana,naranja,uva";
// Dividir una cadena en un arreglo
let frutas = lista.split(",");
console.log(frutas);
// Imprime: ["manzana", "naranja", "uva"]
```
- método `toString()` devuelve una cadena de caracteres representando el array especificado y sus elementos.
```js
const array1 = [1, 2, 'a', 'HTML'];

console.log(array1.toString());
// Resultado: "1,2,a,HTML"
```
- método `toString()` en un objeto para proporcionar una representación de cadena personalizada.
```js
let persona = {
  nombre: "Juan",
  edad: 25,
  toString: function() {
      return this.nombre + " (" + this.edad + " años)";
  }
};

let cadena = persona.toString();

console.log(cadena);
// Salida: "Juan (25 años)"
```
- método `values()` en JavaScript se usa para obtener un array con los valores de las propiedades enumerables de un objeto. 
```js
const persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Bogotá"
};

const valores = Object.values(persona);

console.log(valores);
// Salida: ["Juan", 25, "Bogotá"]
```
- método `keys` verifica si un valor es un array y devuelve true si lo es, o false si no lo es.
```js
const persona = { nombre: "Juan", edad: 30, ciudad: "Bogotá" };
const llaves = Object.keys(persona);
console.log(llaves); 
// Salida: ['nombre', 'edad', 'ciudad']
```
- método `Array.of()` crea un nuevo array con un número variable de elementos, pasados como argumentos.
```js
const numeros = Array.of(1, 2, 3, 4, 5);
console.log(numeros); 
// Salida: [1, 2, 3, 4, 5]
```
- método `Array.from()` crea un nuevo array a partir de un objeto iterable o similar a un array.
```js
const cadena = "Hola";
const arrayDesdeCadena = Array.from(cadena);

console.log(arrayDesdeCadena); 
// Salida: ['H', 'o', 'l', 'a']
```
- método `lastIndexOf()` busca un elemento dentro de un array o una cadena y devuelve la última posición en la que aparece.
```js
const numeros = [1, 2, 3, 2, 4];
console.log(numeros.lastIndexOf(2)); 
// 3 (última aparición del 2)
// texto
const texto = "abracadabra";
console.log(texto.lastIndexOf("a"));
// 10 (última posición de 'a')
```
- método `copyWithin()` copia una sección de un array dentro del mismo array, sin cambiar su longitud.
```js
const numeros = [1, 2, 3, 4, 5];
numeros.copyWithin(0, 3);
// Copia desde el índice 3 al índice 0
console.log(numeros); 
// Salida: [4, 5, 3, 4, 5]
//otro ejemplo
const frutas = ["manzana", "banana", "cereza", "durazno", "kiwi"];
frutas.copyWithin(1, 3); // Copia desde el índice 3 al índice 1

console.log(frutas); 
// Salida: ["manzana", "durazno", "kiwi", "durazno", "kiwi"]
```
- método `fill()` se utiliza para llenar todos los elementos de un array con un valor estático, desde un índice inicial hasta un índice final (no inclusivo).
```js
const numeros = [1, 2, 3, 4, 5];
numeros.fill(0); // Rellena todo el array con 0

console.log(numeros); 
// Salida: [0, 0, 0, 0, 0]
// otro ejemplo
const frutas = ["manzana", "banana", "cereza", "durazno"];
frutas.fill("naranja", 1, 3); // Rellena desde el índice 1 hasta el 3 (no inclusivo)

console.log(frutas); 
// Salida: ["manzana", "naranja", "naranja", "durazno"]
```
- método `flat()` se utiliza para aplanar un array anidado, es decir, convierte un array de arrays en un solo array de un nivel específico.
```js
const numerosAnidados = [1, [2, 3], [4, [5, 6]]];
const aplanado = numerosAnidados.flat();

console.log(aplanado); 
// Salida: [1, 2, 3, 4, [5, 6]]
```

## Objetos
los objetos son tipos de datos estructurados semilares a las listas, para poder acceder a un elemento de la lista javascript les asignaba indices, en este caso los objetos  como unica diferencia de las listas nosotros podremos asignar el nombre del elemento al cual deseamos acceder a esto se le conoce como `clave:valor`.
cada clave:valor es un elemento de un objeto si deseamos crear mas elementos que separarlos por comas.
### creacion de ob.
para crear un objeto debemos encerrar los elemento en  llaves`{}` para elemento estara conformado por su `clave:valor`
```js
let datosJory=["jory","rodrigues",20,"M"]
let datosJoryObjeto={
  nombre:"jory",
  apellido:"rodrigues",
  edad:"20",
  sexo:"M",
  ganado:["PRIMO","CHAMOS","ENFERMERAS","MINEROS"],
  direccion:{
    tipoCalle:"pasajes",
    nombreCalle:"querobamba",
    numeroVivienda:222,
    numeroCuarto:5
  }
}
```
### acceder a un elemento del objeto
### metodos