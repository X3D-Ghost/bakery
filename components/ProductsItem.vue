<script setup>
const props = defineProps({
    itemData: Object
})
const imgSrc = `img/${computed(()=>props.itemData.imgSrc).value}`
</script>

<template>
    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
            <div class="text-center p-4">
                <div class="d-inline-block border border-primary rounded-pill px-3 mb-3">{{props.itemData.price}} руб.</div>
                <h3 class="mb-3">{{props.itemData.title}}</h3>
                <span>{{ props.itemData.desc }}</span>
            </div>
            <div class="position-relative mt-auto">
                <img class="img-fluid" :src="imgSrc" :alt="props.itemData.title">
                <div class="product-overlay">
                    <a class="btn btn-lg-square btn-outline-light rounded-circle" href=""><i class="fa fa-eye text-primary"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
