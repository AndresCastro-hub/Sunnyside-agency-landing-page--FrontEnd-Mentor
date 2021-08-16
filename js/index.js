const hamburger = document.querySelector('.hamburger');

const mobileMenu = document.querySelector('.menu');

hamburger.addEventListener('click', function(){
   
    hamburger.classList.toggle('hide');

    mobileMenu.classList.toggle('menu-mobile');
   
});