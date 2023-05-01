import {defineNuxtPlugin} from "nuxt/app";

// Import only the Bootstrap components we need
// import { Popover } from 'bootstrap';
import { Carousel } from 'bootstrap';
import WOW from "wow.js/dist/wow";

export default defineNuxtPlugin(() => {

    // async setup(nuxtApp) {
        // this is the equivalent of a normal functional plugin
// Create an example popover
//         document.querySelectorAll('[data-bs-toggle="popover"]')
//             .forEach(popover => {
//                 new Popover(popover)
//             })

        // console.log('SSSS')
// Initiate the wowjs
        new WOW().init();

        // window.addEventListener('load', console.log('load'))
/*        const spinnerInit = () => {
            // Spinner
            // console.log('loaded')
            const spinner = function () {
                setTimeout(function () {
                    let el = document.querySelector('#spinner');
                    if (el) {
                    el.classList.remove('show');
                    }
                }, 1);
            };
            spinner();
        }
        window.addEventListener('load', spinnerInit())*/

    // Fixed Navbar
    // $('.fixed-top').css('top', $('.top-bar').height());
    // $(window).scroll(function () {
    //     if ($(this).scrollTop()) {
    //         $('.fixed-top').addClass('bg-dark').css('top', 0);
    //     } else {
    //         $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
    //     }
    // });
/*    const navbar = document.querySelector('.fixed-top')
    const topBarHeight = document.querySelector('.top-bar').clientHeight
    if (navbar) navbar.style.top = `${topBarHeight}px`

    window.addEventListener('scroll', ()=> {
        window.requestAnimationFrame(() => {
            console.log(window.scrollY)
            console.log({topBarHeight})
            navbar.classList.toggle('bg-dark', window.scrollY > 0)
            navbar.style.top = window.scrollY > 0 ? 0 : `${topBarHeight}px`
        })
    })*/


    // },


    return {
        provide: {
            // myPlugin: () => 'String generated from my auto-imported plugin!',
            bootstrap: {Carousel},
            test: 'ddd'
        }
    }
})
