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
-[CLOSURE o Funciones de cierre (Funciones que retorna funciones)](#closure-o-funciones-de-cierre-funciones-que-retorna-funciones)
 -[closure tipo clase](#closure-tipo-clase)

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
> [!INFO]
> posicionales en orden y nominales especificar el parametro y su valor.

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
## CLOSURE o Funciones de cierre (Funciones que retorna funciones)
Un `CLOSURE` es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el keyword `return`. 
Antes de que aparezca la version `ecma 6` los `closure` eran un patron creacional que nos permitia modularizar nuestro codigo, en lugar de usar las `clases` que eran populares en otros lenguajes pero que javascript aun no lo implementaba.
```js
//una funcion que retorna otra funcion, por lo general es una funcion anonima
//funcion clasica
function retornaValor(n){
    return n+1
}
//llamando funcion clasica
retornaValor(10)
//funcion closure
function retornaValor(n){
    return function(){
        return n+1
    }
}
//llamando funcion closure
retornaValor(10)()
```
>[!NOTE]Las funciones closure son usadas por que pueden mantener el valor de sus enlaces o variables locales en todo el proceso de la ejecucion de su funcion padre por cada llamada que se le realice.
### closure tipo clase 
son funciones cuyo uso son iguales a las clases dentro de la ejecucion de una clase tenemos lo que se llama  como `instancia` en javascript tenemos funciones `closure` que se pueden instanciar al igual que una clase, la direfencia con la funciones `closure` clasicas es que en esta hacemos uso de la palabra reservada `keyword` llamada `this`.
```js
function contador(){
    this.contador=0
    this.incre=function(){
        this.contador++  
    }
    this.decre=function(){
        this.contador--  
    }
}
// realizando la instancia con new
let count1=new contador()
count1.contador
```
>[!NOTE]
>La funcion closure de tipo clase no hace uso de `return` en sus funcion es al hacer uso de `this` caso funcion o variable estara enlasada al objeto que se cree.
>[!WARNING]
>El problema pricipal de este tipo de funcion, es que cuando creamos un nuevo objeto a partir de le funcion tipo clase, reservara espacio en memoria para toda la clase y sus valor creados eso quiere decir variables y funciones, cada vez que llamamos a un funcion esta se replica en memoria.
### prototype (tarea-averiguar y sus ejemplos)
 un prototipo es un objeto del cual otros objetos pueden heredar propiedades y métodos. Esto permite la creación de propiedades y métodos que pueden ser compartidos por todas las instancias de un objeto.Esto es conocido con frecuencia como la cadena de prototipos,se establece un enlace entre la instancia del objeto y su prototipo (su propiedad `__proto__`, la cual es derivada de la propiedad `prototype` sobre el constructor), y las propiedades y metodos son encontrados recorriendo la cadena de prototipos.
```js
// crear objeto
let persona = {
    nombre: 'fely',
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }
  };
  
  // Acceder al prototipo de `persona`
  console.log(persona.__proto__); // Mostrará el prototipo de Object
  
  // Crear un objeto que hereda de `persona`
  let trabajador = Object.create(persona);
  trabajador.ocupacion = 'Desarrollador';
  
  // Acceder a propiedades y métodos heredados del prototipo
  console.log(trabajador.nombre); // "fely" (heredado de `persona`)
  trabajador.saludar();
```

**prototype**
Para crear un prototypo tendremos que crear primero nuestra funcion principal que es la encargada de almacenar nuestras variables locales con las que trabajaremos. 
Luego accederemos al prototype de nuestro funcion creada y en valor o variables de tipo objeto le indicaremos  las funciones que tendra nuestra  funcion principal que interactuara con nuestras variables locales.
```js
function Contador(nombre){
    this.count=0
    this.nombre=nombre
}
contador.prototype={
    incremento:function(){
        this.count++},
    decremento:function(){
        this.count--},
    mostrarDatos:function(){
        return `${this.count}`,`${this.nombre}`
    }
}
```
> [!NOTE]
> es una convencion usar como nombre de nueva funcion principal. 1.que debe ser singular,2.que se use PascalCase.
## RECURSION EN FUNCION (TAREA)
## FUNCIONES CALLBACKS(TAREA)
# CLASES
Las clases en javascript llegan en la version `ECMAScript 6`, javascript no tenia al igual que otros lenguajes de programacion orientados a objetos las `clases` ya que js se enfocaba en la `programacion funcional`, sin embargo con la llegada es `Es6`, javascript adopta ser un lenguaje de programacion multiparadigma, entre ellos la programacion orientada a objetos con la llegada de las `clases`.
## Esctructura de una clase en js
Una clase está separada en 3 grandes secciones.

1. El nombre de la clase deberá ser en singular y en PascalCase.
2. Debera tener atributos (valores o variables), estos deben ser sustantivos y estar escritos en camelCase.
3. Deberán tener métodos (acciones, funciones), estos deberán ser verbos o estar escritos en camelCase.
```JS
class Computadora{
    //atributos
    constructor(marca){
        this.marca=marca
        this.color=""
        this.tipoCase="tower"
    }
    //metodos
    encender(){return "estoy encendiendo"}
    apagar(){return "estoy cerrando sesion y guardando informacion antes del apagado"}
    escribir(){return "escribiendo mi informe"}
    jugar(){return "jugando dota"}
}
//instanciar
let miPc()=new Computador("gigabyte")
miPc.encender()
```

