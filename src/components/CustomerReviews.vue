<template>
    <div class="bg-white rounded-lg p-6">
        <h2 class="text-center text-2xl font-bold mb-6">OUR HAPPY CUSTOMERS</h2>
        <div class="relative">
            <!-- Card Container -->
            <div class="flex overflow-x-auto space-x-4 scrollbar-hide">
                <div v-for="review in reviews" :key="review.id"
                    class="min-w-[300px] bg-gray-100 rounded-lg p-4 shadow-md flex-shrink-0">
                    <div class="flex items-center mb-4">
                        <span class="font-bold">{{ review.name }}</span>
                        <span class="ml-2 text-green-500">●</span>
                    </div>
                    <div class="flex items-center text-yellow-500 mb-2">
                        <i class="fas fa-star" v-for="n in 5" :key="n" />
                    </div>
                    <p class="text-gray-600 text-sm">{{ review.feedback }}</p>
                </div>
            </div>

            <!-- Navigation Arrows -->
            <button
                class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                @click="scrollLeft">
                <!-- ไอคอนลูกศรซ้าย -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                @click="scrollRight">
                <!-- ไอคอนลูกศรขวา -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Mock Data สำหรับรีวิวลูกค้า
const reviews = ref([
    {
        id: 1,
        name: 'Sarah M.',
        feedback:
            "A masterpiece! I bought 'The Dreamer,' and it's breathtaking. The artist's work is truly inspiring!",
    },
    {
        id: 2,
        name: 'Alex K.',
        feedback:
            "I can't stop staring at it! The butterfly painting is so mesmerizing. The brushstrokes and colors are just perfect." ,
    },
    {
        id: 3,
        name: 'James L.',
        feedback:
            "Gift for my wife, she loved it! The Mona Lisa print was a perfect anniversary gift. She was so happy!",
}]);

// ฟังก์ชันสำหรับการเลื่อนรีวิว
const scrollLeft = () => {
    const container = document.querySelector('.overflow-x-auto');
    container.scrollBy({ left: -300, behavior: 'smooth' });
};

const scrollRight = () => {
    const container = document.querySelector('.overflow-x-auto');
    container.scrollBy({ left: 300, behavior: 'smooth' });
};
</script>

<style scoped>
/* ซ่อน scrollbar */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>