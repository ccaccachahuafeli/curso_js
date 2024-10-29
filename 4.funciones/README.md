# INDICE
-[FUNCIONES](#funciones)
-[ESTRUCTURA DE UNA FUNCION](#estructura-de-una-funcion-como-se-crea-una-funcion)
-[TIPOS DE ARGUMENTOS Y PARAMETROS](#tipos-de-argumentos-y-parametros)
 -[Argumentos y Parametros Posicionales](#argumentos-y-parametros-posicionales)
 -[ Argumento y parametro Nominales](#argumento-y-parametro-nominales)
-[Tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
 -[Funciones como valor](#funciones-como-valor)
 -[Funcion de fecha (arrow function)](#funcion-de-fecha-arrow-function)
 -[Diferencia](#diferencia)
  -[Binding](#binding)
-[La pila de llamadas](#la-pila-de-llamadas)

## FUNCIONES
Las funcines en javascript son `bloques de codigo ejecutable`, a los que podemos pasar parametros y operar con ellos.
Nos sirve para modular (modularizar) muestro programa y estructurarlos en bloque que `realicen una tarea concreta`, de esta manera nuestro codigo es mas legible y mantenibles.
Las funciones formalente, al acabar su ejecucion `devuelven un valor`, que conseguimos con el parametro `return`.

## ESTRUCTURA DE UNA FUNCION (como se crea una funcion)
Para crear un funcion debemos realizar los siguientes pasos:
1. hacer uso del keyword `function`.
2. darle un nombre a la funcion.
3. crear los parametros que recibira entre parentesis `()`.
4. crear el cuerpo de la funcion `{}`
```js
// funcion sin parametros
function mifuncion(){
    console.log("esta es mi funcion")
}
// funcion con un parametros
function mifuncionParametros(a){
    console.log("tu parametro es",a)
}
// funcion con varios parametros
function variosParametros(a,b){
    console.log(a+b)
}
```
**COMO EJECUTAMOS UNA FUNCION**
Para ejecutar la funcion debemos hacer el llamado de la misma haciendo uso unicamente de su nombre y los parametros que recibira.
```js
// creando la funcion
function saludo(){
    console.log("hola")
}
// ejecutar la funcion 
saludo()

function saludo2(texto){
    console.log("hola: ",texto)
}
saludo2("fely") // ("fely") esto se llama argumento 
```

>[!NOTE]
>**REGLAS PARA PONER EL NOMBRE A UNA FUNCION**
Los nombres de la funciones deben representar acciones, por lo que deben construirse usando el `verbo`  que representa la accion seguido de un `sustantivo` representara a la entidad.
```js
function crearUsuario(){

}

function enviarCorreo(){

}
```

## TIPOS DE ARGUMENTOS Y PARAMETROS 
Es la manera como se reemplazan los argumentos con los parametros.
### Argumentos y Parametros Posicionales.
posicionales se le llama por que los argumentos tomaran los parametros en el orden que se pase a la funcion, segun la posicion entre argumento y parametro.
```js
function sumaNumero(a,b,c,d){
    let suma=a+b+c+d
    return suma
}
// argumentos posicion 
let respuesta=sumaNumero(2+6+7+8)
console.log(respuesta)
```
### Argumento y parametro Nominales.
se les conoce a los argumentos  que en su crearcion se asocian a un parametro en especifico.
```js
function registroAlumno(nombre,apellido,sexo){
    
    let respuesta= `${nombre},${apellido},${sexo}`
    return respuesta
}
// nominal
registroAlumno(sexo="femenino",nombre="fely",apellido="astoyauri")

//posicion
registroAlumno("fely","fastoyauri","femenino")

```
## Tipos de funciones por su notacion.
### Funciones como valor
en este caso se crea una funcion como se fuera un valor de un enlace.
```js
//funcion como valor
let saludo=function(){
    console.log(bienvenido)
}
saludo()
```
en este caso el nombre de la funcion sera el nombre que le pongamos al enlace y para llamrlo o ejecutarlo debemos poner el nombre del enlace mas parentesis.
al igual que una funcion clasica podemos tambiem pasarle parametro.
### funcion como declaracion
se le reconoce como la funcion `declarativa` a la manera clasica de como creamos una funcion.
```js
//funcion como vdeclaracion
function saludo(){
    return "saludo a todos"
}
console.log(saludo())
```
### Funcion de fecha (arrow function)
esta funcion es introducida a partir de la version de enma script 5 `es5`.
se implemento para la creacion y ejecucion rapida y mas entendible de las funciones.
la funcion flecha evita la `verbosidad` en javascript.
>[!NOTE]
> `verbosidad`o `verboso` se utiliza en la programacion para referice a un codigo que necesita demaciada lineas de codigo o necesita cumplir estyrictamente una serie de reglas podemos comparar la `verbosidad` a un texto demaciado extenso o redundancia, 
se crea de la misma manera que una funcion como valor eso quiere decir que la funcion flecha sera el valor de un enlace.
la funcion flecha tiene la siguiente estructura.
el parametro seguido del simbolo flecha `=>` y del cuerpo de ser necesario o solo de codigo que se retornara.
```js
function saludo(){
    return "hola mundo"
}
console.log(saludo())

let saludo=()=>("hola mundo")
    console.log(saludo())

let mensaje=texto=>console.log("hola,",texto)
console.log(mensaje("el primo"))

// en el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo
let registroUsuario=(nombre,apellido)=>{
    let alumno=`${nombre},${apellido}`
}
console.log(registroUsuario("edwin","cachondo"))
```
### Diferencia

las diferencias que tenemos al momento de crear una funcion declarativa,funcion como valor y fecha es el binding.
### Binding
 es una tecnica que guarda las funciones y variables (enlaces) sube al princio la declaracion no el valor a la cabecera del principio del archivo de javascript.
 ```JS
 function saludo(){
    return "hola primo"
 }
 function despedida(){
    return "adios primo"
 }
 ```
```js
saludo()
despedida()
```
## La pila de llamadas ( call stack)
es una tecnica que se usa para controlar de manera correcta la ejecucion de una funcion.
 **TAREA averiguar sobre LIFO**
 LIFO significa `Last In, First Out` (último en entrar, primero en salir). Es una manera de organizar y gestionar datos, comúnmente usada en estructuras de datos como las pilas (stacks) en programación. En JavaScript, esto se puede implementar usando arrays y métodos como `push` y `pop`.
 ```js
 // Creando un stack
const stack = [];

// Agregando elementos (LIFO)
stack.push(1); // [1]
stack.push(2); // [1, 2]
stack.push(3); // [1, 2, 3]

// Eliminando elementos (LIFO)
console.log(stack.pop()); // 3, stack = [1, 2]
console.log(stack.pop()); // 2, stack = [1]
console.log(stack.pop()); // 1, stack = []

// El stack está ahora vacío
console.log(stack.pop()); // undefined

 ```
 

```js
function cortarTomate(){
    console.log("cortando tomate")
}
function cortarLechuga(){
     console.log("cortando lechuga")
}
function cortarPepino(){
    console.log("cortar pepino")
}
function cortarLimon(){
    console.log("cortar limon")
}
 function preparaEnsalada(){
     cortarTomate()
     cortarLechuga()
     cortarPepino()
     cortarLimon()
     console.log("mezclando las verduras")
 }
 function comer(){
     preparandoEnsalada()
     console.log("comiendo la ensalda")
 }
 comer()
``` 