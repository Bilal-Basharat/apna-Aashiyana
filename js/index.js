let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toString('active')
}