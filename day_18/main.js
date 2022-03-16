const heading = document.querySelector('#heading')

console.log(heading.classList);
console.log(heading.classList.length);

// add class
heading.classList.add('text-big', 'text-center')

// remove class
heading.classList.remove('text-big')

// contains: kiểm tra có class hay ko
console.log(heading.classList.contains('text-big'))
console.log(heading.classList.contains('text-center'))

// toggle: kiểm tra 1 class có tồn tại hay ko, 
// nếu có xóa đi, nếu ko thêm vào

// setInterval: Thực hiện lặp đi lặp lại 1 công việc.
// sau 1 khoảng thời gian chỉ định

let count = 0
let interval = setInterval(function() {
    heading.classList.toggle('text-red')
    count++
    console.log(count);

    if (count === 5) {
        // Xóa setInterval
        clearInterval(interval)
    }
}, 1000)

let time = 10

let interval2 = setInterval(() => {
    time--
    document.querySelector('#time span').innerText = time

    if (time === 0) {
        heading.classList.remove('text-hide')
        document.querySelector('#time').classList.add('text-hide')
        clearInterval(interval2)

    }
}, 1000)