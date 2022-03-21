# JAVASCRIPT

## 1. JavaScript là gì?

- JavaScript là 1 **ngôn ngữ kịch bản** ở phía client
- Thường dùng kết hợp với HTML/CSS để tạp web động

## 2. JavaScript dùng để làm gì?

- Sửa đổi nội dung của 1 trang web
- Thay đổi style và vị trí của các thành phần trong trang web
- Phản hồi sự kiện từ người dùng
- Thực hiện và kiểm soát chuyển tiếp các hình động
- Thông báo cho người dùng
- Thao tác dữ liệu đầu vào và xử lý kết quả
- Xác thực dữ liệu của người dùng trước khi gửi nó đến máy chủ

## 3. Biến trong Javascript

### Biến là gì?

> **Biến là định danh dùng để lưu trữ dữ liệu, thông qua biến chúng ta thực hiện thao tác với dữ liệu**

### Khai báo biến

- Để khai báo biến ta dùng từ khóa **let**/**const**
- Khai báo biến bình thường dùng **let**

```js
let age = 10;
let fullName = "Vinh Bui";
// Biến khai báo bằng let có thể gán lại
age = 29;
fullName = "Ngọc Hà";
```

- Khai báo biến là hằng số dùng **const**

```js
const PI = 3.14;
const MAX_DAY_OF_MONTH = 31;
// Biến khai báo bằng const không thể gán lại

PI = 4.5;
MAX_DAY_OF_MONTH = 32;
// Uncaught TypeError: Assignment to constant variable at <anonymous>:1:6
```

### Quy tắc đặt tên biến

- Biến chứa các kí tự **chữ, số, $** và **\_**
- **Kí tự đầu tiên** không được là **số** (nên là chữ)
- Có phân biệt chữ hoa và thường
- Không đặt tên trung với các từ khóa trong Javascript như: **let, const, function, return ...**
- Nên đặt tên biến theo dạng **camelCase**
  ví dụ: getName, numOfData...

> **NOTE**: Tìm hiểu các từ khóa bạn không thể đặt tên biến trong Javascript tại: [https://www.w3schools.com/js/js_reserved.asp](https://www.w3schools.com/js/js_reserved.asp)

### Kiểm tra kiểu dữ liệu của biến

- Trong Javascript có 1 số kiểu dữ liệu cơ bản: **Number, String, Object, undefined, null, Boolean...**
- Cách kiểm tra kiểu dữ liệu của 1 biến ta dùng toán tử **typeof tenBien**

```js
let age = 20;
console.log(typeof age); // -> "number"
```

### String

- Gồm có không hoặc nhiều kí tự bên trong dấu ngoặc kép ( "" hoặc '' )

```js
let name = "Vinh Bui";
let newString = "$hello123";
```

### - Nối chuỗi trong Javascript

- Dùng toán tử + để nối 2 hoặc nhiều chuỗi với nhau

```js
let name = "Vinh Bui";
let desc = "đẹp trai";
let text = name + desc;
console.log(text); // -> "Vinh Bui đẹp trai"
```

### - Template strings - ES6

- Dùng kí tự **back-tick ``** thay cho kí tự ngoặc kép
- Có thể dùng biến, biểu thức bên trong với cú pháp **\`${expression}\`**

### Number

- Là 1 tập số bao gồm cả số nguyên và số thập phân
- Toán tử:

  - Cộng: +
  - Trừ: -
  - Nhân: \*
  - Chia: /
  - Chia lấy dư: %
  - Lũy thừa: \*\*

- Đối tượng **Math** trong Javascript

```js
- Math.max, Math.min: Tìm số lớn nhât nhỏ nhất
- Math.round, Math.ceil, Math.floor: làm tròn số
- Math.random(): Random 1 số trong khoảng từ 0 đến nhỏ hơn 1
```

## Boolean

- Giá trị của kiểu này là **true** hoặc **false**
- Để xác định giá trị Boolean cho biến, biểu thức,.. ta dùng hàm Boolean()

```js
let a = 5;
Boolean(a); // true
let b = 6;
Boolean(a > b); // false
```

### Truthy, Falsy value

- **Truthy** là những giá trị khi ép kiểu về Boolean cho ra giá trị **true**
- Ngược lại , **Falsy** là những giá trị ép kiểu Boolan cho ra giá trị **false**
