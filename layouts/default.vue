<template>
    <LoaderSpinner />
    <Navbar />

    <!-- Page Header Start -->
    <div class="container-fluid page-header py-6 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center pt-5 pb-3">
            <h1 class="display-4 text-white animated slideInDown mb-3">страница</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                    <li class="breadcrumb-item text-primary active" aria-current="page">страница</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Page Header End -->

    <slot />

    <SiteFooter />

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>

</template>

<script setup>
// useHead({
//     titleTemplate: (titleChunk) => {
//         return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
//     }
// })
// const route = useRoute()
// console.log(route)
// useHead({
//     meta: [{ property: 'og:title', content: `App Name - ${route.meta.title}` }]
// })
</script>

<style scoped>

</style>
