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

const imageBox = $('.image-box')
const sayHello = $('.say-hello')
const resultContainer = $('.result-container')
const height = $('.height')
const weight = $('.weight')
const submit = $('.btn-submit')

const resultNum = $('.result-num')
const resultTitle = $('.result-title')
const resultContent = $('.result-content')

submit.click(function() {
    let check = checkValidate()

    if (check) {
        let bmi = weight.val() / (height.val() * height.val() / 10000)
        // Ẩn phần say hello
        sayHello.addClass('hide')
        resultContainer.removeClass('hide')
        resultNum.html(bmi.toFixed(1))

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

    if (height.val() == '') {
        setError(height, 'Vui lòng nhập chiều cao')
        isValidate = false
    } else if (!isBmi(height.val())) {
        setError(height, 'Nhập chiều cao không đúng')
        isValidate = false
    } else {
        setSuccess(height)
    }

    if (weight.val() == '') {
        setError(weight, 'Vui lòng nhập cân nặng')
        isValidate = false
    } else if (!isBmi(weight.val())) {
        setError(weight, 'Nhập cân nặng không đúng')
        isValidate = false
    } else {
        setSuccess(weight)
    }

    return isValidate
}

function setError(ele, message) {
    let parentEle = ele.parent()
    console.log(parentEle);
    ele.siblings('small').text(message)
    parentEle.addClass('error')
    parentEle.removeClass('success')
}

function setSuccess(ele) {
    let parentEle = ele.parent()
    parentEle.addClass('success')
    parentEle.removeClass('error')
}

function isBmi(bmi) {
    return bmi > 0
}

function render(obj) {
    resultTitle.html(obj.title)
    resultContent.html(obj.content)

    imageBox.css('background', `url(${obj.image})`)
    imageBox.css('background-size', 'cover')
}
