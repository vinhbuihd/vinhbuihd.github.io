

const cartList = JSON.parse(localStorage.getItem('cartList')) || []
const productList = document.querySelector('.product-list')
const priceBox = document.querySelector('.price-box')
const productBox = document.querySelector('.product-box')

if (cartList.length == 0) {
    productBox.innerHTML = `
    <div class="text-align-center" style='margin: 0 auto'>
        <h3>Giỏ hàng trống</h3>
        <a class='btn' href='../page/menu.html'>Tiếp tục mua hàng</a>
    </div>
    `
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
// const editBtn = document.querySelector('.btn-close')
// const deleteBtn = document.querySelector('.btn-close')

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




// render related-list

// const relatedList = document.querySelector('.related-list')
// const idCartLists = cartList.map(product => product.id)

// const hotProducts = products.filter(product => !idCartLists.includes(product.id))

// hotProducts.forEach(product => {
//     relatedList.innerHTML += `
//     <div class="card" dataset="${product.id}">
//         <div class="card-image" >
//             <img src=${product.image} alt="${product.name}">
//         </div>

//         <div class="card-content">
//             <div class="card-content-left d-flex align-items-center justify-content-between">
//                 <div class="card-like">
//                     <div class="like-icon">
//                         <i class="fa-solid fa-star" style=${product.star - 1 >= 0 ? 'display:inline-block' : 'display:none'}></i>
//                         <i class="fa-solid fa-star" style=${product.star - 2 >= 0 ? 'display:inline-block' : 'display:none'}></i>
//                         <i class="fa-solid fa-star" style=${product.star - 3 >= 0 ? 'display:inline-block' : 'display:none'}></i>
//                         <i class="fa-solid fa-star" style=${product.star - 4 >= 0 ? 'display:inline-block' : 'display:none'}></i>
//                         <i class="fa-solid fa-star" style=${product.star - 5 >= 0 ? 'display:inline-block' : 'display:none'}></i>
                        
//                     </div>
//                 </div>
                
//                 <div class="card-price d-flex align-items-center">
//                     <div class="price"><span>${product.price.S.toLocaleString()}</span> đ</div>
//                 </div>
                
//             </div>
//             <div class="card-content-right d-flex align-items-center justify-content-between">
//                 <h3 class="card-name">${product.name}</h3>
                
//                 <div class="card-cart d-flex align-items-center justify-content-center"><i class="fa-solid fa-basket-shopping"></i></div>
//             </div>
//         </div>
//     </div>
//     `
// })
