//3. escribe un programa que cree una cadena que represente un tablero de 8x8 
//usando caracteres de salto de linea para separar las lineas, en cada posicion 
//del tablero hay un caracter de espacio o un caracter "#". los caracteres deben formar un tablero de ajedrez.
/** ```
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
```*/
// Inicializamos el tamaño del tablero de 8x8 
const tamaño = 8; 
let tablero = ''; 

for (let row = 0; row < tamaño; row++) {
  for (let col = 0; col < tamaño; col++) {
    if ((row + col) % 2 === 0) {
      tablero += ' '; 
    } else {
      tablero += '#';  
    }
  }
  tablero += '\n'; 
}
console.log(tablero);

