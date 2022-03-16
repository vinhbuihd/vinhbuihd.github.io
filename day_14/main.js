// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => ['Tuấn', 'Nam', 'Hoa']
let student = ['Nam', 'Hoa', 'Tuấn', 'Đạt']

function sortStudents(arr) {
    return arr.sort((a, b) => a.localeCompare(b)).reverse()
}

console.log(sortStudents(student));

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]

let numbers = [1, 2, 3, 4, 5]

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        if (j >= 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    return arr
}

// console.log(shuffleArray(numbers));
// console.log(shuffleArray(numbers));

// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

const arr1 = [1, 2, 3, 5]
const arr2 = [1, 2, 4, 3]

function symmetricDifference(arr1, arr2) {
    let sumArr = [...arr1, ...arr2]
    let newArr = []
    for (const element of sumArr) {
        if(!arr2.includes(element) || !arr1.includes(element)) {
            newArr.push(element)
        }
    }
    return newArr
}

console.log(symmetricDifference(arr1, arr2));

// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]


function union(arr1, arr2) {
    const sumArr = [...arr1, ...arr2]
    let newArr = []  
    
    for (const element of sumArr) { 
        if (!newArr.includes(element)) {
            newArr.push(element)
        }
    }
    return newArr
}

console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));
console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]));