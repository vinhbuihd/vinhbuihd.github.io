
const products = [
    {
        id: 1,
        name: 'Freeze Matcha',
        alt: 'freeze-matcha',
        image: '../public/images/sp-15-freeze-matcha.jpg',
        price: {
            S: 30000,
            M: 35000,
            L: 40000,
        },
        type: 'Freeze',
        quantity: 1,
    },
    {
        id: 2,
        name: 'Trà Đào',
        alt:'tra-dao',
        image: '../public/images/sp-14-tradao.jpg',
        price: {
            S: 25000,
            M: 30000,
            L: 35000,
        },
        type: 'Trà',
        quantity: 1,
    },
    {
        id: 3,
        name: 'Trà Chanh',
        alt:'tra-chanh',
        image: '../public/images/sp-23-trachanh.jpg',
        price: {
            S: 25000,
            M: 30000,
            L: 45000,
        },
        type: 'Trà',
        quantity: 1,
    },
    {
        id: 4,
        name: 'Latte Sữa',
        alt:'latte-sua',
        image: '../public/images/sp-12.jpg',
        price: {
            S: 40000,
            M: 45000,
            L: 50000,
        },
        type: 'cà phê',
        quantity: 1,
    },
    {
        id: 5,
        name: 'Freeze Socola',
        alt:'freeze-socola',
        image: '../public/images/sp-18-freeze-socola.jpg',
        price: {
            S: 50000,
            M: 55000,
            L: 60000,
        },
        type: 'Freeze',
        quantity: 1,
    },
]

const highlightproducts = document.querySelector('.highlight-product')

highlightproducts.innerHTML = ''

// render sản phẩm

products.forEach(product => {
    highlightproducts.innerHTML += 
    
    `<div class="card" dataset="${product.id}">
        <div class="card-image" >
            <img src=${product.image} alt="${product.name}">
        </div>
        <div class="card-content">
            <div class="card-content-left d-flex align-items-center justify-content-between">
                
                <div class="card-like">
                    <div class="like-icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div class="card-price d-flex align-items-center">
                    <div class="price"><span>${product.price.S.toLocaleString()}</span> đ</div>
                </div>
                
            </div>
            <div class="card-content-right d-flex align-items-center justify-content-between">
                <h3 class="card-name">${product.name}</h3>
                
                <div class="card-cart d-flex align-items-center justify-content-center"><i class="fa-solid fa-basket-shopping"></i></div>
            </div>
        </div>
    </div>`
})

// thư viện owl
$(".highlight-product").owlCarousel({
    items:4,
    margin:16,
    autoplayHoverPause: true,
    loop:true,
    autoplay:true,
    dots: true,
    nav: true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        510:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

// // click bật ra popup

const buyBtns = document.querySelectorAll('.card-cart')
const popup = document.querySelector('.product-popup')
let cartList = JSON.parse(localStorage.getItem('cartList')) || []

cartSideRender(cartList)

// Xử lý khi nhấn mua hàng
buyBtns.forEach(buyBtn => {
    buyBtn.addEventListener('click', function (e) {
        let card = e.target.closest('.card')
        
        let cardId = card.getAttribute('dataset')
        
        let product = products.filter(product => product.id == cardId)[0]
        
        // render sp trong popup
        popup.style.display = 'block'
        popupRender(product)

        const minus = document.querySelector('.popup-bottom .minus')
        const plus = document.querySelector('.popup-bottom .plus')
        const popupQuantity = popup.querySelector('.popup-bottom .cart-item-quantity')
        const popupBottomPrice = popup.querySelector('.popup-bottom .btn span')
        const radios = document.querySelectorAll('.form-check-input')

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


        const addToCart = document.querySelector('.popup-bottom .btn')
        const closeCartBtn = document.querySelector('.popup-box .btn-close')
        const popupNote = document.querySelector('.popup-input')
    
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

            product.quantity = 1
            popup.style.display = 'none'
            // overlay.style.display = 'none'
        })
        
        closeCartBtn.addEventListener('click', function () {
            popup.style.display = 'none'
            product.quantity = 1
            // overlay.style.display = 'none'
        })
    })
})





// render popup
function popupRender(product) {
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

function editItem(code) {
    console.log(code)
}

// render product in cartside
function cartSideRender(list) {
    const cardSideElement = document.querySelector('.cart-side .content')
    const cardIconQuantity = document.querySelector('.cart .cart-quantity')
    
    
    if (list.length == 0) {
        cardSideElement.innerHTML = `
            <h3>Giỏ hàng trống</h3>
            <a href='../page/menu.html' class='btn'>Tiếp tục mua hàng</a>
        `

        cardIconQuantity.innerHTML = 0
    }else {
        cardIconQuantity.style.display = 'block'
        cardSideElement.innerHTML = ''
        let totalQuantity = 0
        let totalPrice = 0
        
        
        list.forEach((product) => {
            totalPrice += product.quantity * product.sizePrice
            totalQuantity += product.quantity

            cardSideElement.innerHTML += `
                <div class="cart-item d-flex" dataset=${product.code} onclick='editItem(123)'>
                    <div class="cart-item-image">
                        <img src=${product.image} alt=${product.alt}>
                    </div>
                    <div class="cart-item-info">
                        <div class="name">${product.name}</div> 
                        <div class="size">Size ${product.size} <span>x ${product.quantity}</span></div>
                        <div class="note">${product.note}</div>
                    </div>
                    
                    <div class="d-flex align-items-center" >
                        <div class="cart-item-sub-price">
                            <span>${(product.quantity * product.sizePrice).toLocaleString()}</span> đ
                        </div>
                    </div>

                    <div class="d-flex align-items-center">
                        <div class="edit" onclick='editItem()'><i class="fa-solid fa-pen"></i></div>  
                    </div>
                </div>
            `
        })
        
        cardSideElement.innerHTML += `
            <a href="./page/menu.html">Thêm món</a>
            <div class="sub-total d-flex align-items-center justify-content-between">
                Tổng cộng <span>${totalPrice.toLocaleString()} đ</span>
            </div>
            <div class="cart-side-btn text-center mt-3">
                <a href="./page/cart.html"class="btn">Thanh toán</a>
            </div>
        `

        cardIconQuantity.innerHTML = totalQuantity
    }
}


