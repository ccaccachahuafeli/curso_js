1.//AVERIGUAR LA FORMA QUE SE REALIZAN LAS COMPARACION CON CADENA DE TEXTO
// en javascript la comparacion de cadena de texto se realiza basándose en el orden lexicográfico 
//(similar al orden alfabético). Esto significa que se comparan los caracteres de las cadenas uno por uno, 
//utilizando el valor Unicode de cada carácter.
// POR EJEMPLOS:
// ArdvarK < Zoroaster
// En este ejemplo la comparacion seria primero la 'A' (valor Unicode 65) vs. 'Z' (valor Unicode 90).
// La respuesta seria true

2.//AVERIGUAR POR QUE SALE FALSE EN ESTE CASO
//el operador in te ayuda a saber si una propiedda o elemento est presente en un objeto o un array , 
//sin saber el valor 
// por eso es false
console.log("hola" in ["hola mundo"])