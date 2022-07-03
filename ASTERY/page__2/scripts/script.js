const swiper = new Swiper('#swiper-image', {
    loop: true,
    navigation: {
        nextEl: '.olives__slider__button__next',
        prevEl: '.olives__slider__button__prev'
    },
    pagination: {
        el: '.slider__pagination',
        clickable: true,
    },
});

const swiperDiscount = new Swiper('#swiper__discount', {
    loop: true,
    navigation: {
        nextEl: '.slider__discount__button__next',
        prevEl: '.slider__discount__button__prev'
    },
    slidesPerView: 4,
});

const swiperNews = new Swiper('#swiper__news', {
    loop: true,
    navigation: {
        nextEl: '.slider__news__button__next',
        prevEl: '.slider__news__button__prev'
    },
    slidesPerView: 4,
});


const swiperOurPartners = new Swiper('#our__partners__slider', {
    loop: true,
    navigation: {
        nextEl: '.our__partners__slider__button__next',
        prevEl: '.our__partners__slider__button__prev'
    },
    slidesPerView: 5,
});

var counterVal = 0;
function CounterPlus() {
    if(counterVal < 30)
    updateDisplay(++counterVal);
}
function CounterMinus() {
    if(counterVal > 0)
    updateDisplay(--counterVal);
}
function updateDisplay(val) {
    document.getElementById("counter-amount").innerHTML = val;
}

