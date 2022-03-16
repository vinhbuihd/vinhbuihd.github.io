// Promise: 

// Hứa: nếu có trên 30tr, sẽ mua ip13

let money = 33

let buyIphone = new Promise(function(resolve, reject) {
    if (money > 30) {
        resolve('Mua IPhone thôi') // Thành công
    } else {
        reject('Kiếm thêm tiền') // Thất bại
    }
})

// Hứa tiếp
// Nếu mua iphone còn tiền mua AirPod 4 củ

let buyIpod = new Promise(function(resolve, reject) {
    if (money >= 34) {
        resolve('Mua tiếp AirPod')
    } else {
        reject('Không đủ tiền mua AirPod')
    }
})

Promise.all([buyIphone, buyIpod])
    .then(res => console.log(res))
    .catch(error => console.log(error))


// buyIphone
//     .then(res => {
//         console.log(res)
//         return buyIpod
//     })

//     .then(res => {
//         console.log(res)
//     })
//     .catch(error => console.log(error))

//     .finally(() => console.log('Đi về nhà')) 
    //Luôn được thực hiện kể cả thành công hay thất bại
