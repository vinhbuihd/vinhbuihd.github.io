// Cách 1

function sayHello() {
    alert('Xin chào các bạn 1')
}

// Cách 2
const btn2 = document.querySelector('#btn-2')

btn2.onclick = () => {
    alert('Xin chào các bạn 2')
}

// Cách 3

const btn3 = document.querySelector('#btn-3')

// btn3.addEventListener('click', function() {
//     alert('Xin chào các bạn 3')
// })

btn3.addEventListener('click', sayHello3)

function sayHello3() {
    alert('Xin chào các bạn 3')
}