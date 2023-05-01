<template>
    <div class="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="carouselExampleAutoplaying" class="carousel header-carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <!--                <img src="..." class="d-block w-100" alt="...">-->
                    <img class="img-fluid" src="/img/carousel-1.jpg" alt="">
                    <div class="carousel-content">
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-lg-8">
                                    <p class="text-primary text-uppercase fw-bold mb-2">// The Best Bakery</p>
                                    <h1 class="display-1 text-light mb-4 animated slideInDown">We Bake With Passion</h1>
                                    <p class="text-light fs-5 mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum ipsum.</p>
                                    <a href="" class="btn btn-primary rounded-pill py-3 px-5">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
<!--                    <img src="..." class="d-block w-100" alt="...">-->
                    <img class="img-fluid" src="/img/carousel-2.jpg" alt="">
                    <div class="carousel-content">
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-lg-8">
                                    <p class="text-primary text-uppercase fw-bold mb-2">// The Best Bakery</p>
                                    <h1 class="display-1 text-light mb-4 animated slideInDown">We Bake With Passion</h1>
                                    <p class="text-light fs-5 mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum ipsum.</p>
                                    <a href="" class="btn btn-primary rounded-pill py-3 px-5">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import {useNuxtApp} from "nuxt/app";

onMounted(() => {
    const { $bootstrap } = useNuxtApp()
    const carousel = new $bootstrap.Carousel('#carouselExampleAutoplaying');
})

</script>

<style scoped lang="scss">
//.carousel {
//  background-color: $primary;
//}
</style>
