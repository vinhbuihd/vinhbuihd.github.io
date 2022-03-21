// Sử dụng jQuery để thực hiện những công việc sau

// 1. Thêm 3 thẻ `<li>` có nội dung **Item 8**, **Item 9**, **Item 10** vào cuối danh sách

for (let i = 8; i <= 10; i++) {
    $('#list').append(`<li>Item ${i}</li>`)
}

// 2. Sửa nội dung cho thẻ `<li> 1` thành màu đỏ (color)

$('li').first().css('color', 'red')

// 3. Sửa background cho thẻ `<li> 3` thành màu xanh (background-color)
$('ul li:nth-child(3)').css({
    'background-color': 'green'
})
// 4. Remove thẻ `<li> 4`

$('ul li:nth-child(4)').remove()

// 5. Thêm thẻ `<li>` mới thay thế cho thẻ `<li> 4` bị xóa ở bước trước, thẻ `<li>` mới có nội dung bất kỳ

$('ul li:nth-child(3)').after(`<li>Item Replace</li>`)

// 6. Thêm 1 nút `add` + 1 ô `input` để nhập text (tạo bằng Javascript).

$('ul').before(`<input type='text' placeholder='Add item...' >`)
$('ul').before(`<button class='add'>Add</button>`)

// - Mỗi khi bấm nút vào nút `add` thêm 1 thẻ `li` có nội dung là nội dung trong ô input vào cuối danh sách ul
$('.add').click(function() {
    let inputValue = $('input').val()
    if (inputValue == '') {
        alert('Item không được để trống')
        return
    }

    $('ul').append(`<li>${inputValue}</li>`)
    $('input').val('')
})
// - Trường hợp không có nội dung trong ô input mà bấm `add` thì cảnh báo (sử dụng alert)

// 7. Thêm 1 nút `remove` (tạo bằng Javascript). Chức năng để xóa `thẻ li cuối cùng` của danh sách ul

$('ul').before(`<button class='delete'>Xóa</button>`)

$('.delete').click(function() {
    $('ul li').last().remove()
})

// 8. Thêm 1 nút `Hide` trên đầu của danh sách ul
// - Khi bấm vào `Hide` thì ul sẽ `ẩn`. Đồng thời label của nút `Hide` => `Show`

// - Và ngược lại, khi bấm vào `Show` thì ul sẽ hiện. Đồng thời label của nút `Show` => `Hide`

$('ul').before(`<button class='hide'>hide</button>`)


$('.hide').click(function() {
    $('ul').toggle(function() {

        if ($('.hide').text() == 'show') {
            $('.hide').text('hide')
        } else {
            $('.hide').text('show')
        }
    })
})

