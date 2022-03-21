// Bài 1: Viết function nhập vào biến mark có giá trị từ 0 -> 100. Kiểm tra giá trị của biến mark và in ra nội dụng sau

// ”A” nếu mark >= 85
// ”B” nếu 70 <= mark < 85 (70 <= mark && mark < 85)
// ”C” nếu 40 <=mark < 70 (40 <= mark && mark <70)
// Các trường hợp còn lại in ra “D”

function checkMark(mark) {
    if (mark < 0 || mark > 100) {
        console.log('Nhập mark trong khoảng 0 -> 100');
    } else if (mark >= 85) {
       console.log('A');
   } else if (mark >= 70 && mark < 85) {
       console.log('B');
   } else if (mark >= 40 && mark < 70) {
       console.log('C');
   } else {
       console.log('D');
   }  
}

checkMark(1000)
checkMark(9)
checkMark(45)
checkMark(80)

// Bài 2: Viết function truyền vào 2 số a, b. In ra màn hình số có giá trị lớn hơn

function compare(a, b) {
    if (a >= b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

compare(13, 6)

// Bài 3: Viết function nhập vào 1 số. Kiểm tra số đó là số âm, số dương hay là số 0.

function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} là số dương`);
    } else if (num === 0) {
        console.log(`${num} la số 0`);
    } else {
        console.log(`${num} là số âm`);
    }
}

checkNumber(14)
checkNumber(-14)
checkNumber(0)

// Bài 4: Viết function nhập vào 1 số. Kiểm tra số đó là số chẵn hay số lẻ.
function checkOddOrEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} là số chẵn`);
    } else {
        console.log(`${num} là số lẻ`);
    }
}

checkOddOrEven(9)
checkOddOrEven(22)

// Bài 5: Viết function nhập vào 1 số. Kiểm tra số đó có đồng thời chia hết cho 3 và 5
// không.

function chiaHetCho3Va5(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`${num} chia hết cho cả 3 và 5`);
    } else {
        console.log(`${num} không chia hết cho cả 3 và 5`);
    }
}

chiaHetCho3Va5(15)
chiaHetCho3Va5(152)

// Bài 6: Viết function nhập vào 3 số a, b, c. Kiểm tra xem c có bằng a + b không?

function kiemTra3So(a, b, c) {
    if (a + b === c) {
        console.log(`${a} + ${b} = ${c}`);
    } else {
        console.log(`${a} + ${b} != ${c}`);
    }
}

kiemTra3So(1, 5, 7)
kiemTra3So(1, 5, 6)