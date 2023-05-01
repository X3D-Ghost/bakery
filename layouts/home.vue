<template>
    <LoaderSpinner />
    <Navbar />

    <slot />

    <SiteFooter />

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>

</template>

<script>
export default {
    name: "default"
}
</script>

<style scoped>

</style>
