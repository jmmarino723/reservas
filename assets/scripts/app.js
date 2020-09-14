const modal = document.getElementById('add-modal');
const button = document.querySelector('header button');

function showModal(){
    modal.classList.toggle('visible');
}


button.addEventListener('click', showModal)
