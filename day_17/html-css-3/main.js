const bar = document.querySelector('.header-icon')
const sideMenu = document.querySelector('.side-menu')
const closeBtn = document.querySelector('.side-menu .close')
const overlay = document.querySelector('.overlay')
console.log(closeBtn);
bar.addEventListener('click', function() {
    sideMenu.classList.toggle('show')
    overlay.classList.toggle('showOverlay')
})

closeBtn.addEventListener('click', function() {
    sideMenu.classList.toggle('show')
    overlay.classList.toggle('showOverlay')
})

overlay.addEventListener('click', function() {
    sideMenu.classList.toggle('show')
    overlay.classList.toggle('showOverlay')
})