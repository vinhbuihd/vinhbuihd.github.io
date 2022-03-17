

const cartList = JSON.parse(localStorage.getItem('cartList')) || []
const productList = document.querySelector('.product-list')
const priceBox = document.querySelector('.price-box')
const productBox = document.querySelector('.product-box')
const cart  = document.querySelector('.cart')
let totalPrice = 0

if (cartList.length == 0) {
    productBox.innerHTML = `
    <div class="text-align-center" style='margin: 0 auto'>
        <h3>Giỏ hàng trống</h3>
        <a class='btn' href='../page/menu.html'>Tiếp tục mua hàng</a>
    </div>
    `
} else {
    productList.innerHTML = '<h3 class="text-center">Thông tin đơn hàng</h3>'
    
    let totalQuantity = 0
    cartList.forEach(product => {
        totalPrice += product.quantity * product.sizePrice
        totalQuantity += product.quantity

        productList.innerHTML += `
            <div class="cart-item d-flex" dataset=${product.code}>
                <div class="cart-item-image">
                    <img src=.${product.image} alt=${product.alt}>
                </div>
                <div class="cart-item-info">
                    <div class="name">${product.name}</div> 
                    <div class="size d-flex align-items-center">Size ${product.size}<span>x${product.quantity}</span>
                    </div>
                    <div class="note">${product.note}</div>
                </div>
                
                <div class="d-flex align-items-center" >
                    <div class="cart-item-sub-price">
                        <span>${(product.quantity * product.sizePrice).toLocaleString()}</span> đ
                    </div>
                </div>
            </div>
        `
    })
    productList.innerHTML += `<div class='edit-list'>Chỉnh sửa đơn hàng</div>`
    priceBox.innerHTML = `
        <div class="subtotal  d-flex align-items-center justify-content-between">
            <p>Tạm tính</p>
            <p><span>${totalPrice.toLocaleString()}</span> đ</p>
        </div>
        <div class="sale-money d-flex align-items-center justify-content-between">
            <p>Giảm giá</p>
            <p><span>0</span> đ</p>
        </div>
        <div class="total d-flex align-items-center justify-content-between">
            <p>Tổng cộng </p>
            <p><span>${totalPrice.toLocaleString()}</span> đ</p>
        </div>
    `
    
    
}

const overlay = document.querySelector('.overlay')
const cartSideEle = document.querySelector('.cart-side')
const closeBtn = document.querySelector('.btn-close')

overlay.addEventListener('click', function () {
    location.reload()
})

closeBtn.addEventListener('click', function () {
    location.reload()
})

// mã giảm giá
const codes = {
    hello: 20,
    xinchao: 30,
}
let codeKeys = Object.keys(codes)
console.log(totalPrice)
const applyCodeBtn = document.querySelector('.btn.code-apply')
const subTotal = document.querySelector('.subtotal span')
const saleMoney = document.querySelector('.sale-money span')
const total = document.querySelector('.total span')
const errorMs = document.querySelector('.error-ms')
const inputCode = document.querySelector('input.code')

applyCodeBtn.addEventListener('click', function (e) {
    e.preventDefault()
    let isOk = codeKeys.find(codeKey => codeKey == inputCode.value)
    if (isOk) {
        console.log(isOk)
        let sale = totalPrice * codes[isOk] / 100
        console.log(sale)
        total.innerHTML = (totalPrice - sale).toLocaleString()
        saleMoney.innerHTML = `-(${codes[isOk]}%) ${sale.toLocaleString()}`
        errorMs.innerHTML ='Áp dụng thành công!'
        inputCode.value = ''
    } else {
        errorMs.innerHTML ='Mã giảm giá không đúng'
        total.innerHTML = totalPrice.toLocaleString()
        saleMoney.innerHTML = 0
    }
})

// đặt hàng

const orderBtn = document.querySelector('.order-btn')

orderBtn.addEventListener('click', function (e) {
    e.preventDefault()
    formValidate()
    if (formValidate()) {
        alert("Chúc mừng bạn đã đặt hàng thành công!!!")
        window.location.href = "/page/menu.html"
    }
})


function formValidate() {
    let isValid = true
    const name = document.querySelector('.input-text.name')
    const tel = document.querySelector('.input-text.tel')
    const add = document.querySelector('.input-text.add')
    const regexNumber=/^[0-9]{10}$/;

    if(name.value.trim() == '') {
        isValid = false
        name.closest('.profile-item').querySelector('.error-mesage').innerHTML = 'Vui lòng nhập họ tên'
    } else {
        name.closest('.profile-item').querySelector('.error-mesage').innerHTML = ''
    }

    if(tel.value.trim() == '') {
        isValid = false
        tel.closest('.profile-item').querySelector('.error-mesage').innerHTML = 'Vui lòng nhập số điện thoại'
    }else if(!regexNumber.test(tel.value)) {
        isValid = false
        tel.closest('.profile-item').querySelector('.error-mesage').innerHTML = 'Số điện thoại không đúng'
    }else {
        tel.closest('.profile-item').querySelector('.error-mesage').innerHTML = ''
    }

    if(add.value.trim() == '') {
        isValid = false
        add.closest('.profile-item').querySelector('.error-mesage').innerHTML = 'Vui lòng nhập địa chỉ'
    }else {
        add.closest('.profile-item').querySelector('.error-mesage').innerHTML = ''
    }
    if (!isValid) return
    
    return isValid
}

// Chỉnh sửa đơn hàng

const editList = document.querySelector('.edit-list')

editList.addEventListener('click', function () {
    cart.click()
})
