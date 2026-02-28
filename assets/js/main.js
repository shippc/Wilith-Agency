/*=============== MOSTRAR MOBILE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVER MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // Quando clicamos em cada nav-link, nós removemos a classe show-menu
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
