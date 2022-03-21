// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

// // Ví dụ:
// max2Numbers([2, 1, 3, 4]) => 3
// max2Numbers([2, 1, 4, 3, 4]) => 3

// Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất
// b1: sắp xếp lại mảng từ bé đến lớn
// b2: đặt max = phần tử cuối, lọc, mảng đã sắp xếp, lấy các phần tử nhỏ hơn max
// b3: lấy phân tử cuối của mảng đã lọc.

let numbers = [6, 1, 3, 5, 6]

function findSecondNumber(arr) {
    let sortArr = arr.sort((a, b) => a - b)
    let max = sortArr[sortArr.length - 1]

    let newArr = sortArr.filter(number => number < max)
    return newArr[newArr.length - 1]
}

console.log(findSecondNumber(numbers))

// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

// // Ví dụ:
// getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].

// b1: từ mảng đã cho dùng map để lấy độ dài của các chuỗi
// b2: sắp xêp, tìm độ dài lớn nhất
// b3: duyệt qua mảng ban đầu tìm chuỗi có độ dài bằng vs max

let string = ['vinh', 'quan', 'huy', 'maianh', 'nguyen']

function getMaxLengthString(arr) {
    let lengthElement = arr.map(string => string.length)
    let sortLength = lengthElement.sort((a, b) => a - b)
    let maxLength = sortLength[sortLength.length - 1]
    return arr.filter(string => string.length === maxLength)
}

console.log(getMaxLengthString(string));
console.log(getMaxLengthString(['aba', 'aa', 'ad', 'c', 'vcd']));

// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó

// // Ví dụ:
// getRandomElement([3, 7, 9, 11]) => 3
// getRandomElement([3, 7, 9, 11]) => 9

// b1: random index từ 0 đến độ dài mảng
// b2: lấy ra phần tử vs index đã random

function getRandomElement(arr) {
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

console.log(getRandomElement([3, 7, 9, 11]));
console.log(getRandomElement([3, 7, 9, 11]));

// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

// // Ví dụ:
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
// similarity([1, 2, 3], [3, 4, 5]) => [3]
// b1: tạo 1 mảng rỗng
// b2: cộng 2 mảng đã cho, rồi duyệt qua mảng đó, nếu phần tử có trong cả 2 mảng và chưa có trong mảng rỗng thì push vào

function similarity(arr1, arr2) {
    let arrSum = [...arr1, ...arr2]
    let newArr = []
    for (const element of arrSum) {
        if (arr1.includes(element) 
            && arr2.includes(element) 
            && !newArr.includes(element)) {
            newArr.push(element)
        }
    }
    return newArr
}

console.log(similarity([1, 2, 3], [3, 4, 5]));

// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:

// Tham số 1: Là 1 chuỗi thời gian (t) có dạng "giờ:phút:giây"
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

// // Ví dụ: 
// getTime("9:20:56", 7) => "9:21:3"
// Gợi ý : Hãy quy đổi ra thời gian từ hh:mm:ss ra giây => tính toán => Quy đổi ngược lại từ giây ra hh:mm:ss

// b1: từ chuỗi thời gian đã cho chuyển sang mảng, sẽ có 3 phần tử ứng vs giờ, phút, giây
// b2: quy hết ra giây rồi cộng với x
// b3: quy ngược lại ra dạng hh:mm:ss

function convertTime(time) {
    let hour = Math.floor(time / 3600)
    let minute = Math.floor((time - hour*3600) / 60)
    let second = time - hour*3600 - minute*60
    hour = hour < 10 ? '0'+ hour : hour
    minute = minute < 10 ? '0'+ minute : minute
    second = second < 10 ? '0'+ second : second
    return `${hour}:${minute}:${second}`
}

console.log(convertTime(33656));

function getTime(t, x) {
    let tToArray = t.split(':')
    let sumSeconds = tToArray[0] * 3600 + tToArray[1] * 60 + tToArray[2] * 1 + x
    return convertTime(sumSeconds)
}

console.log(getTime("9:20:56", 7));

// Bài 6 (2 điểm). Cho mảng users như sau:

users = [
    {
        name : "Bùi Công Sơn",
        age : 30,
        isStatus : true
    },
    {
        name : "Nguyễn Thu Hằng",
        age : 27,
        isStatus : false
    },
    {
        name : "Phạm Văn Dũng",
        age : 20,
        isStatus : false
    }
]
// Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true
// Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần

// b1: dùng filter để lọc user theo yêu cầu

function getUser1(users) {
    return users.filter(user => user.age > 25 && user.isStatus === true)
}

console.log(getUser1(users));

// b1: dùng sort sắp xếp theo tuổi

function sortUser(users) {
    return users.sort((a, b) => a.age - b.age)
}

console.log(sortUser(users));


// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

// getCountElement(["one", "two", "three", "one", "one", "three"])

// // Kết quả

// {
//     one : 3,
//     two : 1,
//     three : 2
// }

// b1: dùng hàm reduce nhận tham số thứ 1 là 1 function , tham số thứ 2 là 1 object rỗng
// b2: trong function của hàm reduce nhận tham số 1 acc và cur
// b3: khi duyệt qua mảng nếu chưa có element đó chưa có trong object thì set key = nó và truyền value = 1
//  nếu có rồi thì tăng value lên 1

function getCountElement(arr) {
    return arr.reduce((acc, cur) => {
        if (typeof acc[cur] === 'undefined') {
            acc[cur] = 1
        } else {
            acc[cur] += 1
        }
        return acc
    }, {})
}

console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));