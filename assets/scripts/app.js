const modal = document.getElementById('add-modal');
const button = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const btnCancelar = modal.querySelector('.btn--passive');
const btnAgregar = modal.querySelector('.btn--success');
const usrInputs = modal.querySelectorAll('input');

function alternarFondo(){
    backdrop.classList.toggle('visible');
}

function mostrarModal(){
    modal.classList.toggle('visible');
    alternarFondo();
}

function agregarElemento(){
    for(let i =0; i<usrInputs.length;i++){
        let entrada  = usrInputs[i];
        if(entrada.value.trim()===''){
            alert('Valores erroneos');
            break;
        }
    }
    if(parseInt(usrInputs[2]) > 5 || parseInt(usrInputs[2]) < 0){
        alert('Calificacion no esta entre 0 y 5');
    }
}

button.addEventListener('click', mostrarModal)
backdrop.addEventListener('click', mostrarModal);
btnCancelar.addEventListener('click', mostrarModal);
btnAgregar.addEventListener('click', agregarElemento);