function multiplicar() {
    let num1 = parseFloat(prompt("Ingresa el primer número para multiplicar:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número para multiplicar:"));
    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`El resultado de la multiplicación es: ${num1 * num2}`);
    } else {
        alert("Por favor, ingresa números válidos.");
    }
}

function elevarCuadrado() {
    let num = parseFloat(prompt("Ingresa un número para elevar al cuadrado:"));
    if (!isNaN(num)) {
        alert(`El resultado de elevar ${num} al cuadrado es: ${num ** 2}`);
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}

function restar() {
    let num1 = parseFloat(prompt("Ingresa el primer número para restar:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número para restar:"));
    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`El resultado de la resta es: ${num1 - num2}`);
    } else {
        alert("Por favor, ingresa números válidos.");
    }
}
