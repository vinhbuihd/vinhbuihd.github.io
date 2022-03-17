let products = [
    {
        id: 1,
        name: 'Caramel latte',
        alt: 'caramel-latte',
        image: './images/sp-1-caramel-latte.jpg',
        price: {
            S: 30000,
            M: 35000,
            L: 40000,
        },
        type: 'coffee',
        quantity: 1,
        star: 5,
        status: 'new',
    },
    {
        id: 2,
        name: 'Cà phê mocha',
        alt:'mocha-nong',
        image: './images/sp-2-cafe-mocha-nong.jpg',
        price: {
            S: 45000,
            M: 50000,
            L: 55000,
        },
        type: 'coffee',
        quantity: 1,
        star: 4,
        status: 'new',
    },
    {
        id: 3,
        name: 'Macchiato',
        alt:'epresso-macchiato',
        image: './images/sp-3-epresso-macchiato.jpg',
        price: {
            S: 35000,
            M: 40000,
            L: 45000,
        },
        type: 'coffee',
        quantity: 1,
        star: 5,
        status: 'special',
    },
    {
        id: 4,
        name: 'americano',
        alt:'americano',
        image: './images/sp-4-americano.jpg',
        price: {
            S: 40000,
            M: 45000,
            L: 50000,
        },
        type: 'coffee',
        quantity: 1,
        star: 4,
        status: 'special',
    },
    {
        id: 5,
        name: 'mocha socola',
        alt:'mocha-socola',
        image: './images/sp-5-mocha-socola.jpg',
        price: {
            S: 50000,
            M: 55000,
            L: 60000,
        },
        type: 'coffee',
        quantity: 1,
        star: 5,
        status: 'selling',
    },
    {
        id: 6,
        name: 'mocha caramel',
        alt:'caramel-Mocha',
        image: './images/sp-6.jpg',
        price: {
            S: 50000,
            M: 55000,
            L: 60000,
        },
        type: 'coffee',
        quantity: 1,
        star: 4,
        status: 'new',
    }
]

function clickBuy(id) {
    let product = products.filter(product => product.id == id)[0]
        
    // render sp trong popup
    product.quantity = 1

    popupRender(product)
    addToCart(product)
}

const highlightproducts = document.querySelector('.highlight-product')
const popup = document.querySelector('.product-popup')
const overlay = document.querySelector('.overlay')



function highlightProductRender() {
    highlightproducts.innerHTML = ''
    products.forEach(product => {
        highlightproducts.innerHTML += 
        
        `
        <div class="card wow rollIn" dataset="${product.id}">
            <div class="card-image" >
                <img src=${product.image} alt="${product.name}">
            </div>

            <div class="card-content">
                <div class="card-content-left d-flex align-items-center justify-content-between">
                    <div class="card-like">
                        <div class="like-icon">
                            <i class="fa-solid fa-star" style=${product.star - 1 >= 0 ? 'display:inline-block' : 'display:none'}></i>
                            <i class="fa-solid fa-star" style=${product.star - 2 >= 0 ? 'display:inline-block' : 'display:none'}></i>
                            <i class="fa-solid fa-star" style=${product.star - 3 >= 0 ? 'display:inline-block' : 'display:none'}></i>
                            <i class="fa-solid fa-star" style=${product.star - 4 >= 0 ? 'display:inline-block' : 'display:none'}></i>
                            <i class="fa-solid fa-star" style=${product.star - 5 >= 0 ? 'display:inline-block' : 'display:none'}></i>
                            
                        </div>
                    </div>
                    
                    <div class="card-price d-flex align-items-center">
                        <div class="price"><span>${product.price.S.toLocaleString()}</span> đ</div>
                    </div>
                    
                </div>
                <div class="card-content-right d-flex align-items-center justify-content-between">
                    <h3 class="card-name">${product.name}</h3>
                    
                    <div onclick="clickBuy(${product.id})" class="card-cart d-flex align-items-center justify-content-center"><i class="fa-solid fa-basket-shopping"></i></div>
                </div>
            </div>
        </div>
        `
    })
}

// render sản phẩm
if (highlightproducts) {
    highlightProductRender()
}

const buyBtns = document.querySelectorAll('.card-cart')

function popupRender(product) {
    
    popup.style.display = 'block'
    let path

    if(window.location.pathname=='/index.html'){
        path='';
      }else{
        path='.';
      }
    if (product) {
        popup.innerHTML = `
        <div class="popup-box">
            <button type="button" class="btn-close" aria-label="Close"></button>
            <div class="popup-item d-flex align-items-center">
                <div class="popup-image">
                    <img src="${path}${product.image}" alt="${product.name}">
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

    overlay.style.display = 'block'
    overlay.addEventListener('click', function () {
        popup.style.display = 'none'
    })
    closePopup()
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

        let path

        if(window.location.pathname=='/index.html'){
            path='';
        }else{
            path='.';
        }
        
        list.forEach((product) => {
            totalPrice += product.quantity * product.sizePrice
            totalQuantity += product.quantity

            cardSideElement.innerHTML += `
                <div class="cart-item d-flex" dataset=${product.code}>
                    <div class="cart-item-image">
                        <img src=${path}${product.image} alt=${product.alt}>
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
            <a href="./page/menu.html">Thêm món</a>
            <div class="sub-total d-flex align-items-center justify-content-between">
                Tổng cộng <span>${totalPrice.toLocaleString()} đ</span>
            </div>
            <div class="cart-side-btn text-center mt-3">
                <a href="./page/thanhtoan.html"class="btn">Thanh toán</a>
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
        overlay.style.display = 'none'
    })
}

function closePopup() {
    const popupBtnClose = document.querySelector('.popup-box .btn-close')

    popupBtnClose.addEventListener('click', function () {
        overlay.style.display = 'none'
        popup.style.display = 'none'
    })
}



