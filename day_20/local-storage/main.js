

// Lưu

let todos = [
    {
        id: 1,
        title: 'Rửa bát',
        status: false
    },
    {
        id: 1,
        title: 'Quét nhà',
        status: true
    },
    {
        id: 1,
        title: 'Làm bài tập',
        status: true
    }

]
localStorage.setItem('name', 'Vinh bui')
localStorage.setItem('age', 22)
localStorage.setItem('number', JSON.stringify([1, 3 ,4]))
localStorage.setItem('todos', JSON.stringify(todos))

// Lấy giá trị

console.log(JSON.parse(localStorage.getItem('todos')));
console.log(JSON.parse(localStorage.getItem('number')));