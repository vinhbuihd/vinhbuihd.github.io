 // Yêu cầu: Sử dụng Javascript để thực hiện các công việc sau

// 1. Thêm 3 job bổ sung vào phần 'job' của trang bằng cách sao chép 'job-card' ban đầu.

const jobs = document.querySelector('.jobs')

const jobCard = document.querySelector('.job-card')

const jobCard1 = jobCard.cloneNode(true)

const jobCard2 = jobCard.cloneNode(true)
const jobCard3 = jobCard.cloneNode(true)
jobs.appendChild(jobCard1)

jobs.appendChild(jobCard2)
jobs.appendChild(jobCard3)

// 2. Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
jobCard1.querySelector('h3').textContent = 'JavaScript Developer'
jobCard2.querySelector('h3').textContent = 'Java Developer'
jobCard3.querySelector('h3').textContent = 'Python Developer'

// 3. Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
const jobCards = document.querySelectorAll('.job-card')

document.querySelector('#jobs-listed span').textContent = jobCards.length

// 4. Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi

const search = document.querySelector('#search')

const nameJobs = document.querySelectorAll('.job-card h3')
console.log(nameJobs);

search.addEventListener('input', function(e) {
    let inputText = e.target.value.toLowerCase()
    nameJobs.forEach(nameJob => {
        const parent = nameJob.closest('.job-card')
        if (nameJob.textContent.toLowerCase().includes(inputText)) {
            parent.classList.remove('hide')
        } else {
            parent.classList.add('hide')
        }
    })
})

// 5. Bấm vào Nút "All jobs" để reset ô tìm kiếm và hiển thị ra tất cả các công việc

const allJobs = document.querySelector('#show-all');
console.log(allJobs);

allJobs.addEventListener('click', function() {
    search.value = ''
    jobCards.forEach(jobCard => {
        jobCard.classList.remove('hide')
    })
})

