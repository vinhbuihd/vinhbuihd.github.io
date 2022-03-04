


export const products = [
    {
        id: 1,
        name: 'Freeze Matcha',
        alt: 'freeze-matcha',
        image: '../public/images/sp-15-freeze-matcha.jpg',
        price: {
            S: 30000,
            M: 35000,
            L: 40000,
        },
        type: 'Freeze',
        quantity: 1,
    },
    {
        id: 2,
        name: 'Trà Đào',
        alt:'tra-dao',
        image: '../public/images/sp-14-tradao.jpg',
        price: {
            S: 25000,
            M: 30000,
            L: 35000,
        },
        type: 'Trà',
        quantity: 1,
    },
    {
        id: 3,
        name: 'Trà Chanh',
        alt:'tra-chanh',
        image: '../public/images/sp-23-trachanh.jpg',
        price: {
            S: 25000,
            M: 30000,
            L: 45000,
        },
        type: 'Trà',
        quantity: 1,
    },
    {
        id: 4,
        name: 'Latte Sữa',
        alt:'latte-sua',
        image: '../public/images/sp-12.jpg',
        price: {
            S: 40000,
            M: 45000,
            L: 50000,
        },
        type: 'cà phê',
        quantity: 1,
    },
    {
        id: 5,
        name: 'Freeze Socola',
        alt:'freeze-socola',
        image: '../public/images/sp-18-freeze-socola.jpg',
        price: {
            S: 50000,
            M: 55000,
            L: 60000,
        },
        type: 'Freeze',
        quantity: 1,
    },
]


const highlightproducts = document.querySelector('.highlight-product')

if (highlightproducts) {
    highlightproducts.innerHTML = ''
    products.forEach(product => {
        highlightproducts.innerHTML += 
        
        `<div class="card" dataset="${product.id}">
            <div class="card-image" >
                <img src=${product.image} alt="${product.name}">
            </div>
            <div class="card-content">
                <div class="card-content-left d-flex align-items-center justify-content-between">
                    
                    <div class="card-like">
                        <div class="like-icon">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
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
        </div>`
    })
}


// render sản phẩm



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
