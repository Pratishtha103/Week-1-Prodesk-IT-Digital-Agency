function toggleDark(){
    var button=document.getElementById('dark-mode')
    var element=document.body
    element.classList.toggle('darkmode')
    if (button.innerHTML=='Dark Mode'){
        button.innerHTML='Light Mode'
    }
    else{
    button.innerHTML='Dark Mode'
    }
}