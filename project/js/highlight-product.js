import { products } from './productAll.js'

const highlightproducts = document.querySelector('.highlight-product')

function highlightProductRender() {
    const list = [...products].filter(product => product.status == 'new')
    const smallList = list.splice(0,5)
    console.log(smallList);
    highlightproducts.innerHTML = ''
    smallList.forEach(product => {
        highlightproducts.innerHTML += 
        
        `
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
        `
    })
}

// render sản phẩm
if (highlightproducts) {
    highlightProductRender()
}

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
