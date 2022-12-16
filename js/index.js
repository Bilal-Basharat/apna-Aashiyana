let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle('active')
}

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
 }
 