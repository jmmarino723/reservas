const studentAdd = document.getElementById('addStudent');
const addModal = document.getElementById('add-modal');
const addBackdrop =document.getElementById('backdrop');
const btnCancel =document.getElementById('cancelBtn');
const inputUser = addModal.querySelectorAll('input');
const confirmAdd =addModal.querySelector('.btn--success')

studentAdd.addEventListener('click',function(){
    changeBackdrop();
});
btnCancel.addEventListener('click',function(){
    changeBackdrop();
});

confirmAdd.addEventListener('click',function(){
    addUser();
});

function addUser(){
    let student=inputUser[0];
    let test=inputUser[1].value;
    let grade=inputUser[2].value;
    if (student.value.trim()===''){
        alert("Ingrese un nombre de estudiante válido.")
    }
    else if (student.trim===''){

    }
    //alert(student+test+grade);
    changeBackdrop();
}

function changeBackdrop (){
    addBackdrop.classList.toggle('visible');
    addModal.classList.toggle('visible');
}
