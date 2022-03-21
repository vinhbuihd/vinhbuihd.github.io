// click bars hiện side menu

const bars = document.querySelector('.bars')
const menu = document.querySelector('.nav')
const navCloseBtn = document.querySelector('.nav-closeBtn')
const overlay = document.querySelector('.overlay')

bars.addEventListener('click', function() {
    menu.style.transform = 'translateX(0)'
    overlay.style.display = 'block'
})

navCloseBtn.addEventListener('click', function() {
    menu.style.transform = 'translateX(100%)'
    overlay.style.display = 'none'

})

overlay.addEventListener('click', function() {
    menu.style.transform = 'translateX(100%)'
    overlay.style.display = 'none'

})