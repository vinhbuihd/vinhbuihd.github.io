
// Bài 1: Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = "yellow")

const pEle = document.querySelector('p')
// chuyển sang dạng mảng các chữ cái, loại bỏ các kí tự , . ! ?
const textArray = pEle.innerText.split('')

const arrayFilter = Array.from(textArray).filter(text => text !== ',' && text !== '.' && text !== '?' && text !== '!')

// Hợp lại thành chuỗi rồi chuyển sang dạng mảng các từ, tìm từ có độ dài >= 8
const newArray = arrayFilter.join('').split(' ')

const longStrings = Array.from(newArray).filter(text => text.length >= 8)

// tạo hàm highlight
function highlight(text) {
    let index = pEle.innerHTML.indexOf(text)

    if (index >= 0) {
        pEle.innerHTML = pEle.innerHTML.slice(0, index) + '<span class="high-light">'+ pEle.innerHTML.slice(index, index + text.length) +'</span>' + pEle.innerHTML.slice(index + text.length)
    }
}

longStrings.forEach(item => {
    highlight(item)
})

console.log(pEle.innerHTML)


// bài 2: Thêm link hiển thị text "facebook" link đến trang facebook.com ở sau thẻ p

const facebook = document.createElement('a')
facebook.href = 'https://www.facebook.com/'
facebook.innerText = 'facebook'
document.body.appendChild(facebook)

// bài 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ

const numberOfstring = document.createElement('div')
numberOfstring.innerText = 'Số từ có trong đoạn văn: ' + newArray.length
document.body.appendChild(numberOfstring)

// Bài 4: thay thế các ký hiệu ? => 🤔, ! => 😲

pEle.innerHTML = pEle.innerHTML.replaceAll('?', '🤔')
pEle.innerHTML = pEle.innerHTML.replaceAll('!', '😲')






        