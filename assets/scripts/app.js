
const modal = document.getElementById('add-modal');
const button = document.querySelector("header button");
const transparencia = document.getElementById('backdrop');
const cancelAgregar = modal.querySelector('.btn--passive');
const entradasUsuario = modal.querySelectorAll('input');
const confirmarAgregar = modal.querySelector('.btn--success');

function activarModal(){
  transparencia.classList.toggle('visible');
  modal.classList.toggle('visible');
}

function cancelarBtn(){
  activarModal();
}


function agregarEstudiante(){

  let estudianate = entradasUsuario[0];
  let exame = entradasUsuario[1];
  let calificacion = entradasUsuario[2];

  if(estudianate.value.trim()===''){
    alert('El estudiante no puede ser vacio')
  } 
  else if(calificacion.value.trim() ==='' && parseInt(calificacion.value.trim() >= 0)){
    alert("dfdsf");
  }

  activarModal();
}


transparencia.addEventListener('click', activarModal);
button.addEventListener('click', activarModal);
cancelAgregar.addEventListener('click',cancelarBtn);
confirmarAgregar.addEventListener('click',agregarEstudiante);