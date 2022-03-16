// keydown : Được gọi khi ấn phím xuống một phím
// keypress : Được gọi khi ấn và giữ phím
// keyup : Được gọi khi nhả phím ra

// document.addEventListener('keydown', function(e) {
//     console.log(e);
//     if (e.keyCode === 13) {
//         console.log('Xin chao cac ban');
//     }
// })

const btn = document.querySelector('#btn')

window.addEventListener('scroll', function(e) {
    if (document.documentElement.scrollTop > 300) {
        btn.classList.remove('hide')
    } else {
        btn.classList.add('hide')
    }
})

btn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});