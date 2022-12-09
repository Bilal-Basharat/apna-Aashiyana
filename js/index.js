const hamBurger = document.querySelector(".hamBurger");
const navList = document.querySelector(".nav-list");

if(hamBurger){
    hamBurger.addEventListener("click", () =>{
        navList.classList.toggle("open");
    })
    navList.classList.toggle("open");
}