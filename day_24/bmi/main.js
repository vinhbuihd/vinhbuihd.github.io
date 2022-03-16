const data = [
    {
        title: "Chỉ số BMI dưới 18,5 là thiếu cân",
        content: "Bạn cần áp dụng chế độ ăn và thể thao để tăng cân.",
        image: "https://images.unsplash.com/photo-1541306912932-f6bed7f462eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        title: "Chỉ số BMI từ 18,5 đến 24,9 là bình thường",
        content: "Bạn có một cơ thể tốt.",
        image: "https://images.unsplash.com/photo-1579047440583-43a690fe2243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        title: "Chỉ số BMI ở giữa 25,0 và 29,9 được coi là thừa cân",
        content: "Tuy nhiên, tình trạng chưa quá trầm trọng nên bạn có thể tìm ngay các phương pháp giảm cân hiệu quả tự nhiên và kết hợp luyện tập. Nếu áp dụng điều độ và kiên trì, chỉ cần tốn khoảng vài tháng là bạn có ngay vóc dáng rất ưng ý rồi đó.",
        image: "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        title: "Chỉ số BMI bằng hoặc trên 30 được xem là béo phì",
        content: "Với mức cân nặng này, cơ thể của bạn phải gặp rất nhiều áp lực hàng ngày, đặc biệt trọng lượng mỡ tạo áp lực lên cơ xương và các cơ quan làm ảnh hưởng đến sinh hoạt và sức khỏe của bạn.",
        image: "https://images.unsplash.com/photo-1573879026263-0ae3b9599d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80",
    }
];

const imageBox = document.querySelector('.image-box')
const sayHello = document.querySelector('.say-hello')
const resultContainer = document.querySelector('.result-container')
const height = document.querySelector('.height')
const weight = document.querySelector('.weight')
const submit = document.querySelector('.btn-submit')

const resultNum = document.querySelector('.result-num')
const resultTitle = document.querySelector('.result-title')
const resultContent = document.querySelector('.result-content')


// b1: tạo hàm check Validate
// b2: khi nhấn nút kiểm tra cho chạy hàm validate
//  nếu true -> thay đổi ảnh imageBox tương ứng với bmi, và thay đổi content của phần chỉ số bmi


submit.addEventListener('click', function() {
    let check = checkValidate()
    if (check) {
        let bmi = weight.value / (height.value * height.value / 10000)
        // Ẩn phần say hello
        sayHello.classList.add('hide')
        resultContainer.classList.remove('hide')
        resultNum.innerHTML = bmi.toFixed(1);

        if (bmi < 18.5) {
            render(data[0])
        }else if (bmi >= 18.5 && bmi <= 24.9) {
            render(data[1])
        }else if (bmi > 24.9 && bmi <= 29.9) {
            render(data[2])
        } else {
            render(data[3])
        }

    }
})

function checkValidate() {
    let isValidate = true

    if (height.value == '') {
        setError(height, 'Vui lòng nhập chiều cao')
        isValidate = false
    } else if (!isBmi(height.value)) {
        setError(height, 'Nhập chiều cao không đúng')
        isValidate = false
    } else {
        setSuccess(height)
    }

    if (weight.value == '') {
        console.log(weight.value);
        setError(weight, 'Vui lòng nhập chiều cao')
        isValidate = false
    } else if (!isBmi(weight.value)) {
        setError(weight, 'Nhập chiều cao không đúng')
        isValidate = false
    } else {
        setSuccess(weight)
    }

    return isValidate
}

function setError(ele, message) {
    let parentEle = ele.parentElement;
    parentEle.classList.add('error')
    parentEle.classList.remove('success')
    parentEle.querySelector('small').innerHTML = message
}

function setSuccess(ele) {
    let parentEle = ele.parentElement;
    parentEle.classList.remove('error')
    parentEle.classList.add('success')
}

function isBmi(bmi) {
    return bmi > 0
}

function render(obj) {
    resultTitle.innerHTML = obj.title
    resultContent.innerHTML = obj.content
    imageBox.style.background = `url(${obj.image})`
    imageBox.style.backgroundSize = 'cover'
}

