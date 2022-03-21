// Các chức năng cần Làm
// 1. Hiển thị công việc
// 2. Thêm công việc
// 3. Thay đổi trạng thái công việc
// 4. Xóa công việc
// 5. Sửa tên công việc
// 6. Lọc công việc theo trạng thái

// Đối tượng công việc bao gồm: 
// 1. id
// 2. title - Tên
// 3. status - Trạng thái

let todos = []

const todolistEle = document.querySelector('.todo-list')
const inputEle = document.querySelector('#todo-input')
const btnAdd = document.querySelector('#btn-add')

const allBtn = document.querySelector('#all')
const unactiveBtn = document.querySelector('#unactive')
const activeBtn = document.querySelector('#active')
const editBtn = document.querySelector('#btn-edit')

function randomId() {
    return Math.random() * 10000
}

// 1. Hiển thị công việc

function renderTodos(arr) {
    // Xóa hết nội dung trước khi render
    todolistEle.innerHTML = ''
    // TH mảng rỗng
    if (arr.length === 0) {
        todolistEle.innerHTML = `<div class='todos-empty'>Không có công việc nào trong danh sách</div>`
        return
    }

    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];

        todolistEle.innerHTML += `
            <div class="todo-item ${t.status ? 'active-todo' : ''}">
                <div class="todo-item-title" >
                    <input 
                        type="checkbox" 
                        ${t.status ? 'checked' : ''}
                        onclick='toggleStatus(${t.id})'
                    />
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update" onclick='updateTodo(${t.id})'>
                        <img src="./img/pencil.svg" alt="icon" >
                    </button>
                    <button class="btn btn-delete" onclick='deleteTodo(${t.id})'>
                        <img src="./img/remove.svg" alt="icon" />
                    </button>
                </div>
            </div>
        `
        
    }

}

// renderTodos(todos)

// 2. Thêm công việc
function addTodos() {
        // Lấy nội dung trong ô input
        let inputValue = inputEle.value

        // Kiểm tra nội dung
        if (inputValue.trim() == '') {
            alert('Tiêu đề không được để trống')
            return
        }

        // Tạo ra công việc mới

        let newTodo = {
            id: randomId(),
            title: inputValue,
            status: false,
        }

        // Thêm vào mảng ban đầu
        todos.push(newTodo)

        // render lại giao diện
        setDataToLocalStorage(todos)
        inputEle.value = ''
        inputEle.focus()
}

btnAdd.addEventListener('click', addTodos)

// 3. Thay đổi trạng thái công việc

function toggleStatus(id) {
    // Cập nhật trạng thái công việc trong mảng todos tương ứng với id
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].status = !todos[i].status
            setDataToLocalStorage(todos)
            return
        }
    }
}

//4. Xóa công việc

function deleteTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        if (todo.id == id) {
            todos.splice(i ,1)
            setDataToLocalStorage(todos)
            return
        }  
    }
}

// Lấy dữ liệu từ localStorage
function getDataFromLocalStorage() {
    // Ví dụ trong local đã có mảng với key = 'todos'
    todos = JSON.parse(localStorage.getItem('todos')) || []
    renderTodos(todos)
}

window.onload = getDataFromLocalStorage

function setDataToLocalStorage(arr) {
    localStorage.setItem('todos', JSON.stringify(arr))
    renderTodos(todos)
}

// 6. Lọc công việc theo trạng thái
allBtn.addEventListener('click', function() {
    renderTodos(todos)
})

unactiveBtn.addEventListener('click', function() {
    let unactiveTodos = [...todos].filter(todo => todo.status === false)
    renderTodos(unactiveTodos)
})

activeBtn.addEventListener('click', function() {
    let activeTodos = [...todos].filter(todo => todo.status === true)
    renderTodos(activeTodos)
})

// const todoInputs = document.querySelectorAll('.todo-option input')
// console.log(todoInputs);

// todoInputs.forEach(input => {
//     input.addEventListener('change', function() {
//         renderTodos(todos)
//     })
// })

// // Lấy ra giá trị được Chọn

// function getOptionSelected() {
//     todoInputs.forEach(input => {
//         if (input.checked) {
//             return input.value
//         }
//     })
// }

// console.log(getOptionSelected());



// 5. Sửa tên công việc
let idEdit

function updateTodo(id) {
    // 1. input hiện tên công việc
    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i]
        if (todo.id === id) {
            idEdit = id
            inputEle.value = todo.title
            inputEle.focus()
            btnAdd.classList.add('hide')
            editBtn.classList.remove('hide')
        }

    }
}

// Lắng nghe sư kiện khi click vào nút update
editBtn.addEventListener('click', function() {
    todos.forEach(todo => {
        if (todo.id === idEdit) {
            todo.title = inputEle.value
        }
    })
    console.log(todos);
    setDataToLocalStorage(todos)
    inputEle.value = ''
    btnAdd.classList.remove('hide')
    editBtn.classList.add('hide')
})


