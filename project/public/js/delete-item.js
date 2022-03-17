function deleteItem(code) {
    const cartList = JSON.parse(localStorage.getItem('cartList')) || []

    const index = cartList.findIndex(item => item.code == code)

    cartList.splice(index, 1)

    localStorage.setItem('cartList', JSON.stringify(cartList));

    cartSideRender(JSON.parse(localStorage.getItem('cartList')))
    if(window.location.pathname =='/page/thanhtoan.html') {
        location.reload()
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
                <a href="./thanhtoan.html"class="btn">Thanh toán</a>
            </div>
        `

        cardIconQuantity.innerHTML = totalQuantity
    }
}