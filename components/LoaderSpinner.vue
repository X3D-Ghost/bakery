<template>
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-grow text-primary" role="status"></div>
    </div>
</template>

<script setup>
import {onMounted} from "vue";

onMounted(()=> {
    const spinnerInit = () => {
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
    window.addEventListener('load', spinnerInit())
})
</script>

<style scoped>

</style>
