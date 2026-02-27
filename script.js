function toggleDark(){
    var button=document.getElementById('dark-mode')
    var navlink=document.getElementsByClassName('nav-colour')
    for (let i = 0; i < navlink.length; i++) {
        navlink[i].classList.toggle('dark-theme-navlinks')
    }
    var element=document.body
    element.classList.toggle('darkmode')
    if (button.innerHTML=='Dark Mode'){
        button.innerHTML='Light Mode'
    }
    else{
    button.innerHTML='Dark Mode'
    }
}