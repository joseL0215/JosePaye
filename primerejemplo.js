
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
    alert("Asi se ve mejor papum??");
}

function cambiarFondo3(){
    const aside = document.getElementById('aside');
    if(aside) aside.style.background = '#7449229d';
    alert("Marron como tu");
}


function mostrarMensaje1(){ alert("Ya me la se al JS"); }
function mostrarMensaje2(){ alert("Full chat yipiti"); }
function mostrarMensaje3(){ alert("Sin miedo al exitooo"); }
function mostrarMensaje4(){ alert("Alerta, no me toques tanto"); }
function mostrarMensaje5(){ alert("Mucho me apretas oe"); }
function mostrarMensaje6(){ alert("Tarea 3 complete"); }


function cambiarFondoGeneral(){
    document.body.style.background = "#95ce66ff";
    alert("Fondito ma verdecito");
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
