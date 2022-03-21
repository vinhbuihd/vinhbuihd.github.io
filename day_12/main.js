// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

// Ví dụ:

// checkStringExist("i love you", "you") => true
// checkStringExist("i love you", "hate") => false

function checkStringExist(string, searchString) {
    if (string.indexOf(searchString) > -1) {
        return true
    }
    return false
}

console.log(checkStringExist('vinh bui hd', 'vinh'));
// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

// Ví dụ:

// shortenString("Xin chào các bạn") => "Xin chào..."
// shortenString("hello') => "hello"

function shortenString(string) {
    let newString = ''
    if (string.length > 8) {
        newString = string.slice(0, 8) + '...'
    } else {
        newString = string
    }
    return newString
} 

console.log(shortenString('vinhbuihd'));
// console.log(shortenString('12345'));
// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

// Ví dụ

// "Race car" => true,
// "hello world" => false.

function checkString(string) {
    let newString = ''
    let stringNoSpace = string.replace(/\s/g, '').toLowerCase()
    for (let i = 0; i < stringNoSpace.length; i++) {
        newString = stringNoSpace[i] + newString
    }
    if (stringNoSpace === newString) {
        return true
    }
    return false
}

console.log(checkString('Race car'));
// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

// Ví dụ

// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359

function arrangeNumbers(number) {
    let convertToArray = number.toString().split('')

    let newNumber = convertToArray.sort()
    if (newNumber[0] === '0') {
        for (let i = 1; i < newNumber.length; i++) {
            if (newNumber[i] !== '0') {
                [newNumber[0], newNumber[i]] = [newNumber[i], newNumber[0]]
                break;
            }
        }
    }
    return Number(newNumber.join(''))
}

console.log(arrangeNumbers(1207100912))


// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

// Ví dụ:

// "HELLO world" => "hello_world"
// "Xin Chào Các BẠN" => "xin_chào_các_bạn"

function convertToSnakeCase(string) {
    let newString = string.replace(/\s/g, '_')

    return newString.toLowerCase()
}

console.log(convertToSnakeCase('Xin Chào Các BẠN'))