# STRING METHOD

## 1. String Length

- Trả về độ dài của chuỗi
- Cú pháp: **string.length**

## 2. Trích xuất 1 phần của chuỗi

- Có 3 cách để cắt 1 chuỗi
  - slice(start, end)
  - substring(start, end)
  - substr(start, length)

### slice(start, end)

- Cắt 1 chuỗi trả về chuỗi mới
- Nhận 2 tham số là vị trí bắt đầu và kết thúc
- Nếu tham số âm thì nó sẽ đếm từ cuối chuỗi
- Nếu không truyền tham số thứ 2 thì nó sẽ cắt đến cuối chuỗi

### substring(start, end)

- Giống với **slice** nhưng không nhận tham số âm

### substr(start, length)

- Giống với **slice** nhưng tham số thứ 2 là độ dài chuỗi cần cắt

## 3. Thay thế nội dung content

- **replace(string1, string2)**
- Thay thế chuỗi string1 bằng string2
- Theo mặc định thì replace chỉ thay thế kết quả đầu tiên tìm thấy
- Để có thể thay thế hết
  - Ta dùng **biểu thức chính quy** với cờ **/g (global match)**
  - **replaceAll(string1, string2)**

## 4. Chuyển chuỗi sang mảng

- **string.split("")**

## 5. Cộng 2 chuỗi

- **string1.concat(string2)**

## 6. Chuyển 1 chuỗi sang chữ in hoa

- **string.toUpperCase()**

## 7. Chuyển 1 chuỗi sang chữ thường

- **string.toLowerCase()**

## 8. Loại bỏ khoảng trắng 2 bên của chuỗi

- **string.trim()**

## 8. Trích xuất các kí tự của chuỗi

- Có 3 cách:
  - **charAt(position):** trả về kí tự tại mục chỉ định, nếu không có trả về chuỗi rỗng
  - **charCodeAt(position):** trả về mã unicode của kí tự tại mục chỉ định, nếu không có trả về chuỗi rỗng
  - **string[index]:** trả về kí tự có vị trí = index, nếu không có trả về undefined

## 9. Chuyển 1 nội dung sang chuỗi

- **content.toString()**

## 10. Kiểm tra 1 chuỗi có bắt đầu hoặc kết thúc bằng kí tự chỉ định

- **string.startsWith(searchValue, start)**
- **string.endsWith(searchvalue, length)**
  - **searchvalue:** chuỗi cần tìm (bắt buộc)
  - **start:** vị trí bắt đầu, mặc định là 0 (ko bắt buộc)
  - Có phân biệt chữ hoa, thường
  - Trả về **true/false** nếu **tìm thấy/không tìm thấy**

## 11. Kiểm tra 1 chuỗi có chứa chuỗi chỉ định hay không

- **string.includes(searchvalue, start)**
  - **searchvalue:** chuỗi cần tìm (bắt buộc)
  - **start:** vị trí bắt đầu tìm, mặc định là 0 (ko bắt buộc)
  - Trả về **true/false** nếu **tìm thấy/không tìm thấy**

# 12. Lặp 1 chuỗi

- **string.repeat(count)**

# ARRAY METHOD

## 1. Kiểm tra độ dài mảng

- array.length

## 2. Cộng 2 mảng

- array1.concat(array2)

## 3. Biến mảng thành chuỗi

- array.join()

## 4. Thêm phần tử vào 1 mảng

- array.push(element): thêm vào cuối mảng -> trả về độ dài mảng mới
- array.unshift(element): thêm vào đầu mảng -> trả về độ dài mảng mới

## 5. Loại bỏ phần tử trong 1 mảng

- array.pop(): Loại bỏ phần tử cuối mảng -> trả về giá trị loại bỏ
- array.shift(): Loại bỏ phần tử đầu mảng -> trả về giá trị loại bỏ

## 6. Truy nhập và thay đổi giá trị phần tử của mảng bằng index của chúng

- array[index]

## 7. Lặp qua 1 mảng

- array.forEach()

## 8. Thay đổi nội dung 1 mảng

- array.splice(start, deleteCount, item1, item2, itemN)
  - **start**: vị trí bắt đầu
  - **deleteCount**: số lượng phần tử muốn loại bỏ -**item1, item2, itemN:** phần tử được thêm vào sau vị trí **start**

## 9. Sắp xếp 1 mảng

- array.sort()

## 10. Lọc 1 mảng với điều kiện

- **array.filter(callback)**: trả về mảng mới có cac phần tử thỏa mãn điều kiện (callback), nếu không có giá trị nào trả về mảng rỗng
- **array.find(callback)**: trả về phần tử đầu tiên thỏa mãn điều kiện (callback), nếu không có giá trị nào trả về **undefined**

## 11. Trả về mảng mới gồm các phần tử là kết quả của việc gọi hàm

- array.map(callback)

## 12. Áp dụng function callback trả về 1 kết quả

- array.reduce(callback, initialValue)
