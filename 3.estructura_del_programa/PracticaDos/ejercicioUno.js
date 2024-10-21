// 1. Escribe un bucle que realice siete llamadas console para mostrar el siguiente triangulo:
/**```
#
##
###
####
#####
######
#######
``` */
let triangulo = '';
for (let i = 1; i <= 7; i++) {
  triangulo += '#';     // Agrega un '#' al string en cada iteración
  console.log(triangulo);  // Imprime el string actualizado
}
