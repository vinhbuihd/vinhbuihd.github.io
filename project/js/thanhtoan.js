let cartList = JSON.parse(localStorage.getItem('cartList')) || []
const productList = document.querySelector('.product-list')
const priceBox = document.querySelector('.price-box')

if (cartList.length == 0) {
    productList.innerHTML = `<h3>Giỏ hàng trống</h3>`
} else {
    productList.innerHTML = ''
    let totalPrice = 0
    let totalQuantity = 0
    cartList.forEach(product => {
        totalPrice += product.quantity * product.sizePrice
        totalQuantity += product.quantity

        productList.innerHTML += `
            <div class="cart-item d-flex" dataset=${product.code}>
                <div class="cart-item-image">
                    <img src=${product.image} alt=${product.alt}>
                </div>
                <div class="cart-item-info">
                    <div class="name">${product.name}</div> 
                    <div class="size d-flex align-items-center">Size ${product.size}<span>x${product.quantity}</span>
                        <div class="edit" onclick='editCart()'><i class="fa-solid fa-pen"></i></div>
                    </div>
                    <div class="note">${product.note}</div>
                </div>
                
                <div class="d-flex align-items-center" >
                    <div class="cart-item-sub-price">
                        <span>${(product.quantity * product.sizePrice).toLocaleString()}</span> đ
                    </div>
                </div>

                <div class="delete-product d-flex align-items-center" onclick='editCart()'>
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>
        `
    })

    priceBox.innerHTML = `
        <div class="subtotal d-flex align-items-center justify-content-between">
            <p>Tạm tính</p>
            <p>${totalPrice.toLocaleString()} đ</p>
        </div>
        <div class="subtotal d-flex align-items-center justify-content-between">
            <p>Giảm giá</p>
            <p>0 đ</p>
        </div>
        <div class="total d-flex align-items-center justify-content-between">
            <p>Tổng cộng </p>
            <p>${totalPrice.toLocaleString()} đ</p>
        </div>
    `
}
const overlay = document.querySelector('.overlay')
const cartSideEle = document.querySelector('.cart-side')
const closeBtn = document.querySelector('.btn-close')

function editCart() {
    cartSideEle.classList.add('open')
    overlay.style.display = 'block'
}

overlay.addEventListener('click', function () {
    location.reload()
})

closeBtn.addEventListener('click', function () {
    location.reload()
})

