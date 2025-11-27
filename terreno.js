function calcularArea() {
    let largo = parseFloat(document.getElementById("largo").value);
    let ancho = parseFloat(document.getElementById("ancho").value);
    let resultado = document.getElementById("resultado");

    let area = largo * ancho;
    resultado.innerHTML = "Área del terreno: " + area;
}

function calcularPerimetro() {
    let largo = parseFloat(document.getElementById("largo").value);
    let ancho = parseFloat(document.getElementById("ancho").value);
    let resultado = document.getElementById("resultado");

    let perimetro = 2 * largo + 2 * ancho;
    resultado.innerHTML = "Perímetro del terreno: " + perimetro;
}


