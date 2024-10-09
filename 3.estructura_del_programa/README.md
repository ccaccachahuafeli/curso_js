# Estructura de programa
## Indice
- [interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
-[Expresiones y declaraciones](#expresiones-y-declaraciones)
-[Bindings (enlace)](#bindings-enlace)
-[ El entorno](#el-entorno)
-[control de flujo](#control-de-flujo)
-[Ejecucion condicional](#ejecucion-condicional)
# Interaccion basica con el usuario
podemos enter actuar con el usuario desdes javascript, utilizadon un metodo sencillo que biene implementado en los navegador.
el metodo es conocido como `Window` o el metodo de ventana este metodo en realidad es un objeto que contiene o almacena varias funciones entre ellas las de mostrar o pedir datos al usuario.
- **alert** - esta funcion nos muestra un mensaje en pantalla
```js
window.alert("mensaje")
```
- **config** - preguntar al ususario y ofrecer dos botones que se traducen en valores booleanos `Aceptar` (true) y `cancelar` o `cerrar` (false).
```js
window.config("quiere ser mi enamorado")
// si deseamos capturar la respuesta almacenaremos el codigo en una variable
respuesta=window.confirm("quieres salir del closed!")
```
- **prompt** - preguntar al usurio espera que se ingrese una respuesta
```js
window.prompt("cuantos años tienes??")
// si deseamos almacenar la respuesta usaremos una variable
respuesta=window("como te llamas")
```
## Expresiones y declaraciones
-**Expresiones**- en javascript un fragmento de codigo que produce un valor es llamada `Expresion`, tambien se dice una `Expresion`es el fragmento de una `oracion`.
```js
1
"hola"
3*6
!true
```
-**Declaraciones** -en javascript sera una `oracion`
```js
//en javascript es recomentable usar; donde terminamos la declaracion
!true;
let estado=!falso; 
```
#### Bindings (enlace)
cuando creamos un valor este valores son volatilessolo existen en la ejecucion del programa y solo cuando son llamado.
el bindings o enlace es la manera que javascript recuerda los valores y mantiene un estado interno asi como la reutilizacion de valores.
**como usamos los bindings en javascript**
para usar el bindings primero debemos usar la palabra servada o `keyword`  de nombre `let`, despues debemos darle un nombre para identificar el enlace luego asignarle el valor.
```js
// este es una enlace que puede apuntar a varios valores 
//como un pulpito con muchos brasos.
let edadPersona=34
// si deseamos que nuestro enlace solo apunte a un valor osea un pulpito con un brasito entonces para crear  este enlace debemos hacer el uso de la keywor const.
const edad=45
//este enlace siempre apuntara 
```
> [!NOTE]
> **QUE NOMBRE PONERLE A NUESTROS ENLACES**-El nombre de un enlace debera describir el valor al que esta enlasado, y debera estar escrita en `camelCase`
```js
// quiero crear un enlace que tenga el valor de la fecha actual
let yyymmmdd="20240910"
// correcto cuando escribes dos palabras juntas; de la segunda palabra se debe iniciar con mayuscula a esto se llama camelCase,en javascript solo se utiliza _
let fechaActual ="09-10-2024"
let edadActualAlumno=34
```
#### El entorno
El entorno es conocido como el momento en el que se ejecuta o inicia un archivo javascript.
el entorno al crearce no se crea vacio  dentro del entorno se creara la coleccion de enlace y valores. 
**averiguar mas sobre la ejecucion en linea de loss entornos en javascript**

## Control de flujo
una sentencia se ejecuta como se fuera una historia de arriba abajo.
 por ejemplo:
 ```js
 let elNumero = prompt("elige un numero")
 console.log("tu numero es la raiz cuadrada de:"+elNumero*elNumero)
 // primero le pide al usuario un numero y despues muestra un mensaje y el cuadrado de ese numero
 ```
 ### Ejecucion condicional
 hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamos mostrar segun una condicion.