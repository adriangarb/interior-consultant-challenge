const list = document.querySelector(".menu-list");
const input = document.querySelector('#icon');
const trueInput = document.querySelector('.fas')
const body = document.body
input.addEventListener('click', function(){
        list.classList.toggle('show-list')
        if(trueInput.className.includes('fa-bars')){
            trueInput.classList.replace('fa-bars','fa-times')
            body.style.overflow = 'hidden'
        }
        else{
            trueInput.classList.replace('fa-times','fa-bars')
            body.style.overflow = 'scroll'
        }

})