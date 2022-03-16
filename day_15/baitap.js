const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'vinh', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Hiếu', grade: 2, sex: 'F'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'hoa', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

// 1. Viết function tính thứ hạng trung bình của cả lớp

function calculatorAvgClass(arr) {
    let total = 0
    for (const element of arr) {
        total += element.grade
    }
    return total / arr.length
}

console.log(calculatorAvgClass(grades));

// 2. Viết function tính thứ hạng trung bình của nam trong lớp

function calculatorAvgMens(arr) {
    let total = 0
    let count = 0
    for (const element of arr) {
        if (element.sex === 'M') {
            total += element.grade
            ++count
        }
    }
    return total / count
}

console.log(calculatorAvgMens(grades));


// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp

function calculatorAvgWomens(arr) {
    let total = 0
    let count = 0
    for (const element of arr) {
        if (element.sex === 'F') {
            total += element.grade
            ++count
        }
    }
    return total / count
}

console.log(calculatorAvgWomens(grades));

// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp

function maxMens(arr) {
    let maleArr = arr.filter(student => student.sex === 'M')
    let newArr = maleArr.sort((a, b) => a.grade - b.grade)
    return newArr.filter(student => student.grade === newArr[newArr.length - 1].grade)
}

console.log(maxMens(grades));


// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp

function maxWomens(arr) {
    let femaleArr = arr.filter(student => student.sex === 'F')
    let newArr = femaleArr.sort((a, b) => a.grade - b.grade)
    return newArr.filter(student => student.grade === newArr[newArr.length - 1].grade)
}

console.log(maxWomens(grades));

// 6. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp

// 7. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp

// 8. Viết function thứ hạng cao nhất của cả lớp

function maxClass(arr) {
    let classArr = arr.sort((a, b) => a.grade - b.grade)
    return classArr.filter(student => student.grade === classArr[classArr.length - 1].grade)
}

console.log(maxClass(grades));


// 9. Viết function thứ hạng thấp nhất của cả lớp

function minClass(arr) {
    let classArr = arr.sort((a, b) => a.grade - b.grade)
    return classArr.filter(student => student.grade === classArr[0].grade)
}

console.log(minClass(grades));

// 10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp

function femaleList(arr) {
    let femaleList = []

    for (const element of arr) {
        if (element.sex === 'F') {
            femaleList.push(element)
        }
    }
    return femaleList
}

console.log(femaleList(grades));

// 11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái

function sortByName(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name))
}

console.log(sortByName(grades));

// 12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần

function sortByGrade(arr) {
    return arr.sort((a, b) => b.grade - a.grade)
}

console.log(sortByGrade(grades));
// 13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng "J"

function femaleNameHasJFirst(arr) {
    const female = femaleList(arr)
    return female.filter(student => student.name.startsWith('J'))
}

console.log(femaleNameHasJFirst(grades));
// 14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp

function topFive(arr) {
    const sortList = arr.sort((a, b) => b.grade - a.grade)
    return sortList.slice(0, 5)
}

console.log(topFive(grades));