
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.icon')
const headerMenuBtn = document.querySelector('.header-menu-icon')
const sideBars = document.querySelector('.side-bars')


headerMenuBtn.addEventListener('click', function() {
    overlay.style.display = 'block';
    sideBars.style.transform = 'translateX(0)'
})

closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';

    sideBars.style.transform = 'translateX(-100%)'
})

overlay.addEventListener('click', function() {
    overlay.style.display = 'none';

    sideBars.style.transform = 'translateX(-100%)'
})