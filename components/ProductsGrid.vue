<script setup>
const items = [
    {
        id: 1,
				title: 'Cake',
				price: 0,
				priceMin: 11,
				priceMax: 99,
				desc: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
				content: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
				imgSrc: 'product-1.jpg'
		},
    {
        id: 2,
        title: 'Bread',
        price: 0,
        priceMin: 11,
        priceMax: 99,
        desc: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
        content: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
        imgSrc: 'product-2.jpg'
    },
    {
        id: 3,
        title: 'Cookies',
        price: 0,
        priceMin: 11,
        priceMax: 99,
        desc: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
        content: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
        imgSrc: 'product-3.jpg'
    },
]
</script>

<template>
	<div class="row g4">
			<ProductsItem v-for="item in items" :key="item.id" :item-data="item" />
	</div>
</template>

<style scoped>

</style>
