// crear una lista que almacene las cinco vocales y luego las muestre por consola
/**let vocales=["a","e","i","o","u"]
console.log(vocales)
// acceder a la vocal "o"
console.log(vocales[3])
// acccediendo a los elementos con for
for (let i=0;i<5;i++){
    console.log(vocales[i])
}
console.log(vocales.length)*/

//TRABAJOS:
//1. tengo una lista de frutas
// crear un programa que identifique si en mi lista existe naranja,de existir me mostrar su indice,
//de no existe me mostrara un mensaje de error.
/**let frutas = ["piña", "naranja", "durasno", "platano", "kiwi", "uva", "fresa"];
let frutaBuscada = "naranja";
let indice = -1;

for (let i = 0; i < frutas.length && indice === -1; i++) 
  if (frutas[i] === frutaBuscada) indice = i;

console.log(frutas)

console.log(indice !== -1 
  ? `La fruta "${frutaBuscada}" está en la lista, en el índice ${indice}.` 
  : `Error: La fruta "${frutaBuscada}" no se encuentra en la lista.`);


// 2. crear dos funciones que reciban por parametros de lista de numeros una funcion encontrara de devolvera
// el numero menor de la lista y la otra funcion encontrara y devolvera el numero mayor de la lista. 
//ojo no usar los metodos de min y max.
// Lista de números
let numeros = [34, 8, 45, 30, 2, 80];

function encontrarMenor(lista) {
  let menor = lista[0];
  for (let num of lista) if (num < menor) menor = num;
  return menor;
}

function encontrarMayor(lista) {
  let mayor = lista[0];
  for (let num of lista) if (num > mayor) mayor = num;
  return mayor;
}

console.log("Menor:", encontrarMenor(numeros)); 
console.log("Mayor:", encontrarMayor(numeros)); 



// crear una funcion que me permite contar la cantidad de vocales "a" que tenga en un lista.
// Lista de palabras
let palabras = ["manzana", "pera", "banana", "uva", "fresa"];
function contarVocalA(lista) {
  let count = 0;
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista[i].length; j++) {
      if (lista[i][j] === 'a' || lista[i][j] === 'A') {
        count++;
      }
    }
  }
  return count;
}
console.log("Cantidad de vocales 'a':", contarVocalA(palabras));*/

// tenga la siguientes url
// www.gatitas.com/?q=marina+gold
// crear un programa que me capture la querey

/**let url="www.gatitas.com/?q=marina+gold"
let listaUrl=url.split("=")[1].split("+").join(" ")
console.log(listaUrl)*/

// POR PASOS:
/**let url="www.gatitas.com/?q=marina+gold"
let cortarUrl=url.split("=")
let obtenerPrimerElemento=cortarUrl[1]
let dividoTextoEnDos=obtenerPrimerElemento.split("+")
let juntarTexto=dividoTextoEnDos.join(" ")
console.log(juntarTexto)*/
// las lista se pueden acceder por .
// ["nombre del clave"]
/**let datosJoryObjeto={
  nombre:"jory",
  apellido:"rodrigues",
  edad:"20",
  sexo:"M",
  ganado:["PRIMO","CHAMOS","ENFERMERAS","MINEROS"],
  direccion:{
    tipoCalle:"pasajes",
    nombreCalle:"querobamba",
    numeroVivienda:222,
    numeroCuarto:5
  }
}
console.log(datosJoryObjeto)
console.log(datosJoryObjeto.ganado)
console.log(datosJoryObjeto["sexo"])
console.log(datosJoryObjeto.direccion["numeroVivienda"])
console.log(datosJoryObjeto.ganado[3])*/


// crear un funcion que me genere un objeto de caracteristicas tecnicas de una computadora, 
//el objeto debera tener como minimo los siguioentes:
// marca,modelo,procesador,ram,disco y tarjeta de video.

function Computadora(marca, modelo, procesador, ram, disco) {
  
  let computadora = {
      marca: marca,
      modelo: modelo,
      procesador: procesador,
      ram: ram,
      disco: disco
  };
  return computadora;
}
let miComputadora =Computadora('php', 'XPS 15', 'Intel Core i7', '8GB', '500GB SSD');
console.log(miComputadora);
// en este caso la clave marca existe en mi computadora por lo tanto su valor sera actualizada por intel
miComputadora["marca"]="intel"// este es para cambiar marca
console.log(miComputadora);
// para agregar un objeto
miComputadora["tarjeta"]="nvidia me tienes nvidia"
// como elimina un elemento de un objeto 

// hacer ejercicos de 7 al 10

