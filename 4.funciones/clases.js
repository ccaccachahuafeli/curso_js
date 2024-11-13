// ejercicios
// diseñar un clase para mi entidad celular
// tendra como atributos numero, marca, modelo, capacidad de bateria.
// tendra como metodo encender,apagar, llamar, colgar, enviar mensaje.
class Celular {
    constructor(numero, marca, modelo, capacidadBateria) {
      this.numero = numero;
      this.marca = marca;
      this.modelo = modelo;
      this.capacidadBateria = capacidadBateria;
      //this.encendido = false;
    }
  
    encender() {
      if (!this.encendido) {
        this.encendido = true;
        console.log(`${this.marca} ${this.modelo} está encendido.`);
      } else {
        console.log(`${this.marca} ${this.modelo} ya está encendido.`);
      }
    }
  
    apagar() {
      if (this.encendido) {
        this.encendido = false;
        console.log(`${this.marca} ${this.modelo} está apagado.`);
      } else {
        console.log(`${this.marca} ${this.modelo} ya está apagado.`);
      }
    }
  
    llamar(numeroDestino) {
      if (this.encendido) {
        console.log(`Llamando al número ${numeroDestino} desde ${this.numero}...`);
      } else {
        console.log("El celular está apagado. Enciéndelo para hacer una llamada.");
      }
    }
  
    colgar() {
      if (this.encendido) {
        console.log("Llamada colgada.");
      } else {
        console.log("El celular está apagado. No hay llamada para colgar.");
      }
    }
  
    enviarMensaje(numeroDestino, mensaje) {
      if (this.encendido) {
        console.log(`Enviando mensaje a ${numeroDestino}: ${mensaje}`);
      } else {
        console.log("El celular está apagado. Enciéndelo para enviar un mensaje.");
      }
    }
  }
  
  // Ejemplo de uso:
  const miCelular = new Celular("903552279", "Samsung", "Galaxy S21", "4000mAh");
  miCelular.encender();
  miCelular.llamar("987600121");
  miCelular.enviarMensaje("9876205690", "Hola, ¿cómo estás?");
  miCelular.colgar();
  miCelular.apagar();
  