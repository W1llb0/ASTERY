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


