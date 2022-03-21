// - Render số box = số lượng màu ra ngoài màn hình bằng js (5 box)

// box được tạo bởi thẻ div, có class="box", background tương ứng với từng mã màu

// Cập nhật số lượng total box trong thẻ có class "points"

// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1

// Khi click vào nút "more box" thì số lượng box tăng lên 5 
// (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5

let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
const boxes = document.querySelector('.boxes')
const points = document.querySelector('.points')
const moreBoxes = document.querySelector('#btn')

// Tạo hàm in ra 1 box tùy theo màu

function printBox(color) {
    const div = document.createElement('div')
    div.classList.add('box')
    div.style.backgroundColor = color
    boxes.appendChild(div)
    div.addEventListener('click', function() {
        boxes.removeChild(div)
        items = document.querySelectorAll('.box')
        points.textContent = items.length
    })
}

// tạo hàm in ra 5 box cùng lúc
function getMoreBox(arr) {
    for (const color of arr) {
        printBox(color)
    }
}
// in ra 5 box đầu tiên
colors.forEach(color => {
    printBox(color)
})

// In ra số lượng box
let items = document.querySelectorAll('.box')
points.textContent = items.length

moreBoxes.addEventListener('click', function() {
    getMoreBox(colors)
    items = document.querySelectorAll('.box')
    points.textContent = items.length
})
