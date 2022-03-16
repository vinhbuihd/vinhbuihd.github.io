const btn = document.getElementById('btn')
const image = document.getElementById('image')
const select = document.getElementById('breed-list')

// Load trang gọi api render danh sách breed
// api: https://dog.ceo/api/breeds/list/all

async function getBreesList() {
    let res = await axios.get('https://dog.ceo/api/breeds/list/all')

    const breedList = Object.keys(res.data.message)

    breedList.forEach(breed => {
        select.innerHTML += `<option value="${breed}">${breed}</option>`
    }) 

    getRandomImage()
}


async function getRandomImage() {
    try {
        let res = await axios.get(`https://dog.ceo/api/breed/${select.value}/images/random`)
        image.src = res.data.message
    } catch (error) {
        console.log(error);
    }
}


window.onload = getBreesList

btn.addEventListener('click', function() {
    getRandomImage()
})

select.addEventListener('change', function() {
    getRandomImage()
})
