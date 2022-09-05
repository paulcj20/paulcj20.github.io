//sobre mi
const tazas = document.querySelector('.contador-tazas');
const lineas = document.querySelector('.contador-lineas');
// index
const titulo = document.querySelector(h1);
const subtitulo = document.querySelector(h2);
const ubicacion = document.querySelector('.ubicacion');
const boton = document.querySelector('.boton');
const botones2 = document.querySelector('.boton-secundario');

let agregar1 = function() {
    let valorTazas = parseInt(tazas) ;
    let valorlineas = parseInt(lineas);
    valorTazas += 1;
    valorlineas += 1095;
    tazas.innerHTML = toString(valorTazas);
    tazas.innerHTML = toString(valorlineas);
    setTimeout(agregar2(), 7000);
};

let agregar2 = function() {
    let valorTazas = tazas;
    let valorlineas = lineas;
    valorTazas += 1;
    valorlineas += 1095;
    tazas.innerHTML = toString(valorTazas);
    tazas.innerHTML = toString(valorlineas);
    setTimeout(agregar1(), 7000);
}

document.addEventListener('DOMContentLoaded', () => {
    //setTimeout(agregar1, 3000)
    setTimeout(titulo.removeAttribute('hidden'), 100);
    setTimeout(subtitulo.removeAttribute('hidden'), 200);
    setTimeout(ubicacion.removeAttribute('hidden'), 300);
    setTimeout(boton.removeAttribute('hidden'), 400);
    setTimeout(botones2.removeAttribute('hidden'), 500);
    
})