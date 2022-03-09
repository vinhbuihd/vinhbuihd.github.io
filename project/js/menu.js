import {products} from './productAll.js'

const productsList = document.querySelector('.product-list')
const itemsQuantity = document.querySelector('.item-quantity-bar span')
console.log(products)

renderMenu(products)

function renderMenu(products) {
    if (products) {
        const coffees = products.filter(product => product.type == 'coffee')

        itemsQuantity.innerHTML = `${coffees.length}`
        
        coffees.forEach(product => {
            productsList.innerHTML += `
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div class="card" dataset="${product.id}">
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
                                
                                <div class="card-cart d-flex align-items-center justify-content-center"><i class="fa-solid fa-basket-shopping"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            `

        })
    }
}

// tìm kiếm sản phẩm

const search = document.querySelector('.item.search')

