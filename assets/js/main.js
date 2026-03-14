/*=============== MOSTRAR MOBILE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

/* Mostrar menu */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/* Esconder menu */
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVER MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   // Quando clicamos em cada nav-link, nós removemos a classe show-menu
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== MUDAR O ESTILO DO HEADER ===============*/
const bgHeader = () => {
   const header = document.getElementById('header')
   // Adicionar a classe .bg-header se o bottom do scroll da viewport é maior que 50
   this.scrollY >= 50 ? header.classList.add('bg-header')
      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)
bgHeader()

/*=============== SERVIÇOS COM SWIPER ===============*/
const swiperServices = new Swiper('.services-swiper', {
   loop: true,
   grabCursor: true,
   spaceBetween: 24,
   slidesPerView: 'auto',
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

/*=============== MOSTRAR BOTÃO DE SUBIR PRA CIMA ===============*/
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   // Acrescentar a classe .scroll-header no fundo do scroll da viewport quando for maior que 350
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
scrollUp()

/*=============== ATIVAR SEÇÕES DO LINK AO SCROLLAR ===============*/
const sections = document.querySelectorAll('section[id]')


const scrollActive = () => {
   
   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id, 
            top = section.offsetTop - 50, 
            height = section.offsetHeight, 
            link = document.querySelector('.nav-menu a[href*=' + id + ']') 

      if(!link) return

      link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)