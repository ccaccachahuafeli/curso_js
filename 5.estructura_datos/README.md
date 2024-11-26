# Estructuras de datos
## INDICE
-[Estructuras de datos](#estructuras-de-datos)
 -[Lista o Array](#lista-o-array)
 -[creacion](#creacion)
 -[acceder a un elemento del array](#acceder-a-un-elemento-del-array)
 -[metodos](#metodos)
[Objetos](#objetos)

# Estructuras de datos
A parte de los tipos de datos primitivos
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
- metodo para recuperar el `longitud` de elemento que tiene una lista.
```js
let numeros=[2,4,5,6,7]
numeros,length
```
- metodo para `agregar` un elemento al final de la lista 
```js
let vocales=["a"]
vocales.push("e")
```
- metodo para `eliminar` el ultimo elemento de la lista.
```js
let vocales=["a","e"]
vocales.pop()
```
### TAREA AVERIGUAR QUE OTROS METODOS EXISTEN PARA EL TRATAMIENTO DE LISTAS EN JAVASCRIPT
## Objetos
### creacion 
### acceder a un elemento del objeto
### metodos