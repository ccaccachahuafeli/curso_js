//2. escribe un programa que use console para imprimir todos los numeros del uno al 100 con dos excepciones 
//por 3, imprime "Fizz" en lugar del numero y para los numeros divisibles  por 5 y no por 3, 
//imprime "Buzz", si el numero es divisible por 3 y 5 escribe "FizzBuzz" en lugar del numero.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  