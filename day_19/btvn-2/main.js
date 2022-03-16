let student_warning = {
    students: [
        {
            name: "Lê Hoài Nam",
            email: "namlehoai@gmail.com",
            phone: "123456789",
            total_off: 2,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Xin nghỉ ốm",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "05-09-2020",
                    note: "Buồn vì thất tình",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
        {
            name: "Đỗ Đăng Nguyên",
            email: "nguyen@gmail.com",
            phone: "0123987654",
            total_off: 2,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Mưa to nên ngại đi học",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "05-09-2020",
                    note: "Trượt lô, nên rút học phí để đánh",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
        {
            name: "Nguyễn Xuân Ba",
            email: "3nx92nd@gmail.com",
            phone: "0344005987",
            total_off: 3,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Đang training không đi học được",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "07-09-2020",
                    note: "Soạn giáo án đặc vụ 0175",
                    teacher: "Nguyễn Hàn Duy",
                },
                {
                    date: "10-09-2020",
                    note: "Ganks team còng lưng nên chưa đi học được",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
    ],

    class: "Lập trình Game 2D Canvas",
    course: "Lập trình Game",
    sessions: 14,
    teachers: [
        {
            name: "Bùi Hiên",
            email: "hien@techmaster.vn",
            phone: "0123456789",
        },
        {
            name: "Nguyễn Hàn Duy",
            email: "duy@techmaster.vn",
            phone: "0987654321",
        },
    ],
};

// Dựa vào thông tin của object student_warning. Hãy hiển thị dự liệu tương tự như demo trong mã HTML
// Cho file giao diện như sau: [index.html](https://techmaster.vn/media/download/source-code/bu0s4ps51co5836g4je0)

// Yêu cầu: render ra giao diện giống như hình dựa vào thông tin object student_warning trong phần script

// ![Ảnh demo](https://techmaster.vn/media/static/9479/bu0s64s51co5836g4jeg)
const tbody = document.querySelector('tbody')
const classInner = document.querySelector('.class-inner')

function printStudentInfo(students) {
    students.forEach((student, index) => { 
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td rowspan="${student.total_off}">${index + 1}</td>
            <td rowspan="${student.total_off}">${student.name}</td>
            <td rowspan="${student.total_off}">${student.email}</td>
            <td rowspan="${student.total_off}">${student.phone}</td>
            <td rowspan="${student.total_off}" class="text-center">${student.total_off}/${student.sessions}</td>
            <td class="text-center">${student.detail_info[0].date}</td>
            <td>${student.detail_info[0].note}</td>
            <td>${student.detail_info[0].teacher}</td> 
        `
        tbody.appendChild(tr)

        if (student.detail_info.length > 1) {
            for (let i = 1; i < student.detail_info.length; i++) {
                let tr = document.createElement('tr');

                tr.innerHTML = `
                    <td class="text-center">${student.detail_info[i].date}</td>
                    <td>${student.detail_info[i].note}</td>
                    <td>${student.detail_info[i].teacher}</td> 
                `

                tbody.appendChild(tr)
            }
            
        }
    })
}

function printClassInfo(classInfo) {
    const teachers = classInfo.teachers.map(teacher => {
        return `
            <li>${teacher.name} (${teacher.email} - ${teacher.phone})</li>
        `
    }).join('')

    classInner.innerHTML = `
        <p><span>Lớp học</span> : ${classInfo.class}</p>
        <p><span>Thuộc khóa học</span> : ${classInfo.course}</p>
        <p><span>Danh sách giảng viên</span> :</p>
        <ul>${teachers}</ul>
        <p></p>
        <p><span>Tổng số buổi</span> : ${classInfo.sessions}</p>
    `
}

printStudentInfo(student_warning.students)
printClassInfo(student_warning)

console.log(student_warning.students[0]);