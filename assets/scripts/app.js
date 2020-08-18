const dropdowntoggler = document.querySelector('.dropdown-toggler');
const headerContainer= document.querySelector('.header-container');
const hiddenInp = document.querySelector('.searcher-form');

headerContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('search-icon')){
        hiddenInp.classList.toggle('d-none');
    }
})

dropdowntoggler.addEventListener('click', function (){
    const position = document.querySelector('.drop-container');
    position.classList.toggle('d-none')
});

