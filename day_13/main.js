// 1. Tìm số lớn nhất trong mảng
let numbers = [3, 1, -6, 29, 10]
function findMax(arr) {
    let max = arr[0]
    arr.forEach(function(number) {
        if(number > max) {
            max = number
        }
    })
    console.log(max);
    return max
}
findMax(numbers)
// 1. Tìm số nhỏ nhất trong mảng

function findMin(arr) {
    let min = arr[0]
    arr.forEach(function(number) {
        if(number < min) {
            min = number
        }
    })
    console.log(min);
    return min
}

findMin(numbers)

// 3. Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số
// dư tương ứng khi chia mảng cũ cho 2
// Vd : [4,2,5,6,2,7] => [0,0,1,0,0,1]
let arr = [4,2,5,6,2,7]
function mangChiaCho2(arr) {
    return arr.map(number => number % 2)
}

console.log(mangChiaCho2(arr))
// 4. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
function print10Time(string) {
    let stringToArray = string.split(' ')
    let newArr = [...stringToArray]
    for(let i = 1; i < 10; i++) {
        newArr.push(stringToArray)
    }
    return newArr.join('')
}

console.log(print10Time('v'))
// 5. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu
// gạch ngang.
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'

function repeatString(string) {
    let stringToArray = string.split(' ')
    let newArr = [...stringToArray]
    for(let i = 1; i < 10; i++) {
        newArr.push(['-'], stringToArray)
    }
    return newArr.join('')
}

console.log(repeatString('a'))