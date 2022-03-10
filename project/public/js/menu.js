

const productsList = document.querySelector('.product-list')
const itemsQuantity = document.querySelector('.item-quantity-bar span')

function getProductsAPI() {
    return axios.get("/products"); // => luôn trả về promise
}

let products = []
let filterTypeList = []

async function getProducts() {
    try {
        const res = await getProductsAPI()
        products = res.data
        renderMenu(products, 'coffee')
    } catch (error) {
        console.log(error)
    }
}

window.onload = () => {
    getProducts()
}

// hàm lọc theo loại sản phẩm

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
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div class="card" dataset="${product.id}">
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
        
        filterTypeList.forEach(product => {
            productsList.innerHTML += `
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div class="card" dataset="${product.id}">
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
}

// Click filter name -> active
const filterItems = document.querySelectorAll('.filter-item')
filterItems.forEach(filterItem => {
    filterItem.addEventListener('click', function () {
        document.querySelector('.filter-item.active').classList.remove('active')
        filterItem.classList.add('active')
    })
})

// Tìm kiếm sản phẩm
const searchInput = document.querySelector('.filter-search')

searchInput.addEventListener('input', function (e) {
    const searchList = [...filterTypeList].filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()))
    
    renderMenu(searchList)
})

// tìm kiếm sản phẩm

const search = document.querySelector('.item.search')

