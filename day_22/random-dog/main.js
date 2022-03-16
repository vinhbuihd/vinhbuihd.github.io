
const btn = document.getElementById('btn')
const image = document.getElementById('image')

btn.addEventListener('click', function() {
    getRandomImage()
})


async function getRandomImage() {
    // Gọi API lấy ảnh
    try {
        let res = await axios.get('https://dog.ceo/api/breeds/image/random')
        image.src = res.data.message
    } catch (error) {
        console.log(error)
    }
    

    // Gán ảnh cho thẻ image
}