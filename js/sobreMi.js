const tazas = document.querySelector('.contador-tazas');
const lineas = document.querySelector('.contador-lineas');

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
})