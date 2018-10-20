// window.addEventListener("load", () => {
//   let fading = document.getElementsByClassName("landing")[0];
//   fading.className += " fade";
// })
//Function for hamburger-menu btn

const hamMenu = document.querySelector(".hamburger-menu");
// const menuDiv = document.querySelectorAll(".menu-item");
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

hamMenu.addEventListener("click", toggle);

//Initial state for menu = false
let showMenu = false;

function toggle(){
  if(!showMenu){
    hamMenu.classList.add("close");
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    showMenu = true;
  }else{
    hamMenu.classList.remove("close");
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showMenu=false;
  }
}
