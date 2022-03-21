// Để xử lý bất đồng bộ
// 1. Callback function
// 2. Promise
// 3. Async await

// 1. Callback function

// function funcA(funcB) {
//     //..
//     funcB()
// }

// let arr = [1, 2, 3, 4]

// arr.forEach(num => console.log(num))

// Mô tả hoạt động hằng ngày
// 1. Làm bài tập 3s
// 2. Đá bóng 4s
// 3. Nấu cơm 5s

function doTask1(name, callback) {
    console.log('Bắt đầu công việc');
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function() {
        callback()
    }, 3000)
}

function doTask2(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function() {
        callback()
    }, 4000)
}

function doTask3(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function() {
        callback()
    }, 5000)
}

function finish() {
    console.log(`kết thúc công việc`);
    
}

// doTask1('Làm bài tập', function() {
//     doTask2('Đá bóng', function() {
//         doTask3('Nấu cơm', finish)
//     })
// })
// doTask1('Làm bài tập', finish)
// doTask2('Đá bóng', finish)
// doTask3('Nấu cơm', finish)

// Nếu nhiều công việc sẽ dẫn đến Callback hell => promise(ES6)


