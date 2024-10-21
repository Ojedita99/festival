window.onload = function() {
    let nombre = prompt("Introduce tu nombre:");
    if (nombre) {
        let saludo = document.createElement("p");
        saludo.textContent = "¡Bienvenido/a " + nombre + " al festival!";
        document.body.insertBefore(saludo, document.querySelector("#cartelera"));
    }
}

// scripts.js

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el formulario
    const form = document.querySelector('form');

    // Escucha el evento de envío del formulario
    form.addEventListener('submit', function(event) {
        // Prevenir el envío del formulario
        event.preventDefault();

        // Ventana emergente de confirmación
        const confirmacion = confirm("¿Estás seguro de que deseas confirmar la compra de las entradas?");

        // Si el usuario confirma
        if (confirmacion) {
            // Muestra un mensaje de agradecimiento
            alert("¡Gracias por comprar tu entrada!");

            // Envía un mensaje de confirmación a la consola
            console.log("Compra confirmada. Detalles de la compra: ");
            console.log({
                nombre: document.getElementById('nombre').value,
                edad: document.getElementById('edad').value,
                tipoEntrada: document.getElementById('tipo-entrada').value,
                numeroEntradas: document.getElementById('numero-entradas').value,
                email: document.getElementById('email').value,
                telefono: document.getElementById('telefono').value,
                comentarios: document.getElementById('comentarios').value
            });

            form.submit(); // Envía el formulario
        }
    });
});




