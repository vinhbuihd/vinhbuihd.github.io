// click header nav-item drop subnav
const dropItem = document.querySelector('.drop-item')


window.addEventListener('click', function(e){   
    if (dropItem.contains(e.target)){
        dropItem.classList.toggle('show')
    } else{
        dropItem.classList.remove('show')
    }
});

// mobile click header bar show ra nav-list

const barBtn = document.querySelector('.bars-icon')
const navListEle = document.querySelector('.nav-list')

barBtn.addEventListener('click', function() {
    navListEle.classList.toggle('show')
})

// click cart icon drop cart

const cartEle = document.querySelector('.cart')
const cartDropEle = document.querySelector('.cart-drop')

window.addEventListener('click', function(e) {
    if (cartEle.contains(e.target)){
        cartDropEle.classList.add('dropdown')
    } else{
        cartDropEle.classList.remove('dropdown')
    }
})

// click header user-icon hiện ra trang đăng nhập đăng ký

const userIconEle = document.querySelector('.user-icon')
const loginStatus = document.querySelector('.login-status')
const loginCloseAll = document.querySelectorAll('.login-close')

userIconEle.addEventListener('click', function(e) {
    loginStatus.classList.toggle('show')
})

loginCloseAll.forEach(loginClose => {
    loginClose.addEventListener('click', function() {
        loginStatus.classList.toggle('show')
    })
})

// Đăng nhập đăng ký

const loginStatusEle = document.querySelector('.login-status')

const loginSingupBtn = document.querySelector('.login-signup-btn')
const loginSinginBtn = document.querySelector('.login-signin-btn')

const loginSinginEle = document.querySelector('.login-signin')
const loginSingupEle = document.querySelector('.login-signup')

const runbackEle = document.querySelector('.login-runback')

loginSingupBtn.addEventListener('click', function() {
    loginSinginEle.classList.add('hide')
    loginSingupEle.classList.add('show')
    runbackEle.classList.add('run-right')

    loginStatusEle.classList.add('light')
})

loginSinginBtn.addEventListener('click', function() {
    loginSinginEle.classList.remove('hide')
    loginSingupEle.classList.remove('show')
    runbackEle.classList.remove('run-right')

    loginStatusEle.classList.remove('light')

})