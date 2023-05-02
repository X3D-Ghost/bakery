<template>
    <main>
    <!-- Product Start -->
    <div class="container-xxl bg-light my-6 py-6 pt-0" >
        <div class="container">
            <div class="bg-primary text-light rounded-bottom p-5 my-6 mt-0 wow fadeInUp" data-wow-delay="0.1s">
                <div class="row g-4 align-items-center">
                    <div class="col-lg-6">
                        <h1 class="display-4 text-light mb-0">Лучшая пекарня в вашем городе</h1>
                    </div>
                    <div class="col-lg-6 text-lg-end">
                        <div class="d-inline-flex align-items-center text-start">
                            <i class="fa fa-phone-alt fa-4x flex-shrink-0"></i>
                            <div class="ms-4">
                                <p class="fs-5 fw-bold mb-0">Позвоните нам</p>
                                <p class="fs-1 fw-bold mb-0">+012 345 6789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <p class="text-primary text-uppercase mb-2">// Выпечка</p>
                <h1 class="display-6 mb-4">Ознакомьтесь с категориями наших хлебобулочных изделий</h1>
            </div>
            <ContentList path="/product" v-slot="{ list }">
                <ProductsGrid :items="list" />
            </ContentList>
        </div>
    </div>
    <!-- Product End -->
    </main>
</template>

<script setup>
useHead({
    title: 'Продукция'
})
</script>

<style scoped>

</style>
