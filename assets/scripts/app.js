const studentAdd = document.getElementById('addStudent');
const addModal = document.getElementById('add-modal');
const addBackdrop =document.getElementById('backdrop');
const btnCancel =document.getElementById('cancelBtn');
const inputUser = addModal.querySelectorAll('input');
const confirmAdd =addModal.querySelector('.btn--success')
let aux=1;

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
    let test=inputUser[1];
    let grade=inputUser[2];
    if (student.value.trim()===''){
        alert("Ingrese un nombre de estudiante.")
    }
    else if (student.value.trim()==='' && test.value.trim()===''){
        alert("Ingrese el nombre del estudiante y del exámen.");
    }
    else if (student.value.trim()==='' && test.value.trim()==='' && parseInt(grade.value.trim())===''){
        alert("Ingrese los campos requeridos.")
    }
    else if (parseInt(grade.value.trim())<0 || parseInt(grade.value.trim())>5){
        alert("La nota debe estar entre 0 y 5.")
    }
    else if (test.value.trim()===''){
        alert("Ingrese el nombre del exámen.");
    }
    else if (grade.value.trim()===''){
        alert("Ingrese nota del exámen.");
    }
    else{
        listStudent(student.value,test.value,grade.value);
        changeBackdrop();
    }
    //alert(student+test+grade);
}

function listStudent (imageUrl,title,rating){
    const studentList=document.getElementById('alumnos-list');
    const newStudent=document.createElement('li');
    newStudent.className='movie-element';
    newStudent.innerHTML=` <div class="student-element__image"> <img src="${imageUrl}" alt="${title}"> </div> <div class="student-element__info"> <h2>${title}</h2> <p>Calificación ${rating}/5</p> </div> `;
    let newID='';
    newID=newID+(aux++);
    newStudent.id=newID;
    newStudent.addEventListener('click',function(){
        deleteMovie(newID);
    });
    studentList.appendChild(newStudent);
}

function deleteMovie(ID){
    const toDelete=document.getElementById(ID);
    toDelete.remove();
}

function changeBackdrop (){
    addBackdrop.classList.toggle('visible');
    addModal.classList.toggle('visible');
}
