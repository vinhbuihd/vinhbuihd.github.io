// Bài 1. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.

function saoChep10Lan(string) {
    let totalString = ''
    for (let i = 1; i <= 10; i++) {
        totalString += string
    }
    return totalString
} 

// console.log(saoChep10Lan('minh'))


// Bài 2. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'

function repeatString(str) {
    let totalString = str
    for (let i = 1; i < 10; i++) {
        totalString = totalString + '-' + str
    }
    return totalString
}
console.log(repeatString('a'))


// Bài 3. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'

function repeatStringWithTime(string, n) {
    let totalString = ''
    if (n <= 1) {
        console.log('Nhập n > 1')
        return;
    }
    for (let i = 1; i <= n; i++) {
        if (i === n) {
            totalString = totalString + string
            break
        }
        totalString = totalString + string + '-'
    }
    return totalString
}

// console.log(repeatStringWithTime('vinh', 5))

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100

function sumNumbersDivisible5() {
    let sum = 0

    for (let i = 0; i <= 100; i += 5) {
        sum += i;
    }
    return sum
}

// console.log(sumNumbersDivisible5());

// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
// V = 4/3*PI*r**3
function tinhTheTichHinhCau(r) {
    if (r <= 0) {
        console.log('Nhập r > 0');
        return;
    }
    return 4/3*Math.PI*r**3;
}
// console.log(tinhTheTichHinhCau(1));
// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
// Note : Kết quả xuôi và ngược là như nhau
// Ví dụ :

// sum(3,8) = 22
// sum(8,3) = 22

function getSumBetweenTwoNumbers(a, b) {
    let sum = 0

    if (a > b) {
        [a, b] = [b, a] 
        // let temp
        // temp = a
        // a = b
        // b = temp
    }
    
    // for (let  i = a + 1; i < b; i++) {
    //     sum += i;
    // }
    sum = (a + b) * (b - a + 1) / 2 - a - b

    return sum
}


console.log(getSumBetweenTwoNumbers(8, 3));
console.log(getSumBetweenTwoNumbers(3, 8));
// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function isPrimeNumber(num) {
    let isPrimeNumber = false

    if (num  === 2) return !isPrimeNumber
    if (num % 2 === 0) return isPrimeNumber
    if (num > 2) {
        for (let i = 3; i <= Math.sqrt(num); i+= 2) {
            if (num % i === 0) {
                return isPrimeNumber
            }
        }
        return !isPrimeNumber
    }
    return isPrimeNumber
}

console.log(isPrimeNumber(4));

// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham
// số truyền vào.

function sumPrimeNumbers (num) {
    let sum = 0
    if (num < 0) {
        console.log('Nhập số nguyên dương')
        return
    }
    
    for (let i = 1; i <= num; i++) {
        if (isPrimeNumber(i)) {
            sum += i
        }
    }

    return sum
}

console.log(sumPrimeNumbers(100));

// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function tongCacUoc(num) {
    let sum = 0
    if (num <= 0) {
        console.log('Hãy nhập số nguyên dương')
        return;
    }
    for (let  i = 1; i <= num; i++) {
        if (num % i === 0) {
            sum += i
        }
    }
    return sum
}

console.log(tongCacUoc(8))

