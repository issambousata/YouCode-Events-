const menuIcon = document.querySelector("#menu_icon") ;
const navbar = document.querySelector('.Navbar');
menuIcon.addEventListener('click' , ()=>{
    menuIcon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
})