// ---------------------------
// FUNCIONES ORIGINALES + ALERTAS
// ---------------------------

function triste(){
    const img = document.getElementById('carita');
    if(img) img.src = 'imagenes/triste.png';
    alert("Por que esta triste mano?");
}

function feliz(){
    const img = document.getElementById('carita');
    if(img) img.src = 'imagenes/feliz.jpeg';
    alert("asi me gusta verte mijo");
}

function cambiarColor(){
    const menu = document.getElementById('menu');
    if(menu) menu.style.color = '#c42020ff';
    alert("Asi ta mas bonito?");
}

function cambiarLogo(){
    const logo = document.getElementById('logo');
    if(logo) logo.src = 'imagenes/calamardo.jpeg';
    alert("Logo mas guapo");
}

function cambiarFondo(){
    const menu = document.getElementById('menu');
    if(menu) menu.style.background = '#d116a9ff';
    alert("Rosadito para ti");
}

function cambiodeTexto(){
    const sub = document.getElementById('Subtitulo');
    if(sub) sub.textContent = "ASI TA MA BONITO?";
    alert("AAAAA");
}

function cambiarFondo3(){
    const aside = document.getElementById('aside');
    if(aside) aside.style.background = '#7449229d';
    alert("Marron como tu");
}



// ---------------------------
// 6 BOTONES CON ALERT
// ---------------------------

function mostrarMensaje1(){ alert("Mensaje 1"); }
function mostrarMensaje2(){ alert("Mensaje 2"); }
function mostrarMensaje3(){ alert("Mensaje 3"); }
function mostrarMensaje4(){ alert("Mensaje 4"); }
function mostrarMensaje5(){ alert("Mensaje 5"); }
function mostrarMensaje6(){ alert("Mensaje 6"); }



// ---------------------------
// 4 CAMBIOS + ALERTA
// ---------------------------

function cambiarFondoGeneral(){
    document.body.style.background = "#dfe20eff";
    alert("Fondo cambiado");
}

function cambiarTextoGeneral(){
    document.body.style.color = "#40b4c9ff";
    alert("Colorsito cambiado");
}

function aumentarTamaño(){
    document.body.style.fontSize = "20px";
    alert("Grandotototote");
    
}

function reducirTamaño(){
    document.body.style.fontSize = "14px";
    alert("Tamaño chiquito");
}

function cambiarSubtituloA(){
    const t = document.getElementById("titulo1");
    if(t) t.textContent = "Si ta mejor este??";
    alert("UN TITULO DE CHIL");
}

function cambiarSubtituloB(){
    const t = document.getElementById("titulo2");
    if(t) t.textContent = "Caritas feliz y treste";
}
