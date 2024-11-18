// bienvenir a la pagina
alert("¡Bienvenido a la página!");


// Preguntar el nombre al usuario y dar la bienvenida
let nombre = prompt("¡Bienvenido! ¿Cómo te llamas?");
if (nombre) {
    document.getElementById('mensaje-bienvenida').textContent = `¡Hola, ${nombre}! Bienvenido a nuestro sitio.`;
    document.getElementById('nombre-usuario').textContent = nombre;

    // Mostrar el mensaje adicional de bienvenida
    setTimeout(() => {
        alert(`Bienvenido, ${nombre}`);
    }, 500);
} else {
    document.getElementById('mensaje-bienvenida').textContent = "¡Hola, visitante! Bienvenido a nuestro sitio.";
    document.getElementById('nombre-usuario').textContent = "Visitante";
}
