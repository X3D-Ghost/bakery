<script setup>
const props = defineProps({
    itemData: Object
})
// const imgSrc = `/img/${computed(()=>props.itemData.imgSrc).value}`
</script>

<template>
    <div class="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
        <div class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
            <div class="text-center p-4">
                <div class="d-inline-block border border-primary rounded-pill px-3 mb-3">{{props.itemData.price}} руб.</div>
                <div>
                    <nuxt-link class="h3 mb-3" :to="props.itemData._path">{{props.itemData.title}}</nuxt-link>
                </div>
                <span>{{ props.itemData.description }}</span>
            </div>
            <div class="position-relative mt-auto">
                <img class="img-fluid" :src="`img/${props.itemData.imgSrc}`" :alt="props.itemData.title">
                <div class="product-overlay">
                    <nuxt-link class="btn btn-lg-square btn-outline-light rounded-circle" :to="props.itemData._path">
                        <i class="fa fa-eye text-primary" />
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
