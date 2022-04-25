function editItem(code) {
            
    const cartList = JSON.parse(localStorage.getItem('cartList')) || []
    const popup = document.querySelector('.product-popup')
    const overlay = document.querySelector('.overlay')

    const product = cartList.find(item => item.code == code)
    const index = cartList.findIndex(item => item.code == code)


    console.log(123);
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
                        <input class="form-check-input" type="radio" value="S" name="flexRadioDefault" id="size-s" ${product.size == 'S' ? 'checked' : ''}>
                        <label class="form-check-label" for="size-s">
                        Size S
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="M" name="flexRadioDefault" id="size-m" ${product.size == "M" ? 'checked' : ''}>
                        <label class="form-check-label" for="size-m">
                        Size M + 5.000đ
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="L" name="flexRadioDefault" id="size-l" ${product.size == "L" ? 'checked' : ''}>
                        <label class="form-check-label" for="size-l">
                        Size L + 10.000đ
                        </label>
                    </div>
                </div>
            </div>
            
            <div class="popup-note">
                <div class="popup-title">Ghi chú <span>(nếu có)</span>
                </div>
                <input class="popup-input" type="text" placeholder="Ghi chú cho quán" value='${product.note}'>
            </div>
        
            <div class="popup-bottom mt-16 d-flex align-items-center justify-content-center flex-column">
                <div class="cart-item-button d-flex align-items-center">
                    <div class="minus"><i class="fa-solid fa-circle-minus"></i></div>
                    <div class="cart-item-quantity">${product.quantity}</div>
                    <div class="plus"><i class="fa-solid fa-circle-plus"></i></div>
                </div>
                <button class="btn">Cập nhật giỏ hàng : <span>${(product.sizePrice * product.quantity).toLocaleString()}</span> đ</button>
            </div>
        </div>
        `
    }

    let subQuantity = product.quantity

    const minus = document.querySelector('.popup-bottom .minus')
    const plus = document.querySelector('.popup-bottom .plus')
    const popupQuantity = popup.querySelector('.popup-bottom .cart-item-quantity')
    const popupBottomPrice = popup.querySelector('.popup-bottom .btn span')
    const radios = document.querySelectorAll('.form-check-input')
    const closeCartBtn = document.querySelector('.popup-box .btn-close')
    const updateToCart = document.querySelector('.popup-bottom .btn')


    radios.forEach(radio => {
        radio.onchange = function () {
            popupBottomPrice.innerHTML = (product.price[radio.value] * subQuantity).toLocaleString()
        }
    })

    minus.addEventListener('click', function () {
        let radio = Array.from(radios).find(radio => radio.checked)

        if (subQuantity <=1 ) return

            subQuantity--
            popupQuantity.innerHTML = subQuantity
            popupBottomPrice.innerHTML = (product.price[radio.value] * subQuantity).toLocaleString()
    })

    plus.addEventListener('click', function () {
        let radio = Array.from(radios).find(radio => radio.checked)

        subQuantity++
        popupQuantity.innerHTML = subQuantity
        popupBottomPrice.innerHTML = (product.price[radio.value] * subQuantity).toLocaleString()
    })

    closeCartBtn.addEventListener('click', function () {
        popup.style.display = 'none'
    })

    const popupNote = document.querySelector('.popup-input')

    updateToCart.addEventListener('click', function () {
        let radio = Array.from(radios).find(radio => radio.checked)

        let newItem = {
            ...product,
            quantity: subQuantity,
            size: radio.value,
            sizePrice: product.price[radio.value],
            note: popupNote.value,
        }

        cartList.splice(index, 1, newItem)

        localStorage.setItem('cartList', JSON.stringify(cartList));

        cartSideRender(JSON.parse(localStorage.getItem('cartList')))

        popup.style.display = 'none'
    })
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

                    <div class="delete-product d-flex align-items-center">
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
                <a href="./thanhtoan.html"class="btn">Thanh toán</a>
            </div>
        `

        cardIconQuantity.innerHTML = totalQuantity
    }
}