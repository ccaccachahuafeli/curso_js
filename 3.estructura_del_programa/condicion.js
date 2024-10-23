//ejemplo de condicion simple
//capturamos la edad y lo convertimos a numero
//let edad = Number(prompt("ingresa tu edad"))
//verificamos si el tipo de datos edad es number realmente
//if (typeof edad == "number"){
    //si la comparacion es verdad mostraremos por consola la raiz cuadrada de edad
    //console.log(edad*edad)
//}

//ejemplo de condicion simple de una linea
//if (1+1==2) console.log("es verdad");


// EJERCIOS DE CONDICIONES
// CREAR UN PROGRAMA QUE ME PIDA UN NUMERO Y ME MUESTRE POR CONSOLA SI ES UN NUMERO PAR O IMPAR

// Solicitar un número al usuario
/**let numero = prompt("Introduce un número:");
if (+numero % 2 === 0) {
    console.log(numero + " es  par.");
} else {
    console.log(numero + " es  impar.");
}*/

// ejecicios de condicon multiple
 //crear un programa al usuario su edad dependiendo su edad le daremos una serie de regalos
 /**
  * - si su edad esta entre 4 a 8 años: te ganaras un chupetin.
  * - si su edad esta entre 9 a 13 años: te ganaras una pelota firmado por cuto .
  * - si su edad esta entre 14 a 17 años: te ganaras un celular nokia 6101.
  * - si su edad es mayor igual a 18: te ganaras un sobre de plata.
  */

// Solicitar la edad al usuario
/**let edad = prompt("Introduce tu edad:");
if (+edad >= 4 && edad <= 8) {
    console.log("te ganaras un chupetin");
} else if (+edad >= 9 && edad <= 13) {
    console.log(" te ganaras una pelota firmado por cuto");
} else if (+edad >= 14 && edad <= 17) {
    console.log("te ganaras un celular nokia 6101");
} else if (+edad >= 18) {
    console.log("Te ganaras un sobre de plata.");
} else {
    console.log("La edad ingresada no es válida o no tienes regalos.");
}*/

/**let edad = prompt("Introduce tu edad:");
edad = +edad; 
switch (true) {
    case (edad >= 4 && edad <= 8):
        console.log("Te ganarás un chupetín.");
        break;
    case (edad >= 9 && edad <= 13):
        console.log("Te ganarás una pelota firmada por Cuto.");
        break;
    case (edad >= 14 && edad <= 17):
        console.log("Te ganarás un celular Nokia 6101.");
        break;
    case (edad >= 18):
        console.log("Te ganarás un sobre de plata.");
        break;
    default:
        console.log("La edad ingresada no es válida o no tienes regalos.");
}*/

// ejercicio
//realizar un programa que pida 5 frutas a travez del navegador. 
//y realizara las seguientes evaluaciones.
// naranja,limon. "es una fruta citrica"
// platano,manzana. "es una fruta dulce"
// fresa,pera,papaya. " para la ensalada de fruta"
// si ingresa otro tipo de frutas. "no tiene clasificacion"


for (let i = 1; i <= 5; i++) {
    let fruta=prompt("Escribe en nombresiño de la frutica: ", i)
      switch (fruta){
        case "naranja":
        case "limon":
          console.log(" la fruta es citrica");
          break;
        case "platano":
        case " manzana":
          console.log ("la fruta es dulce")
          break;
        case "fresa":
        case "pera" :
          case "papaya":
            console.log(fruta, "para la ensalada de fruta");
          break;
        default:
          console.log("orlando es una  fruta");
          break;
  
      }
    
  }
  




