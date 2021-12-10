var swiper = new Swiper(".Areas", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        414: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        767: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        // when window width is >= 640px
        990: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});