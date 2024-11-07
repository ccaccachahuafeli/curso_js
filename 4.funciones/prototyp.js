// Crear un objeto 
/**let persona = {
    nombre: 'fely',
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }
  };
  
  // Acceder al prototipo de `persona`
  console.log(persona.__proto__); // Mostrará el prototipo de Object
  
  // Crear un objeto que hereda de `persona`
  let trabajador = Object.create(persona);
  trabajador.ocupacion = 'Desarrollador';
  
  // Acceder a propiedades y métodos heredados del prototipo
  console.log(trabajador.nombre); // "fely" (heredado de `persona`)
  trabajador.saludar(); // "Hola, mi nombre es fely" (heredado de `persona`)
// Crear un objeto literal*/

// Función constructora para crear un objeto Persona
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  
  // Método 'cumplirAños' agregado al prototipo de Persona
  Persona.prototype.cumplirAños = function() {
    this.edad += 1;
    console.log(`${this.nombre} ha cumplido un año más y ahora tiene ${this.edad} años.`);
  };
  
  // Método 'saludar' agregado al prototipo de Persona
  Persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  };
  
  // Crear instancias de Persona
  const juan = new Persona("Juan", 30);
  const maria = new Persona("María", 25);
  
  // Uso de los métodos de las instancias
  juan.saludar(); // Output: Hola, mi nombre es Juan y tengo 30 años.
  maria.saludar(); // Output: Hola, mi nombre es María y tengo 25 años.
  
  juan.cumplirAños(); // Output: Juan ha cumplido un año más y ahora tiene 31 años.
  maria.cumplirAños(); // Output: María ha cumplido un año más y ahora tiene 26 años.


  // Declaro un constructor
function Automovil (marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }
  
  // Lo instancio
  var miAuto = new Automovil('Tesla', 'Cybertruck', 'Negro');
  
  // Agrego la propiedad ruedas a la propiedad prototype del constructor
  Automovil.prototype.ruedas = 4;
  
  // La instancia de Automovil hereda la propiedad 'ruedas' del prototype
  console.log(miAuto.color); // "Negro"
  console.log(miAuto.ruedas); // 4
  console.log(miAuto.modelo);
  console.log(miAuto.marca);
    