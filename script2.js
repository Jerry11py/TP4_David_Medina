// Mostrar mensaje de bienvenida
alert("¡Bienvenido a la galería!");

// Preguntar la edad al usuario
let edad = prompt("¿Cuántos años tienes?");
if (edad !== null && edad !== "") {
    if (parseInt(edad) > 20) {
        document.getElementById('mensaje-edad').textContent = "Eres mayor de 20 años.";
        alert("Eres mayor de 20 años.");
    } else {
        document.getElementById('mensaje-edad').textContent = "No eres mayor de 20 años.";
        alert("No eres mayor de 20 años.");
    }
} else {
    alert("No ingresaste tu edad.");
}

// Cambiar imágenes al pasar el mouse
const images = [
    { id: "img1", original: "img/image1.png", hover: "img/image1_hover.png" },
    { id: "img2", original: "img/image2.png", hover: "img/image2_hover.png" },
    { id: "img3", original: "img/image3.png", hover: "img/image3_hover.png" },
    { id: "img4", original: "img/image4.png", hover: "img/image4_hover.png" },
    { id: "img5", original: "img/image5.png", hover: "img/image5_hover.png" },
];

images.forEach(img => {
    const element = document.getElementById(img.id);
    element.addEventListener("mouseover", () => {
        element.src = img.hover;
    });
    element.addEventListener("mouseout", () => {
        element.src = img.original;
    });
});
