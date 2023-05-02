<template>
    <!-- Topbar Start -->
    <div class="container-fluid top-bar bg-dark text-light px-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="row gx-0 align-items-center d-none d-lg-flex">
            <div class="col-lg-6 px-5 text-start">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><a class="small text-light" href="/">Главная</a></li>
                    <li class="breadcrumb-item"><a class="small text-light" href="/career">Карьера</a></li>
                    <li class="breadcrumb-item"><a class="small text-light" href="/terms">Условия</a></li>
                    <li class="breadcrumb-item"><a class="small text-light" href="/privacy">Конфиденциальность</a></li>
                </ol>
            </div>
            <div class="col-lg-6 px-5 text-end">
                <small>Следуйте за нами: </small>
                <div class="h-100 d-inline-flex align-items-center">
                    <a class="btn-lg-square text-primary border-end rounded-0" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn-lg-square text-primary border-end rounded-0" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn-lg-square text-primary border-end rounded-0" href=""><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn-lg-square text-primary pe-0" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->


    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <nuxt-link href="/" class="navbar-brand ms-4 ms-lg-0">
            <h1 class="text-primary m-0">Булочная</h1>
        </nuxt-link>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav mx-auto p-4 p-lg-0">
                <nuxt-link to="/" class="nav-item nav-link" activeClass="active">Главная</nuxt-link>
                <nuxt-link to="/about" class="nav-item nav-link" activeClass="active">О нас</nuxt-link>
                <nuxt-link to="/service" class="nav-item nav-link" activeClass="active">Услуги</nuxt-link>
                <nuxt-link to="/product" class="nav-item nav-link" activeClass="active">Продукция</nuxt-link>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Страницы</a>
                    <div class="dropdown-menu m-0">
                        <nuxt-link to="/team" class="dropdown-item" activeClass="active">Наша команда</nuxt-link>
                        <nuxt-link to="/testimonial" class="dropdown-item" activeClass="active">Отзывы</nuxt-link>
                        <nuxt-link to="/404" class="dropdown-item" activeClass="active">Страница ошибки 404</nuxt-link>
                    </div>
                </div>
                <nuxt-link href="/contact" class="nav-item nav-link">Контакты</nuxt-link>
            </div>
            <div class=" d-none d-lg-flex">
                <div class="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                    <i class="fa fa-phone text-primary"></i>
                </div>
                <div class="ps-3">
                    <small class="text-primary mb-0">Позвоните нам</small>
                    <p class="text-light fs-5 mb-0">+7 800 555 3535</p>
                </div>
            </div>
        </div>
    </nav>
    <!-- Navbar End -->
</template>

<script setup>
import {onMounted} from "vue";

onMounted(()=> {
    const navbar = document.querySelector('.fixed-top')
    const topBarHeight = document.querySelector('.top-bar').clientHeight
    if (navbar) navbar.style.top = `${topBarHeight}px`

    window.addEventListener('scroll', ()=> {
        window.requestAnimationFrame(() => {
            navbar.classList.toggle('bg-dark', window.scrollY > 0)
            navbar.style.top = window.scrollY > 0 ? 0 : `${topBarHeight}px`
        })
    })
})

</script>

<style scoped>

</style>
