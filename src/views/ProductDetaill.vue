<template>
    <div>
        <Navbar />
        <ProductDetaill />
        <Reviews />
        <YouMightAlsoLike />
        <Footer />
    </div>
</template>
<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import ProductDetaill from '../components/ProductDetailPage.vue'
import Reviews from '../components/RatingReviews.vue'
import Footer from '../components/Footer.vue'
import YouMightAlsoLike from '../components/YouMightAlsoLike.vue'
</script>