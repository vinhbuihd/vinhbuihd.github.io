// Promise: 

// Hứa: nếu có trên 30tr, sẽ mua ip13

let money = 37

let buyIphone = () => {
    return new Promise(function(resolve, reject) {
        if (money > 30) {
            resolve('Mua IPhone thôi') // Thành công
        } else {
            reject('Kiếm thêm tiền') // Thất bại
        }
    })
}

// Hứa tiếp
// Nếu mua iphone còn tiền mua AirPod 4 củ

let buyIpod = () => {
    return new Promise(function(resolve, reject) {
        if (money >= 34) {
            resolve('Mua tiếp AirPod')
        } else {
            reject('Không đủ tiền mua AirPod')
        }
    })
}

// Promise.all([buyIphone, buyIpod])
//     .then(res => console.log(res))
//     .catch(error => console.log(error))


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

async function buy() {
    try {
        let res = await buyIphone()
        console.log(res);

        let res1 = await buyIpod()
        console.log(res1);


    } catch (error) {
        console.log(error);
    }

    return 'Về nhà thôi'

}

// buy()

buy().then(res => console.log(res))