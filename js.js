const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img')

//button

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

//counter = 1;
let counter = 1;
const size = carouselImages[0].clientWidth;
console.log(size)

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners 

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
})

carouselSlide.addEventListener('transitionend', () => {

    if (carouselImages[counter].id === 'lastClone') {
        console.log('las fird')
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        console.log(counter)
        carouselSlide.style.transform = 'translate(X' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        console.log('first fird')

        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translate(X' + (-size * counter) + 'px)';
    }
})