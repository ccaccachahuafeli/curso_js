# INTRODUCCION
- **TEMARIOS**
- [Comentarios](#comentarios)
- [consola](#consola)
- [Naiming](#Naiming)
  ## Comentarios
  es la parte dentro de mi archivo de  codigo que no es  leido ni ejecutado por el interprete de `j.s`.
  > [!TIP]
  >Los comentarios nos ayudan a entender nuestro codigo , y en ocasiones podemos usarlo para silenciar temporalmente parte del codigo *(comentar un codigo*)
  ### Tipo de comentarios
  1.**Una sola linea**

   ```js
   //comentarios de una sola linea
   ```

  2.**Multiples Lineas**

  ```js/*comentario de multilinea*/```

  3.**JsDoc**

  ```js/***esta es una linea*esta es otra linea*```

este tipo de comentario es muy usado para documentar el codigo , generalmnte usado para la explicacion de funciones y clases en `j.s`.
[link de archivo](comentarios.js)

## consola
la herramienta de javascript mas usada, dentro de navegadores es usada para la [depuracion](#depuracion) de nuestro codigo
> [!TIP]
> ### Depuracion,es la tecnica que nos permite mostrar el codigo en las destintas faces del desarrollo,y verificar que el mensaje mostrarlo sea el correcto. y verificando que el codigo no tengo errore de sintaxis de logica o de precaucion.###Tipos de mensajes por consola
 #### 1: notificadores
 mostrar un mensaje por consola
 ```js
 console.log("hola mundo")
 ```
 se quiero mostrar un mensaje de estilo informativo
 ```js
 console.inf("mensaje informativo")
 ```
 mostrar un mensaje de estilo o tipo alerta
  ```js
 console.warn("mensaje de tipo alerta")
 ```
 para mostar un mensaje de estilo o tipo de error
  ```js
 console.error("mensaje de error")
 ```
 #### 2: gestion de tiempo
 este tipo de mensaje no sirve para ver la duracion de ejecucion de nuestro codigo y por optimiar para hacer uso de estas herramienta tenemos que iniciar la consola con un `time()`luego vendra el codigo que deseamos ver la duracion y finalmente terminar el time de la consola con `timeEnd()`
 ```js
 edad=18
 if(edad=18){
  console.log("eres mayor de edad")
 }else{
  console.warn("eres pulpin")
 }
 
 ```

 #### 3: tablas

