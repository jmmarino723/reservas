const modal = document.getElementById('add-modal');
const button = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const btnCancelar = modal.querySelector('.btn--passive');

function alternarFondo(){
    backdrop.classList.toggle('visible');
}

function mostrarModal(){
    modal.classList.toggle('visible');
    alternarFondo();
}


button.addEventListener('click', mostrarModal)
backdrop.addEventListener('click', mostrarModal);
btnCancelar.addEventListener('click', mostrarModal);