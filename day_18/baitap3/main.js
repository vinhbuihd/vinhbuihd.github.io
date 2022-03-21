const quotes = [
    {author: 'Vinh Bui', content: 'Nothing is impossible'},
    {author: 'Alex Ferguson', content: 'Phong độ là nhất thời, đẳng cấp là mãi mãi'},
    {author: 'Huấn Hoa Hồng', content: 'Có làm thì mới có ăn, cái loại không làm mà đòi có ăn, thì chỉ có ăn db, ăn c!'},
]

const button = document.querySelector('button')
const content = document.querySelector('.content')
const author = document.querySelector('.author')

button.addEventListener('click', function() {
    let index = Math.floor(Math.random() * quotes.length)
    content.textContent = quotes[index].content
    author.textContent = quotes[index].author
})

