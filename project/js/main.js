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
const cartSideEle = document.querySelector('.cart-side')
const cartSideCloseBtn = document.querySelector('.cart-side .btn-close')

const overlay = document.querySelector('.overlay')

cartEle.addEventListener('click', function(e) {
    cartSideEle.classList.add('open')
    overlay.style.display = 'block'
})

cartSideCloseBtn.addEventListener('click', function() {
    cartSideEle.classList.remove('open')
    overlay.style.display = 'none'
})

overlay.addEventListener('click', function() {
    cartSideEle.classList.remove('open')
    overlay.style.display = 'none'
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

// header scroll

const headerEle = document.querySelector('header')

var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop;
   console.log(st);
   if (st > lastScrollTop){
    headerEle.style.transform = 'translateY(-100%)'
   }else {
    headerEle.style.transform = 'translateY(0)'
    headerEle.classList.add('scroll-top')
   }
   lastScrollTop = st > 0 ? st : 0;

   if (st == 0) {
    headerEle.classList.add('bg-transparent')
    headerEle.classList.remove('scroll-top')
   } else {
    headerEle.classList.remove('bg-transparent')
   }
}, false);