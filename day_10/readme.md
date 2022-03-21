## Function

### 1. Function là gì

- Function (hàm) là tập hợp các đoạn code dùng để thực hiện 1 tác vụ cụ thể nào đó
- Cú pháp:

```js
function myFunc(parameter1, parameter2 ...) {
    //function code
}
```

- Thực thi:

```js
myFunc(parameter1, parameter2 ...)
```

- Đặt tên hàm cũng tuân theo quy tắc đặt tên biến

### 2. Phạm vi của biến (scope)

- **_Scope_**: được định nghĩa là 1 vòng đời của biến, từ khi sinh ra đến khi chết đi
- Có 2 loại scope:
  - Global scope
  - Function scope
  - Block scope

> **NOTE:**
>
> - Khi khai báo 1 biến trong function mà không dùng từ khóa **let/const** thì biến đó sẽ trở thành **global**

Ví dụ:

```js
function myFunc() {
  c = 10;
  let a = 5;
}
myFunc();
console.log(c); // 10
console.log(a); // Uncaught ReferenceError: a is not defined
```

### 3. Function default values - ES6

- Cho phép khởi tạo function với **default value** nếu như tham số không được truyền

```js
Ví dụ:
function sum(a = 20, b =10) {
    return a + b
}

sum(15) //không truyền b nên b lấy giá trị default value = 10 -> a = 15, b = 10, kq = 25
```

## Boolean

### 1. Định nghĩa

- Giá trị của kiểu này chỉ là **True** hoặc **False**

### 2. Chuyển đổi sang kiểu dữ liệu Boolean

- Để xác định giá trị **Boolean** cho biến, biểu thức ta dùng hàm **Boolean()**

### 3. Truthy, Falsy value

- **Truthy value** là những giá trị ép kiểu về Boolean cho giá trị là **True** và cho giá trị là **False** thì là **Falsy value**

> **NOTE:**
>
> - Falsy có **6** giá trị: **false, 0, NaN, ' ', null, undefined**
> - Các giá trị còn lại là **Truthy**

## Câu lệnh điều kiện

### 1. Câu lệnh if

- Thực hiện câu lệnh **if** nếu điều kiện cho trước là đúng
- Cú pháp

```js
if (điều kiện) {
    // khối lệnh thực thi nếu điều kiện đúng
}
```

- Ví dụ

```js
if (number > 0) {
  console.log(`${number} là số dương`);
}
```

### 2. Câu lệnh if/else

- Nếu điều kiện đúng thực hiện câu lệnh trong **if**, ngược lại nếu sai thì thực hiện câu lệnh trong **else**

- Cú pháp

```js
if (điều kiện) {
    // khối lệnh thực thi nếu điều kiện đúng
} else {
    // khối lệnh thực thi nếu điều kiện sai
}
```

- Ví dụ

```js
if (number > 0) {
  console.log(`${number} là số dương`);
} else {
  console.log(`${number} không phải là số dương`);
}
```

### 3. Câu lệnh if/else if/else

- Chỉ định một điều kiện mới nếu điều kiện bên trên sai
- Cú pháp

```js
if (điều kiện 1) {
    // khối lệnh thực thi nếu điều kiện 1 đúng
} else if (điều kiện 2) {
    // khối lệnh thực thi nếu điều kiện 1 sai và điều kiện 2 đúng
} else {
    // khối lệnh thực thi nếu cả 2 điều kiện 1 và 2 sai
}
```

- Ví dụ

```js
if (number > 0) {
  console.log(`${number} là số dương`);
} else if (number < 0) {
  console.log(`${number} là số âm`);
} else {
  console.log(`${number} là số 0`);
}
```
