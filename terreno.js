function obtenerValores() {
    return {
        largo: parseFloat(document.getElementById("largo").value),
        ancho: parseFloat(document.getElementById("ancho").value),
        resultado: document.getElementById("resultado")
    };
}

function calcularArea() {
    const {largo, ancho, resultado} = obtenerValores();
    resultado.innerHTML = "Área del terreno: " + (largo * ancho);
}

function calcularPerimetro() {
    const {largo, ancho, resultado} = obtenerValores();
    resultado.innerHTML = "Perímetro del terreno: " + (2 * largo + 2 * ancho);
}