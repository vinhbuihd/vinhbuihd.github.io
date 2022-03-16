
const selectElement = document.querySelector('#breed-list')
const button = document.querySelector('button')
const ul = document.querySelector('.sub-breed-list')
const imageElement = document.querySelector('.image')

async function renderList() {
    try {
        const res = await axios.get('https://dog.ceo/api/breeds/list/all')
        const breedsList = Object.keys(res.data.message)

        breedsList.forEach(breed => {
            selectElement.innerHTML += `<option value="${breed}">${breed}</option>`
        })
    } catch (error) {
        console.log(error);
    }  
}

async function getSubBreeds() {
    imageElement.classList.add('hide')
    try {
        const res = await axios.get(`https://dog.ceo/api/breed/${selectElement.value}/list`)
        const subBreedsList = res.data.message

        if (subBreedsList.length === 0) {
            ul.innerHTML = `<li>Không có sub breed</li>`
        } else {
            ul.innerHTML = ''
            subBreedsList.forEach(subBreed => {
                ul.innerHTML += `<li><a onclick='getSubBreedImage(event)' class="sub-breed-item" href="#">${subBreed}</a></li>`
            })
        }
    } catch (error) {
        console.log(error);
    }
}

async function getSubBreedImage(e) {
    let res = await axios.get(`https://dog.ceo/api/breed/${selectElement.value}/${e.target.innerHTML}/images`)

    let subBreedImages = res.data.message

    // Random index
    let randomIndexImage = Math.floor(Math.random() * subBreedImages.length)
    
    let image = subBreedImages[randomIndexImage]
    imageElement.classList.remove('hide')
    imageElement.src = image
}

window.onload = renderList
button.addEventListener('click', getSubBreeds)


