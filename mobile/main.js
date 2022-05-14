const introImg = document.querySelector(".intro img");
const cameraImg = document.querySelector(".camera img");
const storageImg = document.querySelector(".storage img");
const screenImg = document.querySelector(".screen img");
const designedImg = document.querySelector(".designed img");
window.onload = () => {
  if (window.innerWidth <= 768) {
    introImg.src = "./assets/images/image2-s.jpg";
    cameraImg.src = "./assets/images/image3-s.jpg";
    screenImg.src = "./assets/images/image4-s.jpg";
    storageImg.src = "./assets/images/image5-s.jpg";
    designedImg.src = "./assets/images/image6-s.jpg";
  }
};

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    introImg.src = "./assets/images/image2-s.jpg";
    cameraImg.src = "./assets/images/image3-s.jpg";
    screenImg.src = "./assets/images/image4-s.jpg";
    storageImg.src = "./assets/images/image5-s.jpg";
    designedImg.src = "./assets/images/image6-s.jpg";
  } else {
    introImg.src = "./assets/images/image2.jpg";
    cameraImg.src = "./assets/images/image3.jpg";
    screenImg.src = "./assets/images/image4-big.jpg";
    storageImg.src = "./assets/images/image5-big.jpg";
    designedImg.src = "./assets/images/image6-big.jpg";
  }
});
