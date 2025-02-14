<template>
    <div class="container mx-auto px-6 py-10">
        <!-- Navigation Tabs -->
        <nav class="flex space-x-6 border-b pb-3 mb-6">
            <a href="#" class="text-gray-500 hover:text-black font-medium">Product Details</a>
            <a href="#" class="text-black font-bold border-b-2 border-black pb-1">Rating & Reviews</a>
            <a href="#" class="text-gray-500 hover:text-black font-medium">FAQs</a>
        </nav>

        <!-- Header Section -->
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold">All Reviews (451)</h2>
            <div class="flex items-center space-x-4">
                <select class="border rounded-lg px-4 py-2">
                    <option>Latest</option>
                    <option>Highest Rated</option>
                    <option>Lowest Rated</option>
                </select>
                <button class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
                    Write a Review
                </button>
            </div>
        </div>

        <!-- Reviews Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="review in reviews" :key="review.id" class="bg-white p-6 rounded-lg shadow-md border">
                <div class="flex items-center mb-4">
                    <div class="flex-shrink-0">
                        <img src="https://i.pinimg.com/736x/7f/ea/ba/7feaba8ca30f2f0cd2acb1a77aaa40a0.jpg"
                            alt="Reviewer" class="w-10 h-10 rounded-full" />
                    </div>
                    <div class="ml-4">
                        <h4 class="font-bold text-lg">{{ review.name }}</h4>
                        <p class="text-gray-500 text-sm">{{ review.date }}</p>
                    </div>
                </div>
                <div class="flex items-center text-yellow-500 mb-4">
                    <i class="fas fa-star" v-for="n in review.rating" :key="n"></i>
                </div>
                <p class="text-gray-600 text-sm">{{ review.content }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Mock Data for Reviews
const reviews = ref([
    {
        id: 1,
        name: 'Samantha D.',
        rating: 5,
        content:
            "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        date: 'Posted on August 14, 2023',
    },
    {
        id: 2,
        name: 'Alex M.',
        rating: 4,
        content:
            "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        date: 'Posted on August 15, 2023',
    },
    {
        id: 3,
        name: 'Ethan R.',
        rating: 5,
        content:
            "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        date: 'Posted on August 16, 2023',
    },
    {
        id: 4,
        name: 'Olivia P.',
        rating: 4,
        content:
            "As a UX/UI enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        date: 'Posted on August 17, 2023',
    },
    {
        id: 5,
        name: 'Liam K.',
        rating: 5,
        content:
            "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        date: 'Posted on August 18, 2023',
    },
    {
        id: 6,
        name: 'Ava H.',
        rating: 4,
        content:
            "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this t-shirt a conversation starter.",
        date: 'Posted on August 19, 2023',
    },
]);
</script>

<style scoped>
/* เพิ่มเติมถ้าจำเป็น */
</style>