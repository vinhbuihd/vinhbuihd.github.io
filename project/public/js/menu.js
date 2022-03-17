const productsList = document.querySelector('.product-list')
const itemsQuantity = document.querySelector('.item-quantity-bar span')
const popup = document.querySelector('.product-popup')
const overlay = document.querySelector('.overlay')

let products = []
let filterTypeList = []

async function getProducts() {
    try {
        const res = await getProductsAPI()
        products = res.data
        renderMenu(products, 'coffee')
        bestsellerRender(products)
        
        const bestsellerItems = document.querySelectorAll('.filter-bestseller .item')
        bestsellerItems.forEach(item => {
            item.addEventListener('click', function (e) {
                let card = e.target.closest('.item')
                console.log(123)
                
                let cardId = card.getAttribute('dataset')
                
                let product = products.find(product => product.id == cardId)
        
                
                // render sp trong popup
                product.quantity = 1
        
                popupRender(product)
                addToCart(product)
            })
        })
    } catch (error) {
        console.log(error)
    }
}

window.onload = () => {
    getProducts()
}

// chọn sp radio
const radioGroup = document.querySelectorAll('.radio-group input')
radioGroup.forEach(radio => {
    radio.addEventListener('change', function () {
        console.log(filterTypeList)
        console.log(radio.value)
        const radioFilterList = [...filterTypeList].filter(product => product.status == radio.value)
        renderMenu(radioFilterList)
        
    })
})

// bỏ chọn radio
const filterDeleteBtn = document.querySelector('.filter-delete-btn')
filterDeleteBtn.addEventListener('click', function () {
    radioGroup.forEach(radio => {
        radio.checked = false
    })
    renderMenu(filterTypeList)
})

// Click filter name -> active
const filterItems = document.querySelectorAll('.filter-item')
filterItems.forEach(filterItem => {
    filterItem.addEventListener('click', function () {
        document.querySelector('.filter-item.active').classList.remove('active')
        filterItem.classList.add('active')
        const buyBtns = document.querySelectorAll('.card-cart')
        filterDeleteBtn.click(

        )
    })
})

// Tìm kiếm sản phẩm
const searchInput = document.querySelector('.filter-search')
searchInput.addEventListener('input', function (e) {
    const searchList = [...filterTypeList].filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()))
    
    renderMenu(searchList)
})


function renderMenu(products, type) {
    productsList.innerHTML = ''
    if (products.length == 0) {
        productsList.innerHTML = `<div class='text-center'>Không có sản phẩm</div>`
        itemsQuantity.innerHTML = 0
    }

    if (type == undefined) {
        itemsQuantity.innerHTML = `${products.length}`
    
        products.forEach(product => {
            productsList.innerHTML += `
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow animate__slideInUp" data-wow-duration="2.5s">
                    <div class="card" dataset="${product.id}" >
                        <div class="card-image" >
                            <img src=.${product.image} alt="${product.name}">
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
                                
                                <div class="card-cart d-flex align-items-center justify-content-center"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            `

        })
    } else {
        filterTypeList = products.filter(product => product.type == type)

        itemsQuantity.innerHTML = `${filterTypeList.length}`
        
        filterTypeList.forEach((product, index) => {
            productsList.innerHTML += `
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6  wow animate__slideInUp"  data-wow-duration="2.5s">
                    <div class="card" dataset="${product.id}" >
                        <div class="card-image" >
                            <img src=.${product.image} alt="${product.name}">
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
                                
                                <div class="card-cart d-flex align-items-center justify-content-center"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            `

        })
    }
        const buyBtns = document.querySelectorAll('.card-cart')
        buyBtns.forEach(buyBtn => {
            buyBtn.addEventListener('click', function (e) {
                // tìm sp mình nhấn vào
                let card = e.target.closest('.card')
                console.log(123)
                
                let cardId = card.getAttribute('dataset')
                
                let product = products.find(product => product.id == cardId)
        
                
                // render sp trong popup
                product.quantity = 1
        
                popupRender(product)
                addToCart(product)
            })
        })
}

function popupRender(product) {
    
    popup.style.display = 'block'
    overlay.style.display = 'block'
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

function getProductsAPI() {
    return axios.get("/products");
}

function bestsellerRender() {
    const filterBestseller = document.querySelector('.filter-bestseller')

    const bestsellerList = products.filter(product => product.status == 'selling')

    for (let i = 0; i < 3; i++) {
        const item = bestsellerList[i]
        filterBestseller.innerHTML += `
        <div class="item d-flex align-items-center flex-row wow animate__slideInUp" dataset="${item.id}" data-wow-duration ='1.5s'>
            <div class="filter-item-image">
                <img src=.${item.image} alt=${item.name}>
            </div>
            <div class="filter-item-info">
                <div class="card-name">${item.name}</div>
                
                <div class="card-like">
                    <div class="like-icon">
                    <i class="fa-solid fa-star" style=${item.star - 1 >= 0 ? 'display:inline-block' : 'display:none'}></i>
                    <i class="fa-solid fa-star" style=${item.star - 2 >= 0 ? 'display:inline-block' : 'display:none'}></i>
                    <i class="fa-solid fa-star" style=${item.star - 3 >= 0 ? 'display:inline-block' : 'display:none'}></i>
                    <i class="fa-solid fa-star" style=${item.star - 4 >= 0 ? 'display:inline-block' : 'display:none'}></i>
                    <i class="fa-solid fa-star" style=${item.star - 5 >= 0 ? 'display:inline-block' : 'display:none'}></i>
                    </div>
                </div>

                <div class="card-price d-flex align-items-center">
                    <div class="price"><span>${item.price.S.toLocaleString()}</span> đ</div>
                </div>
            </div>
        </div>
        `
    }
}

function closePopup() {
    const popupBtnClose = document.querySelector('.popup-box .btn-close')

    popupBtnClose.addEventListener('click', function () {
        overlay.style.display = 'none'
        popup.style.display = 'none'
    })

    overlay.addEventListener('click', function () {
        overlay.style.display = 'none'
        popup.style.display = 'none'
    })
}







