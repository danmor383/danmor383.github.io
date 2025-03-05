
const sliderLine = document.querySelector('.swiper-wrapper');
const cardWidth = document.querySelector('.swiper-slide').clientWidth;
const countSliders = document.querySelectorAll('.swiper-slide');

let offset = 0;
let currentIndex = 0;

document.querySelector('.swiper-arrow-prev').addEventListener('click', function nextSlide(){
    currentIndex--;
    console.log(currentIndex);
    if (currentIndex < 0) {
        currentIndex = 2;
        sliderLine.scrollBy({
            left: cardWidth*3,
            behavior: "smooth"
        });
    }
    else {
        sliderLine.scrollBy({
            left: -cardWidth,
            behavior: "smooth"
        });
    }
})

document.querySelector('.swiper-arrow-next').addEventListener('click', () => {
    currentIndex++;
    console.log(currentIndex);
    if (currentIndex > (countSliders.length-3)) {
        currentIndex = 0;
        sliderLine.scrollBy({
            left: -cardWidth * 3,
            behavior: "smooth"
        });
    }
    else {
        sliderLine.scrollBy({
            left: cardWidth,
            behavior: "smooth"
        });
    }
})
