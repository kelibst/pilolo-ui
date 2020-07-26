const dropdowntoggler = document.querySelector('.dropdown-toggler');



dropdowntoggler.addEventListener('click', function (){
    const position = document.querySelector('.drop-container');
    position.classList.toggle('d-none')
});

