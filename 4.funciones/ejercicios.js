// haciendo el uso de las funciones de tipo closure.
//ejercicos 1
//pedir al usuario su nombre y su edad, verificar que su edad sea mayor de 18 años en ese caso mostraremos un mensaje de bienvenida mas el nombre que ingreso el usuario.

/**function crearVerificadorDeEdad() {
    
    return function() {
        
        const nombre = prompt("¿Cuál es tu nombre?");
        const edad = parseInt(prompt("¿Cuántos años tienes?"), 10);

        
        if (edad >= 18) {
            alert(`¡Bienvenido, ${nombre}!`);
        } else {
            alert("Lo siento, necesitas ser mayor de 18 años.");
        }
    };
}

const verificador = crearVerificadorDeEdad();

verificador();*/

// ejercicios 2
// crear un programa registrar el nombre de un producto el  usuario podra luego eliminar el producto o actualizar el nombre del producto.
// observacion al realizar la actualizacion podre ver el valor anterior como valor nuevo

function Producto() {
    this.nombre = '';

    this.ingresodeProducto = function() {
        this.nombre = prompt("Ingresa el nombre del producto:");
        console.log(Producto registrado: ${this.nombre});
    };

    this.actualizarProducto = function() {
        const nombreAnterior = this.nombre;
        const nuevoNombre = prompt("Ingresa el nuevo nombre del producto:");

        if (nuevoNombre) {
            this.nombre = nuevoNombre;
            console.log(Producto actualizado: Anterior: ${nombreAnterior}, Nuevo: ${this.nombre});
        } else {
            console.log("No se ha realizado ninguna actualización.");
        }
    };
    this.eliminarProducto = function() {
        if (this.nombre) {
            const confirmacion = confirm(¿ desea eliminar el producto "${this.nombre}"?);
            if (confirmacion) {
                console.log(Producto eliminado: ${this.nombre});
                this.nombre = '';
            } else {
                console.log("El producto no ha sido eliminado.");
            }
        } else {
            console.log("No hay ningún producto registrado para eliminar.");
        }
    };
}
const producto = new Producto();
producto.ingresodeProducto();
producto.actualizarProducto();
producto.eliminarProducto();