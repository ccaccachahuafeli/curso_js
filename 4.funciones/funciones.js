// ejercicio
// crear una funcion que me de un saludo de bienvenida
/**function saludo(){
    console.log("bienvenido")
}*/
/**let saludo=function(){
    console.log(bienvenido)
}
saludo()*/


 // BINDIG en javascript  lo que hace es subir las funciones declarativas a la cabecera de mi archivo
/**function despedida(){
    return "adios"
}*/
/**console.log(despedida())

function despedida(){
    return "adios"
}

// variable (enlace)
// let saludo declacrion

console.log(despedida())
// en el caso de funcion como valor o funciones flecha el bindig solo elevara al princio  del archivo la declaracion del enlace o variable mas no el valor por eso en estos casos debemos ejecutar la funciones despues de haberlo creado.
let saludo=()=>{return "hola primo"} // =()=>{return "hola primo" esto es inicializacion
console.log(saludo())
//en el caso de la funcion declarativa el bindig eleva toda la funcion al principio del archivo por eso podemos ejecutar la funcion desde cualquier parte del archivo encluso antes de que sea creada.
function despedida(){
    return "adios"
}*/

// ejercicio crear una funcion que tenga o almacene una variable contador y podamos con funciones realizar la suma mas uno de esta variable y la resta mas uno de la misma variable ademas de poder tenr una funcion que permita acceder al valor actuala y poder mostrarlo.
// let contador=0
//fuction incremento
// return contador ++
//fuction decremento
//return contador --
//fuction valorContador
//return contador

function contador(){
    //variable local 
    let contador=0
    function incre(){
        return contador++
    }
    function decre(){
        return contador--
    }
    function valueCount(){
        console.log(contador)
    }
    return {
       valueCount,
        incre,
        decre
    }
}
let count1=contador()
for(let i=0;i<5;i++){
    count1.incre()
}
count1.valueCount()

let count2=contador()
for(let i=0;i)
count2.incre()
coun1.decre()
