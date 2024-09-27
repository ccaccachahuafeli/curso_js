# Valores,, Tipos y Operadores
## valores
### datos primitivos
#### cadenas
-[indice](#indice)
-[tipos de datos o valores](#valores)
## valores
-[cadenas](#cadenas)
imagena un mar de bits
una computadora moderna tiene mas de 100 mil millones de bits almacenados en su `memoria de trabajo`o`memoria principal`o`memoria volatil`o`ram`.
la memoria no volatil o memoria secundaria o memoria de almacenamiento tiene estos bits de manera ordenada generalmente apilada como si de un estante de una biblioteca se tratara.
cuando nosotros programaos hacemos el uso de la `memoria de trabajo`,para trabajar de manera ordenada con los bits que se encuentran en nuestro mar de bits, javascripts ordena los bits en pequeñas partes o piezas de informacion a esto se le conoce como `valores`.
cada valor tiene una funcionalidad destinta puede ser un numero un texto o una funcion.
cuando hablamos de tipos de datos en javascripts nos referimos a su presentacion binaria y al tipo de valor que usamos.
#### DATOS PRIMITIVOS
son aquellos datos que ya existen no pueden ser creados, actualizados ni eliminados solo pueden ser llamados para el uso que deseamos darle.
los datos primitivos son:
#### - numeros(number)
los valores de tipo numero como es de esperar son numeros y en javascripts se escribe o se hace el llamado de este valor de la seguiente manera.
- numero de tipo de entero
 ```js
 28
 //estamos usando un patron de bits para el  numero 28 que existira dentro de la memoria de trabajo
   ```
- numero de punto flotante,decimal,fraccion
```js
 2.7
 0.
 .0
 //
   ```
- numeros de tipo notacion cientifica
```js
 2.998e8
 //2.998 * 10^8
   ```
>[!TIP]
> cuando javascript realiza operacion con numeros enteros el resultado siempre sera exacta, cuando realise operacion cojn numero  decimales el resultado perdera presicion por que solo tiene 64 para almacenar el numero, esto suele ocurrir con resultados cuyos decimales sean infinitos como el caso el numero PI **es nuestra responsabilidad como programadores hacer el uso de los decimal con aproximaciones para evitar error**
>[!TIP]
> cuando javascript hace trabajo de memoria (cuando crea un patron de bits para almacenar) todos numero son almacena como decimal positivo

- tipos (tipos de datos)
- operadores
  
#### aritmetica
la principal operacion que se puede hacer con numeros es la aritmerica.
Para esto tenemos los operadores aritmeticos basicos como:
- suma(+).
- resta(-).
- multiplicacion(*).
- division(/).
- potencia(**).
- modulo(%).
  **Podemos agrupar operaciones con parintesis() las operaciones que esten dentro**

consulta el archivo de operadores[]

#### cadenas
El seguiente tipo de dato primitivo es la `cadena`-`string`.
¿Para que se usan las cadenas en javascript?
- para representar texto
se escribe encerrando su contenido entre comillas:
```js
//cadenas con contenido
 "soy un texto"//comillas dobles
 'tambien soy un texto'// comilas simples
 `yo tambien soy`//acento grave
 //cadenas vacia
 ""
 " "//esto se tiene su contenido,porque tiene espacio
 ```
**problema** - como representamos un texto entre comillas
para hacer el uso de comillas dentro del contenido de una cadena podemos seguir las siguientes recomendaciones.
```js
//si nuestro texto tiene que esta entre comillas simples
 "'este texto se muestra entre comillas simples'"
 //si nuestro texto tiene que estar entre comillas dobles
 '"este texto se muestra entre comillas dobles"'
//si muestra texto tendra tanto comillas dobles como simple
`'este es comilla simple',"sta es comillas dobles"`
```
otra manera de hacer lo antes mencionado es haciendo uso de la barra invertida `\`
tambien conocidos como `caracter de escape`.
hacer el uso de este caracter indica que el caracter posterior tendra un significado especial.
```js
//si nuestro texto tiene que esta entre comillas simples
 "de este texto solo esta \"palabra\" estara en comillas"
```
**problema** - deseamos agregar un salto de linea en nuestro texto.
```js
//solucionamos este problema haciendo uso de los grave
 ` la primera linea
 segundo linea`
```
antes de la incorporacion de Emascript6 en el uso de acentos grave se utilizaba el caracter de escape `\`
```js
"esta es mi primera linea \n y esta es la segunda linea"
```
**problema** - deseo tabular un texto 
```js
`
este texto no esta tabulado
   este texto si esta tabulado
`
```
ahora tabularemos haciendo uso del caracter de escape
```js
"sin tabular \n \t y tabulado"
```
#### concatenacion 
el unico operador aritmetico que puede ser usado por cadenas e el operador de suma (+) puede ser usado entre dos a mas cadenas y pasa a llamar operador de concatenacion, lo que realizar es unir cadenas en una sola.
```js
"hola"+" "+"mundo"
```
#### plantillas literales
las plantillas literales mencionadas anteriormente con el nombre de acentos graves son usadas para mostrar texto literal, tambien nos permite ejecutar codigo javascript dentro de una pantilla literalel codigo o el resultado de este codigo sera transformado en un dato de tipo txto y se incluira en la posicion en que se encuentre.
para hacer el uso de este funcionalidad debemos usa la seguiente expresion `${}`
```js
//creando un pantilla literal - template litetls
``
// usando js dentro de un plantilla literal
`la suma de  1+1 es ${1+1}`
```
>
> se dice literal por que con el formato que codificamos sera mostrado de esa misma forma en la consola