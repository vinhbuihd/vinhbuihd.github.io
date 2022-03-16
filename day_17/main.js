
// Câu 1. Tạo 1 thẻ p có id="text", có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// const text = document.querySelector('#text')
 
// Đặt màu văn bản thành #777

// text.style.color = '#777'

// Đặt kích thước phông chữ thành 2rem

// text.style.fontSize = '2rem'

// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.

// text.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.'
// 
// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

// const ul1 = document.querySelector('ul')

// const liElements = ul1.querySelectorAll('li')

// liElements.forEach(li => li.style.color = 'blue')

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
// Sử dụng javascript để thực hiện những công việc sau
{/* <ul id="list">
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
   <li>Item 4</li>
   <li>Item 5</li>
   <li>Item 6</li>
   <li>Item 7</li>
</ul> */}

// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const ulEle = document.querySelector('#list')

for (let  i = 8; i<= 10; i++) {
    let li = document.createElement('li')
    li.innerText = `Item ${i}`
    ulEle.appendChild(li)
}

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)

ulEle.firstElementChild.style.color = 'red'

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = ulEle.querySelector(':nth-child(3)')
li3.style.backgroundColor = 'blue'
console.log(li3);
// Remove thẻ <li> 4

const li4 = ulEle.querySelector(':nth-child(4)')

ulEle.removeChild(li4)

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ

const newLi = document.createElement('li')
newLi.innerText = "Replace item"

console.log(newLi);
li3.insertAdjacentElement("afterend", newLi)
console.log(ulEle);

// Nối tiếp vào Bài tập buổi 1 - Bài số 3: ul-li

// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).

const add = document.createElement('button')
const input = document.createElement('input')

add.textContent = 'ADD'
input.type = 'text'
input.placeholder = 'Add Item...'
document.body.prepend(add)
document.body.prepend(input)

// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)

function addItem(item) {
    const li = document.createElement('li')
    if (!item.trim()) {
        alert('Vui lòng nhập item')
        return
    }
    li.textContent = item
    ulEle.appendChild(li)
}

add.addEventListener('click', function() {
    addItem(input.value)
    input.value = ''
})
// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul

const remove = document.createElement('button')
remove.textContent = 'REMOVE'
document.body.insertBefore(remove, ulEle)

function removeLastItem() {
    const liElements = ulEle.querySelectorAll('li')
    if (liElements.length == 0) return
    const newUl = ulEle.removeChild(liElements[liElements.length - 1])
}

remove.addEventListener('click', function() {
    removeLastItem()
})

// Thêm 1 nút Hide trên đầu của danh sách ul

const hide = document.createElement('button')
hide.textContent = 'HIDE'
hide.style.display = 'block'
hide.style.margin = '20px'
ulEle.insertAdjacentElement("beforebegin", hide)
// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show

hide.addEventListener('click', function() {
    const isHide = ulEle.classList.toggle('hide')
    hide.textContent = isHide ? 'SHOW' : 'HIDE'
})

// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide