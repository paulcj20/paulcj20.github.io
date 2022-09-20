/* Formulario */
const nombre = document.querySelector('.nombreIn');
const telefono = document.querySelector('telIn');
const correo = document.querySelector('.correoIn')
const mensaje = document.querySelector('.mensajeIn');
const submit = document.querySelector('.submit');
const alerta = document.querySelector('.texto-alerta');
let validar = function() { 
    if(nombre.value && telefono.value && correo.value && mensaje.value){
            alerta.innerHTML = "";
    }else {
        alerta.innerHTML = 'Debes completar todos los campos';
    };
};

submit.addEventListener('click', validar());
document.addEventListener('DOMContentLoaded', () => {
});
