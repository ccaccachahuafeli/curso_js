// ejemplos con operadores de comparacion 
console.log(5>6) 
// est operacion gerara un valor de tipo boleano

//mayor igual que 
console.log(6>=6)

// no es igual 
console.log(5 != 7)
 
// NaN == NaN
console.log(NaN == NaN)

// AVERIGUAR LA FORMA QUE SE REALIZAN LAS COMPARACION CON CADENA DE TEXTO

//Todas las letras mayusculas seran menores a las minusculas
//Z>K
// por que javascript compara los codigo unicode de cada caracter.
//!=?
//33=63

console.log("!">="?")

// ArdvarK < Zoroaster
console.log("ArdvarK" >= "Zoroaster")


// ejemplos operadores de logicos
// en el caso del operador && su resultado sera verdadero solo si ambos valores son verdaderos
console.log(true && false) //false
console.log(true &&true)  //true
// OBSERVACION: Si ambos valores son verdaderos son verdaderos devolvera el segundo valor.
console.log("hola" && "mundo")
//OBSERVACION: En caso que exista un valor verdaero y uno falso devolvera el valor falso.
console.log(0 && "hola")
//ojo: los valores 0,NaN, una cadena vacia ""; son considerados false



// en el caso del operador || produce verdadero si cualquiera de su valores dados es verdadero.
console.log(false || false) // false
console.log(true || false) // true

// 

respuesta="te devuelve los ositos tiernos"
console.log(respuesta  || "tu busqueda no existe")
console.log( 0 || "")
// en el caso del operador ! invierte el valor dado
console.log(!true)  //false
console.log(!false) // true

//usando el operacion relacional
// solo funciona en objetos

//AVERIGUAR POR QUE SALE FALSE EN ESTE CASO
console.log("hola" in ["hola mundo"])
