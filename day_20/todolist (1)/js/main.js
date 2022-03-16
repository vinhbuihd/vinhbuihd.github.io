/*
-- các chức năng:
1. Hiển thị công việc
2. Thêm công việc
3. Thay đổi trạng thái công việc
4. Xóa công việc
5. Chỉnh sửa tên công việc
6. Lọc công việc theo trạng thái
*/

// Đối tượng công việc bao gồm:
// - id 
// - title (tên công việc)
// - status (trạng thái công việc)

let todos = []

const todoListEl = document.querySelector('.todo-list');
const todoInputEl = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");
const todoOptionEls = document.querySelectorAll(".todo-option-item input");

let idUpdate = null;
let isUpdate = false;

function randomId() {
    return Math.floor(Math.random() * 100000);
}

// 1. Hiển thị công việc
function renderTodos(arr) {
    // Xóa hết nội dung trước khi render
    todoListEl.innerHTML = "";

    // Lọc cv theo trạng thái
    let newArr = filterTodo(arr);

    // Trường hợp mảng rỗng
    if (newArr.length == 0) {
        todoListEl.innerHTML = `<p class="todos-empty">Không có công việc nào trong danh sách</p>`;
        return
    }

    for (let i = 0; i < newArr.length; i++) {
        const t = newArr[i];
        todoListEl.innerHTML += `
            <div class="todo-item ${t.status ? "active-todo" : ""}">
                <div class="todo-item-title">
                    <input 
                        type="checkbox" 
                        ${t.status ? "checked" : ""}
                        onclick="toggleStatus(${t.id})"
                    />
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update" onclick="updateTodo(${t.id})">
                        <img src="./img/pencil.svg" alt="icon" />
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                        <img src="./img/remove.svg" alt="icon" />
                    </button>
                </div>
            </div>
        `
    }
}

function filterTodo(arr) {
    // Lấy ra giá trị mà đang được chọn
    let option = getOptionSelected();

    switch (option) {
        case "all": { // Tất cả công việc
            return [...arr];
        }
        case "unactive": { // Công việc chưa hoàn thành
            return arr.filter(todo => !todo.status);
        }
        case "active": { // Công việc đã hoàn thành
            return arr.filter(todo => todo.status);
        }
        default: { // Mặc định lấy tất cả công việc
            return [...arr];
        }
    }
}

// 2. Thêm công việc
btnAdd.addEventListener('click', function () {
    // Lấy nội dung trong ô input
    let title = todoInputEl.value;

    // Kiểm tra nội dung
    if (title.trim() == "") {
        alert("Tiêu đề không được để trống");
        return;
    }

    if (isUpdate) {
        // -- Cập nhật công việc
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == idUpdate) {
                todos[i].title = title
            }
        }

        btnAdd.innerText = "THÊM"

        idUpdate = null;
        isUpdate = false;

    } else {
        // -- Thêm công việc
        // Tạo ra công việc mới
        let newTodo = {
            id: randomId(),
            title: title,
            status: false
        }

        // Thêm vào mảng todos
        todos.push(newTodo);
    }



    // Render lại giao diện
    setDataToLocalStorage(todos)
    todoInputEl.value = ""
})

// 3. Thay đổi trạng thái công việc
function toggleStatus(id) {
    // Cập nhật lại trạng thái công việc trong mảng todos tương ứng với id
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].status = !todos[i].status
        }
    }

    // render lại giao diện
    setDataToLocalStorage(todos)
}

// 4. Xóa công việc
function deleteTodo(id) {
    // Xóa công việc trong mảng todos tương ứng với id
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1)
        }
    }

    // render lại giao diện
    setDataToLocalStorage(todos)
}

// 5. Chỉnh sửa tên công việc
function updateTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todoInputEl.value = todos[i].title;
            todoInputEl.focus();

            btnAdd.innerText = "CẬP NHẬT";
            idUpdate = id;
            isUpdate = true;
        }
    }
}

// 6. Lọc công việc theo trạng thái
todoOptionEls.forEach(input => {
    input.addEventListener('change', function () {
        renderTodos(todos)
    })
});

// Lấy ra giá trị trong ô input đang được chọn
function getOptionSelected() {
    for (let i = 0; i < todoOptionEls.length; i++) {
        if (todoOptionEls[i].checked) {
            return todoOptionEls[i].value
        }
    }
}

// Lấy dữ liệu từ localStorage
function getDataFromLocalStorage() {
    // Ví dụ đã lưu mảng trong localStorage với key = "todos"
    let value = localStorage.getItem("todos")
    if (value) {
        todos = JSON.parse(value)
    } else {
        todos = [];
    }
    renderTodos(todos)
}

function setDataToLocalStorage(arr) {
    localStorage.setItem("todos", JSON.stringify(arr));
    renderTodos(arr)
}

window.onload = getDataFromLocalStorage