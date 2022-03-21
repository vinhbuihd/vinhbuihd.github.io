// Yêu cầu
// Giá trị mặc định của counter ban đầu = 0

// Bấm vào Cộng tăng counter lên 1

// Bấm vào Trừ giảm counter đi 1

// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const counter = document.querySelector('#counter')

function changeColor() {
    if (counter.textContent > 0) {
        counter.style.color = 'green'
    } else if (counter.textContent < 0) {
        counter.style.color = 'red'
    } else {
        counter.style.color = '#333333'
    }
}


nextBtn.addEventListener('click', function() {
    counter.textContent++
    changeColor()
})

prevBtn.addEventListener('click', function() {
    counter.textContent--
    changeColor()
})
