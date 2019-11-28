



//  NAVIGATION

const bigMenu = document.querySelector('.big-menu');

const navigationHandler = () => {

    if (document.documentElement.scrollTop > 50) {
        bigMenu.classList.add('no-top');
    } else {
        bigMenu.classList.remove('no-top');
    }
}
window.addEventListener('scroll', navigationHandler, false);
navigationHandler();

//  END NAVIGATION

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

// mainSwiper.on('slideChangeTransitionEnd', swiperSlideChange)
// swiperSlideChange()

const burgerButton = document.querySelector('.burger-menu');
const burgerMenuContentBox = document.querySelector('.main-full-menu-box');
const burgerLinks = document.querySelector('#links');

const changeBurgerClass = () => {
    burgerButton.toggleClasses('active', 'disactive');
    burgerMenuContentBox.toggleClasses('active');
}

burgerButton.addEventListener('click', changeBurgerClass, false);
burgerLinks.addEventListener('click', changeBurgerClass, false);






//  SWIPERS

const mainSwiperOptions = {
    direction: 'vertical',
    loop: false,
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
    loop: false,
    autoplay: {
        delay: 1600,
    },
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

// const contentElement = document.querySelectorAll('.contentElement')
// const swiperResult = document.querySelectorAll('.contentBox')

// const formOptionsSwiper = new Swiper('.form-options-swiper', {
//     slidesPerView: 1,
//     navigation: {
//         nextEl: '.form-options-right',
//         prevEl: '.form-options-left'
//     },
//     hashNavigation: true,
//     grabCursor: true
// });

// const formSwiper = new Swiper('.form-swiper', { // slidesPerColumn: 1,
//     slidesPerView: 1,
//     // direction: "vertical",
//     allowTouchMove: false,
//     // autoHeight: true,
//     hashNavigation: true
// });

// formOptionsSwiper.controller.control = formSwiper;
// formSwiper.controller.control = formOptionsSwiper;
