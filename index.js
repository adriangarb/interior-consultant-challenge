document.querySelector('.btn').onclick = function (e){
    const body = document.body
    var menu = document.querySelector('.menu')
    var btn = document.querySelector('.btn')
    menu.classList.toggle('is-active')
    btn.classList.toggle('is-active')
    e.preventDefault()
    if(menu.className.includes('is-active')){
        document.body.style.overflow = 'hidden'
    }
    else{
        document.body.style.overflow = 'scroll'
    }
} 