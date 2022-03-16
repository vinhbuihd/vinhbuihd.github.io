// 1. VIết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính

// function sphericalVolume (r) {
//     return 4/3 * Math.PI * r**3
// }

// console.log(sphericalVolume(5))

// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

// function sumBetweenTwoNumber(a, b) {
//     let sum = 0
//     if (a > b) {
//         [a ,b] = [b, a]
//     }

//     for (let i = a+1; i < b; i++) {
//         sum += i
//     }
//     return sum
// }

// console.log(sumBetweenTwoNumber(3, 3))
// // ● Bài 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

// function sumDivisor(number) {
//     let sum = 0

//     for (let i = 1; i <= number; i++) {
//         if (number % i == 0) {
//             sum += i
//         }
//     }

//     return sum
// }

// console.log(sumDivisor(6))
// ● Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

// function checkPrimeNumber(number) {
//     if (number < 2) {
//         return false
//     }
//     else if(number == 2) {
//         return true
//     }else {
//         for (let i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i == 0) {
//                 return false
//             }
//         }
//         return true
//     }
// }

// console.log(checkPrimeNumber(4))


// ● Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số
// truyền vào.

// function sumPrimeNumbers(number) {
//     let sum = 0
//     if (number <= 0) return "Không phải số nguyên dương"
//     for (let i = 1; i <= number; i++) {
//         if (checkPrimeNumber(i)) {
//             sum += i
//         }
//     }
//     return sum
// }

// console.log(sumPrimeNumbers(7))

// Xử lý chuỗi
// ● Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ:
// ''HELLO world'' => ''Hello World''.

// function convertToCap(string) {
//     const lowerString = string.toLowerCase()
//     const arrayOfString = lowerString.split(' ')

//     let result = ''
    
//     for (let i = 0; i < arrayOfString.length; i++) {
//         let element = arrayOfString[i]
//         result += element.slice(0, 1).toUpperCase() + element.slice(1) + ' '

//     }
//     return result.trim()
// }

// console.log(convertToCap('HELLO world'))

// ● Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.

// function spinalCase(str) {
//     let lowerString = str.toLowerCase()
//     let arr = lowerString.split(' ')
//     let result = ''

//     for (let i = 0; i < arr.length - 1; i++) {
//         result += arr[i] + '-'
//     }
//     return result + arr[arr.length - 1]
// }

// console.log(spinalCase('HELLO world'))

// ● Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược
// đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc
// false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.

// function isSymmetry(str) {
//     let lowerString = str.toLowerCase().split(' ').join('')
//     let newStr = ''
//     for (let i = 0; i < lowerString.length; i++) {
//         newStr = lowerString[i] + newStr
//     }
//     if (newStr == lowerString) {
//         return true
//     }
//     return false
// }

// console.log(isSymmetry('Race car'))
// console.log(isSymmetry('hello world'))

// ● Bài 4: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự (tính cả dấu
// cách) nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân
// biệt hoa thường). Ví dụ ''HELLO world'' có chứa ''how'' nhưng không chứa ''hey'' và không chứa ''ww''.

// function checkString(str1, str2) {
//     let lowerString1 = str1.toLowerCase()
//     let lowerString2 = str2.toLowerCase()
//     let arr1 = lowerString1.split('')
//     let arr2 = lowerString2.split('')

//     for (let i = 0; i < arr2.length; i++) {
//         if (!arr1.includes(arr2[i])) {
//             return false
//         } else {
//             let index = arr1.indexOf(arr2[i])
//             arr1.splice(index, 1)
//         }
//     }
//     return true
// }

// console.log(checkString('HELLO world', 'how'))
// console.log(checkString('HELLO world', 'hey'))
// console.log(checkString('HELLO world', 'ww'))

// Xử lý mảng
// ● Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined,
// // NaN, 0, ''''.

// function filter(arr) {
//     return arr.filter(Boolean)
// }

// console.log(filter([false, 1, null, undefined, 0, '', NaN ]))

// ● Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số
// [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].

// function filterMaxLength(arr) {
//     let maxLength = 0

//     arr.forEach(ele => {
//         if (ele.length > maxLength) {
//             maxLength = ele.length
//         }
//     })
//     return arr.filter(ele => ele.length == maxLength)
// }

// console.log(filterMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']))

// ● Bài 3: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên), kết quả trả về là 1
// mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào. Ví dụ truyền vào
// [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].

// function filterTwoArr(arr1, arr2) {
//     let newarr1 = arr1.filter(ele => !arr2.includes(ele))
//     let newarr2 = arr2.filter(ele => !arr1.includes(ele))
    
//     return newarr1.concat(newarr2)
// }

// console.log(filterTwoArr([1, 2, 3], [1, 3, 4, 5, 5]))


// ● Bài 4: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp
// (tính từ 1) theo kiểu ziczac. Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau
// [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].

// function createMatrix(row, col) {

// }

// Xử lý object
// ● Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
// const info = [
//     { name: 'Đạt', age: 20 }, 
//     { name: 'Đức', age: 18 },
//     { name: 'huy', age: 18 },
//     { name: 'Hiếu', age: 22 }
// ]

// function averageAge(arr) {
//     let sumAge = info.reduce((total, item) => {
//         return total + item.age
//     }, 0)
//     return sumAge / arr.length
// }

// console.log(averageAge(info))

// ● Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp
// xếp lại mảng trên theo tuổi học viên từ cao đến thấp.

// function sortAge(arr) {
//     return arr.sort((a, b) => b.age - a.age)
// }

// console.log(sortAge(info))


// ● Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp
// xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).

// function sortName(arr) {
//     return arr.sort((a, b) => a.name.localeCompare(b.name))
// }

// console.log(sortName(info))


// ● Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm lọc ra
// những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.

// function filterByName(arr) {
//     return arr.filter(item => item.name[0] == 'h' || item.name[0] == 'H')
// }

// console.log(filterByName(info))

// Tổng hợp
// ● Bài 1: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số
// thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví
// dụ với t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''.
// ● Bài 2: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại
// bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải
// bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên (x > 0, y > 0).
// ● Bài 3: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra
// 1 số nhỏ nhất (giữ nguyên số chữ số). Ví dụ với tham số 530751 thì kết quả là 103557.


