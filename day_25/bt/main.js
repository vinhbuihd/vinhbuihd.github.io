
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.menu-close-btn')
const bars = document.querySelector('.menu-icon')
const menuNav = document.querySelector('.menu-nav')
const pageBtns = document.querySelectorAll('.menu-nav li a')

bars.addEventListener('click', function() {
    overlay.classList.toggle('show')
    menuNav.classList.toggle('show')
})

closeBtn.addEventListener('click', function() {
    overlay.classList.toggle('show')
    menuNav.classList.toggle('show')
})

overlay.addEventListener('click', function() {
    overlay.classList.toggle('show')
    menuNav.classList.toggle('show')
})
