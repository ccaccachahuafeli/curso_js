// 1. Pedir al usuario dos numeros al realizar el producto de ambos
// determinar en una condicion de una sola linea si el resultado es mayor a 100
let num1 = Number (prompt("Ingresa el primer número:"));
let num2 = Number (prompt("Ingresa el segundo número:"));

let producto = num1 + num2;

if (producto > 100) { console.log("El producto es mayor a 100"); }
if (producto <= 100) { console.log("El producto no es mayor a 100"); }

// 2. Pedir al usuario una contraseña que debera ser verificada en una conodicion simple si es la contraseña correcta
let contraseñaCorrecta = "fely@0711";
let contraseñaUsuario = prompt("Ingresa tu contraseña:");

if (contraseñaUsuario === contraseñaCorrecta) { 
    console.log("Contraseña correcta"); 
}
if (contraseñaUsuario !== contraseñaCorrecta) { 
    console.log("Contraseña incorrecta"); 
}
// 3. Pedir al usuario un numero y determina si es un numero primo
let numero = Number(prompt("Ingresa un número:"));

if (numero <= 1) {
    console.log(`${numero} no es un número primo`);
}

if (numero === 2) {
    console.log(`${numero} es un número primo`);
}





