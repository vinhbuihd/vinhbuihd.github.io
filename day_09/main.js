//  Khai báo biến
let number
console.log(number); // -> undefined

number = 10
console.log(number);

// Vừa khai báo vừa khởi tạo giá trị
let email = "vinhhd94@gmail.com"
console.log(email);


// kiểm tra kiểu dữ liệu: 
console.log(typeof email);

let firstName = 'Bui'
let lastName = 'Vinh'
let year = 1994
let fullName = firstName + " " + lastName
console.log(fullName);

//Template String: cho phép truyền biến, biểu thức, giá trị

let message1 = `"Hà Nội" mùa thu`
console.log(message1);

let text = `Xin chào ${fullName} năm nay ${2021- year} tuổi`

console.log(text);

// Number
// Toán tử: + - * / % ** 
// Math object 
// Math.max, Math.min
// Math.random
// Math.round, Math.floor, Math.ceil
