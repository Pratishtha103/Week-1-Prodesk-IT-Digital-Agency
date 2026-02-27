"how to connect a github repository to a .git project folder?"
"linear gradient css example"
"how to toggle colour of an element in dark theme"
"what is wrong here, why isnt the nav links changing colour, on top of that the whole body dark theme doesn't work 
function toggleDark(){
    var button=document.getElementById('dark-mode')
    var navlink=document.getElementsByClassName('nav-colour')
    navlink.classList.toggle('dark-theme-navbar')
    var element=document.body
    element.classList.toggle('darkmode')
    if (button.innerHTML=='Dark Mode'){
        button.innerHTML='Light Mode'
    }
    else{
    button.innerHTML='Dark Mode'
    }
} "