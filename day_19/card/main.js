
// Yêu cầu: Sử dụng Javascript để thực hiện các công việc sau

// 1. Một tính năng mới  vào gói Pro: '24/7 Phone support'

const list = document.querySelector('.list-unstyled')

const li = document.createElement('li')
li.textContent = '24/7 Phone support'

list.appendChild(li)


// 2. Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)

const row = document.querySelector('.row')

row.style.flexDirection = 'row-reverse'

// 3. Trong gói Pro hãy cập nhật nút 'Get Started' hiện tại thành màu xanh có màu background: #82DACA, có chữ màu #fff và có dòng chữ 'Buy Now'


const proGetStarted = document.querySelector('#pro-plan button')

proGetStarted.style = `
    background: #82DACA;
    color: #fff;
`
proGetStarted.textContent = 'Buy Now'

console.log(proGetStarted);

// 4. Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%

const proStorage = document.querySelector('#pro-plan .storage-amount')
const basicStorage = document.querySelector('#basic-plan .storage-amount')

proStorage.textContent = proStorage.textContent * 1.25
basicStorage.textContent = basicStorage.textContent * 1.5
