const bars = document.querySelector('.header-icon')
const overlay = document.querySelector('.overlay')
const sideBars = document.querySelector('header .nav')
const closeBtn = document.querySelector('.nav-close')

console.log(sideBars);

bars.addEventListener('click', function() {
    sideBars.style.transform = 'translateX(0)'
    overlay.style.display = 'block'
})

closeBtn.addEventListener('click', function() {
    sideBars.style.transform = 'translateX(-100%)'
    overlay.style.display = 'none'

})

overlay.addEventListener('click', function() {
    sideBars.style.transform = 'translateX(-100%)'
    overlay.style.display = 'none'


})