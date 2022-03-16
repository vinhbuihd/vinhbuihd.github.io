// document.addEventListener('click', function(e) {
//     console.log(e);
// })


document.addEventListener('mousemove', getBox)

function getBox(e) {

    const boxes = document.querySelectorAll('.box')
    Array.from(boxes).map(box => document.body.removeChild(box))
    // b1: tao the div
    const box = document.createElement('div')
    // b2: them class box
    box.classList.add('box')
    // b3: cập nhật vị trí
    box.style.top = `${e.offsetY - 50}px `
    box.style.left = `${e.offsetX - 50}px `

    // b4: gan vao DOM
    document.body.appendChild(box)

}

