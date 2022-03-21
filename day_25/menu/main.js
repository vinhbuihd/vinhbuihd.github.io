const btn = document.querySelector('.menu-icon') 
const menuEle = document.querySelector('.menu') 
const navEle = document.querySelector('nav') 

btn.addEventListener('click', function() {
    menuEle.classList.toggle('show')
})
