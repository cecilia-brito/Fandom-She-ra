const button_more = document.getElementById('button-more');
const modal_menu = document.getElementById('modal');

function open_menu (){
    modal_menu.classList.toggle('active');
}

button_more.addEventListener('click', open_menu);