

const mainSwiperOptions = {
    direction: 'vertical',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 6,
    slideToClickedSlide: true,
    centeredSlides: true,
    allowTouchMove: false,
    breakpoints: {
        992: {
            direction: 'horizontal',
            slidesPerView: 3,
        }
    }
}

const patronsSwiperOptions = {
    loop: true,
    slidesPerView: 9,
    spaceBetween: 6,
    grabCursor: true,
    breakpoints: {
        1400: {
            slidesPerView: 6,
        },
        992: {
            slidesPerView: 4,
        },
        650: {
            slidesPerView: 2,
        }
    }
}


const mainSwiper = new Swiper('.mainSwiper', mainSwiperOptions);
const patronsSwiper = new Swiper('.patronSwiper', patronsSwiperOptions);

const contentElement = document.querySelectorAll('.contentElement')
const swiperResult = document.querySelectorAll('.contentBox')

const swiperSlideChange = () => {

    contentElement.forEach(item => {
        const id = item.getAttribute('data-id');
        const activeSlideId = document.querySelector('.swiper-slide-active').getAttribute('data-swiper-id')

        item.classList.remove('active')

        const element = id === activeSlideId && item

        if (element) {
            element.classList.add('active')
        }

    });

}

mainSwiper.on('slideChangeTransitionEnd', swiperSlideChange)
swiperSlideChange()