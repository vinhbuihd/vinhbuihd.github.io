
import { products } from "./productAll.js";


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


// // click bật ra popup

const buyBtns = document.querySelectorAll('.card-cart')
const popup = document.querySelector('.product-popup')


// render popup
function popupRender(product) {
    popup.style.display = 'block'
    if (product) {
        popup.innerHTML = `
        <div class="popup-box">
            <button type="button" class="btn-close" aria-label="Close"></button>
            <div class="popup-item d-flex align-items-center">
                <div class="popup-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="d-flex flex-column">
                    <div class="popup-name">${product.name}</div>
                    <div class="popup-price">${product.price.S.toLocaleString()}</div>
                </div>
            </div>
            <div class="popup-picksize">
                <div class="popup-title">Chọn size *</div>
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="S" name="flexRadioDefault" id="size-s" checked>
                        <label class="form-check-label" for="size-s">
                        Size S
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="M" name="flexRadioDefault" id="size-m">
                        <label class="form-check-label" for="size-m">
                        Size M + 5.000đ
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="L" name="flexRadioDefault" id="size-l">
                        <label class="form-check-label" for="size-l">
                        Size L + 10.000đ
                        </label>
                    </div>
                </div>
            </div>
            
            <div class="popup-note">
                <div class="popup-title">Ghi chú <span>(nếu có)</span>
                </div>
                <input class="popup-input" type="text" placeholder="Ghi chú cho quán">
            </div>
        
            <div class="popup-bottom mt-16 d-flex align-items-center justify-content-center flex-column">
                <div class="cart-item-button d-flex align-items-center">
                    <div class="minus"><i class="fa-solid fa-circle-minus"></i></div>
                    <div class="cart-item-quantity">${product.quantity}</div>
                    <div class="plus"><i class="fa-solid fa-circle-plus"></i></div>
                </div>
                <button class="btn">Thêm vào giỏ hàng : <span>${(product.price.S * product.quantity).toLocaleString()}</span> đ</button>
            </div>
        </div>
        `
    }

}

function cartSideRender(list) {
    const cardSideElement = document.querySelector('.cart-side .content')
    const cardIconQuantity = document.querySelector('.cart .cart-quantity')

    if (list.length == 0) {
        cardSideElement.innerHTML = `
            <h3>Giỏ hàng trống</h3>
            <a href='./menu.html' class='btn'>Tiếp tục mua hàng</a>
        `

        cardIconQuantity.innerHTML = 0
    }else {
        cardIconQuantity.style.display = 'block'
        cardSideElement.innerHTML = ''
        let totalQuantity = 0
        let totalPrice = 0
        console.log(list)
        
        list.forEach((product) => {
            totalPrice += product.quantity * product.sizePrice
            totalQuantity += product.quantity

            cardSideElement.innerHTML += `
                <div class="cart-item d-flex" dataset=${product.code}>
                    <div class="cart-item-image">
                        <img src=${product.image} alt=${product.alt}>
                    </div>
                    <div class="cart-item-info">
                        <div class="name">${product.name}</div> 
                        <div class="size d-flex align-items-center">Size ${product.size}<span>x ${product.quantity}</span>
                            <div class="edit" onclick='editItem(${product.code})'><i class="fa-solid fa-pen"></i></div>
                        </div>
                        <div class="note">${product.note}</div>
                    </div>
                    
                    <div class="d-flex align-items-center" >
                        <div class="cart-item-sub-price">
                            <span>${(product.quantity * product.sizePrice).toLocaleString()}</span> đ
                        </div>
                    </div>

                    <div class="delete-product d-flex align-items-center" onclick='deleteItem(${product.code})'>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div>
            `
        })
        
        cardSideElement.innerHTML += `
            <a href="../page/menu.html">Thêm món</a>
            <div class="sub-total d-flex align-items-center justify-content-between">
                Tổng cộng <span>${totalPrice.toLocaleString()} đ</span>
            </div>
            <div class="cart-side-btn text-center mt-3">
                <a href="./thanhtoan.html"class="btn">Thanh toán</a>
            </div>
        `
        
        cardIconQuantity.innerHTML = totalQuantity
    }
}


function addToCart(product) {
    let cartList = JSON.parse(localStorage.getItem('cartList')) || []
    
    const addToCart = document.querySelector('.popup-bottom .btn')
    const popupNote = document.querySelector('.popup-input')
    const radios = document.querySelectorAll('.form-check-input')

    const minus = document.querySelector('.popup-bottom .minus')
    const plus = document.querySelector('.popup-bottom .plus')
    const popupQuantity = popup.querySelector('.popup-bottom .cart-item-quantity')
    const popupBottomPrice = popup.querySelector('.popup-bottom .btn span')

    product.quantity = 1

    radios.forEach(radio => {
        radio.onchange = function () {
            popupBottomPrice.innerHTML = (product.price[radio.value] * product.quantity).toLocaleString()
        }
    })

    minus.addEventListener('click', function () {
        let radio = Array.from(radios).find(radio => radio.checked)

        if (product.quantity <=1 ) return

        product.quantity--
        popupQuantity.innerHTML = product.quantity
        popupBottomPrice.innerHTML = (product.price[radio.value] * product.quantity).toLocaleString()
    })

    plus.addEventListener('click', function () {
        let radio = Array.from(radios).find(radio => radio.checked)

        product.quantity++
        popupQuantity.innerHTML = product.quantity
        popupBottomPrice.innerHTML = (product.price[radio.value] * product.quantity).toLocaleString()
    })


    const closeCartBtn = document.querySelector('.popup-box .btn-close')
    
    closeCartBtn.addEventListener('click', function () {
        popup.style.display = 'none'
        
        // overlay.style.display = 'none'
    })

    addToCart.addEventListener('click', function () {
        let radio = Array.from(radios).find(radio => radio.checked)
        
        let newItem = {
            ...product,
            size: radio.value,
            sizePrice: product.price[radio.value],
            note: popupNote.value,
            code: new Date().valueOf()
        }
        

        // so sánh newItem đã có trong cartList hay chưa

        if (cartList.length == 0) {
            cartList.push(newItem)
            localStorage.setItem('cartList', JSON.stringify(cartList));
        } else {
            let isEqual = cartList.find(product => (newItem.id == product.id && newItem.note == product.note && newItem.size == product.size))

            if (isEqual == undefined) {
                console.log('no isEqual')
                cartList.push(newItem)
                localStorage.setItem('cartList', JSON.stringify(cartList));
            } else {
                console.log(isEqual)
                isEqual.quantity += newItem.quantity
                localStorage.setItem('cartList', JSON.stringify(cartList));
            }
        }
        
        cartSideRender(JSON.parse(localStorage.getItem('cartList')))

        
        popup.style.display = 'none'
        // overlay.style.display = 'none'
    })
}

let cartList = JSON.parse(localStorage.getItem('cartList')) || []


cartSideRender(cartList)

// Xử lý khi nhấn mua hàng
buyBtns.forEach(buyBtn => {
    buyBtn.addEventListener('click', function (e) {
        // tìm sp mình nhấn vào
        let card = e.target.closest('.card')
        
        let cardId = card.getAttribute('dataset')
        
        let product = products.filter(product => product.id == cardId)[0]

        
        // render sp trong popup
        product.quantity = 1

        popupRender(product)
        addToCart(product)
    })
})

// Validate form đăng nhập đăng ký

const signUpBtn = document.querySelector('.btn.signup')
const signInBtn = document.querySelector('.btn.signin')
const IDList = JSON.parse(localStorage.getItem('IDList')) || []

console.log(signInBtn)

signUpBtn.addEventListener('click', function (e) {
    e.preventDefault()
    const validate = signUpValidate()
    if (validate.isValid) {
        IDList.push(IDList.newId)
        localStorage.setItem('IDList', JSON.stringify(IDList));
        console.log(IDList)
    }
})

signInBtn.addEventListener('click', function () {
    console.log(IDList)
})

function signUpValidate() {
    let isValid = true

    const email = document.querySelector('.login-signup .email')
    const password = document.querySelector('.login-signup .password')
    const repeatPassword = document.querySelector('.login-signup .repeat-password')
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordformat = /^(?=.*\d)[0-9a-zA-Z]{8,}$/

    if(email.value.trim() == '' || !mailformat.test(email.value)) {
        isValid = false
        email.closest('.input-box').querySelector('.error').innerHTML = 'Vui lòng nhập email'
    } else {
        email.closest('.input-box').querySelector('.error').innerHTML = ''
    }

    if(password.value.trim() == '') {
        isValid = false
        password.closest('.input-box').querySelector('.error').innerHTML = 'Vui lòng nhập mật khẩu'
    }else if(!passwordformat.test(password.value)) {
        isValid = false
        password.closest('.input-box').querySelector('.error').innerHTML = 'Mật khẩu phải có ít nhất 8 kí tự'
    }else {
        console.log(isValid)
        password.closest('.input-box').querySelector('.error').innerHTML = ''
    }

    if(repeatPassword.value.trim() == '') {
        isValid = false
        repeatPassword.closest('.input-box').querySelector('.error').innerHTML = 'Vui lòng nhập mật khẩu'
    }else if (repeatPassword.value != password.value){
        isValid = false
        repeatPassword.closest('.input-box').querySelector('.error').innerHTML = 'Mật khẩu không đúng'
        
    }else {
        console.log(isValid)
        repeatPassword.closest('.input-box').querySelector('.error').innerHTML = ''
    }
    
    return {
        isValid, 
        newId: {
            id: email.value,
            password: password.value,
        }
    }
}







