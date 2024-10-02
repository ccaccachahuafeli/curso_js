# Estructura de programa
## Indice
- [interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
-[Expresiones y declaraciones](#expresiones-y-declaraciones)
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