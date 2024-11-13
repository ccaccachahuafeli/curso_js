// 1.crear una funcion que devuelva el numero menor pasado por argumentos

function numeroMenor() {
    if (arguments.length === 0) {
      return null;
    }
    
    let menor = arguments[0]; 
    
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] < menor) {
        menor = arguments[i]; 
      }
    }
    
    return menor;
  }
  
  console.log(numeroMenor(5, 3, 9,6)); 
  
// 2.haciendo uso de la recursion, crear una funcion que me muestre los primeros 20 numeros de la serie fibonancci.
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Imprimir los primeros 20 números de Fibonacci
for (let i = 0; i < 20; i++) {
    console.log(fibonacci(i));
}


  