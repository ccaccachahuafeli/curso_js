# Valores,, Tipos y Operadores
## Indice
-[tipos de datos o valores](#valores)
## valores
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
  **Podemos agrupar**

consulta el archivo de operadores[]