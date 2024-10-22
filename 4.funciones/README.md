# INDICE
-[FUNCIONES](#funciones)
-[ESTRUCTURA DE UNA FUNCION](#estructura-de-una-funcion-como-se-crea-una-funcion)
-[TIPOS DE ARGUMENTOS Y PARAMETROS](#tipos-de-argumentos-y-parametros)
 -[Argumentos y Parametros Posicionales](#argumentos-y-parametros-posicionales)
 -[ Argumento y parametro Nominales](#argumento-y-parametro-nominales)

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